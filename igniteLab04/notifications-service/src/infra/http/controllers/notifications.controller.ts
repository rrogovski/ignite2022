import { CreateNotificationBody } from './../dtos/create-notification-body';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationViewModel } from '../view-models/notificaion-view-model';
import { NotificationsService } from '@src/application/services/notifications-service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get()
  async getAll() {
    return {
      notifications: [],
    };
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.notificationsService.send({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }

  // @Patch(':id/cancel')
  // async cancel(@Param('id') id: string) {}

  // async read() {}

  // async unread() {}

  // async countByRecipientId() {}

  // async getByRecipientId() {}
}
