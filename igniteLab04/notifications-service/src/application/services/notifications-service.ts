import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { BaseService } from './base-service';

export interface CancelNotificationRequest {
  notificationId: string;
}

export type CancelNotificationResponse = void;

export interface CountRecipientNotificationsRequest {
  recipientId: string;
}

export interface CountRecipientNotificationsResponse {
  count: number;
}

export interface ReadNotificationRequest {
  notificationId: string;
}

export type ReadNotificationResponse = void;

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

export interface UnreadNotificationRequest {
  notificationId: string;
}

export type UnreadNotificationResponse = void;

export abstract class NotificationsService extends BaseService<
  Notification,
  string,
  NotificationsRepository
> {
  abstract countManyByRecipientId(recipientId: string): Promise<number>;

  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;

  abstract cancel(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse>;

  abstract count(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse>;

  abstract read(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse>;

  abstract send(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse>;

  abstract unread(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse>;
}
