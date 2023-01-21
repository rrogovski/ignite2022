import { NotificationNotFound } from '../errors/notification-not-found';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationsServiceImp } from '../services/implementation/notifications-service-imp';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationRepository.create(notification);
    await service.unread(notification.id);
    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a notification that does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    await expect(service.unread(randomUUID())).rejects.toThrow(
      NotificationNotFound,
    );
  });
});
