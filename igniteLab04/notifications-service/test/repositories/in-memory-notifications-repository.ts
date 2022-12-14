import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
