import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { NotificationsServiceImp } from '../services/implementation/notifications-service-imp';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const service = new NotificationsServiceImp(notificationRepository);
    const { notification } = await service.send({
      recipientId: randomUUID(),
      content: 'Hello World',
      category: 'test',
    });
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
