import { NotificationsServiceImp } from './../services/implementation/notifications-service-imp';
import { NotificationNotFound } from '../errors/notification-not-found';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);
    await service.cancel(notification.id);
    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    await expect(service.cancel(randomUUID())).rejects.toThrow(
      NotificationNotFound,
    );
  });
});
