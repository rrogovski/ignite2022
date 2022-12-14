import { Notification } from './notification';
import { randomUUID } from 'crypto';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new Content('Hello World'),
      category: 'test',
    });
    expect(notification).toBeTruthy();
  });
});
