import { BaseServiceImp } from './base-service-imp';
import { Notification } from '@src/application/entities/notification';
import { NotificationsRepository } from '@src/application/repositories/notifications-repository';
import {
  CountRecipientNotificationsResponse,
  NotificationsService,
  SendNotificationRequest,
  SendNotificationResponse,
} from '../notifications-service';
import { NotificationNotFound } from '@src/application/errors/notification-not-found';
import { Content } from '@src/application/entities/content';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsServiceImp
  extends BaseServiceImp<Notification, string, NotificationsRepository>
  implements NotificationsService
{
  constructor(repository: NotificationsRepository) {
    super(repository);
  }

  async countManyByRecipientId(
    recipientId: string,
  ): Promise<CountRecipientNotificationsResponse> {
    const count = await this.repository.countManyByRecipientId(recipientId);
    return { count };
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return await this.repository.findManyByRecipientId(recipientId);
  }

  async cancel(notificationId: string): Promise<void> {
    const notification = await this.repository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.cancel();
    await this.repository.save(notification);
  }

  async read(notificationId: string): Promise<void> {
    const notification = await this.repository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.read();
    await this.repository.save(notification);
  }

  async send(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.repository.create(notification);

    return { notification };
  }

  async unread(notificationId: string): Promise<void> {
    const notification = await this.repository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.unread();
    await this.repository.save(notification);
  }
}
