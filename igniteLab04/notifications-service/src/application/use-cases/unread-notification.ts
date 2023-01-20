import { NotificationNotFound } from './errors/notification-not-found';
import { NotificationsRepository } from '@src/application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface UnreadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(
    private readonly notificationRepository: NotificationsRepository,
  ) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.unread();
    await this.notificationRepository.save(notification);
  }
}
