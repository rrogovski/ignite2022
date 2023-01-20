import { NotificationNotFound } from '../errors/notification-not-found';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationsServiceImp } from '../services/implementation/notifications-service-imp';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);
    await service.read({ notificationId: notification.id });
    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a notification that does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    await expect(
      service.read({ notificationId: randomUUID() }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
