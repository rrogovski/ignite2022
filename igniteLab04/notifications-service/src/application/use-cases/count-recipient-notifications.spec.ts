import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { NotificationsServiceImp } from '../services/implementation/notifications-service-imp';

describe('Count recipient notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);

    await notificationRepository.create(
      makeNotification({
        recipientId: randomUUID(),
      }),
    );

    const recipientId = randomUUID();

    await notificationRepository.create(
      makeNotification({
        recipientId,
      }),
    );

    await notificationRepository.create(
      makeNotification({
        recipientId,
      }),
    );

    const { count } = await service.countManyByRecipientId(recipientId);

    expect(count).toEqual(2);
  });
});
