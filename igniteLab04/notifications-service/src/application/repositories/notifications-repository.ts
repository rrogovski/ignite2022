import { Notification } from '@application/entities/notification';
import { BaseRepository } from './base-repository';

export abstract class NotificationsRepository extends BaseRepository<
  Notification,
  string
> {
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
