import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { ReadNotification } from './read-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);
    await readNotification.execute({ notificationId: notification.id });
    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a notification that does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    await expect(
      readNotification.execute({ notificationId: randomUUID() }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
