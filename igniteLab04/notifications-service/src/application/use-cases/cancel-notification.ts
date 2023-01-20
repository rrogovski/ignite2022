import { NotificationNotFound } from './errors/notification-not-found';
import { NotificationsRepository } from '@src/application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(
    private readonly notificationRepository: NotificationsRepository,
  ) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.cancel();
    await this.notificationRepository.save(notification);
  }
}
