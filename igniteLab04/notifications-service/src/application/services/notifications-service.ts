import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { BaseService } from './base-service';

export type NotificationRequest = Partial<NotificationProps>;

export interface CountRecipientNotificationsResponse {
  count: number;
}

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

export abstract class NotificationsService extends BaseService<
  Notification,
  string,
  NotificationsRepository
> {
  abstract send(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse>;

  abstract countManyByRecipientId(
    recipientId: string,
  ): Promise<CountRecipientNotificationsResponse>;

  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;

  abstract cancel(notificationId: string): Promise<void>;

  abstract read(notificationId: string): Promise<void>;

  abstract unread(notificationId: string): Promise<void>;
}
