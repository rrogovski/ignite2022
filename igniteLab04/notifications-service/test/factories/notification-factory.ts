import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@src/application/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'any_recipient_id',
    content: new Content('any_content'),
    category: 'any_category',
    ...override,
  });
}
