import { NotificationNotFound } from './errors/notification-not-found';
import { NotificationsRepository } from '@src/application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(
    private readonly notificationRepository: NotificationsRepository,
  ) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.read();
    await this.notificationRepository.save(notification);
  }
}
