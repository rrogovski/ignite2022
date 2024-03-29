import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { NotificationsServiceImp } from '../services/implementation/notifications-service-imp';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
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

    const notifications = await service.findManyByRecipientId(recipientId);

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ]),
    );
  });
});
