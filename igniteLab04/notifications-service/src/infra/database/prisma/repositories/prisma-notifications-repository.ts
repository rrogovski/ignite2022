import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationsRepository } from '@src/application/repositories/notifications-repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: { recipientId },
    });

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: { recipientId },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async search(
    search: Partial<NotificationProps>,
    take: number,
  ): Promise<Notification[]> {
    const where = {};

    if (search.recipientId) {
      where['recipientId'] = search.recipientId;
    }

    console.log('where', where);
    console.log('search', search);
    console.log('take', take);

    const notifications = await this.prismaService.notification.findMany({
      take,
      where,
      orderBy: [{ category: 'asc' }, { createdAt: 'desc' }],
    });

    console.log('notifications', notifications);

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  searchPagination(
    search: Partial<Notification>,
    page: number,
    limit: number,
  ): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
