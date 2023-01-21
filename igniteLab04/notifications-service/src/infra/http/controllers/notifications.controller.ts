import { CreateNotificationBody } from './../dtos/create-notification-body';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationViewModel } from '../view-models/notificaion-view-model';
import { NotificationsService } from '@src/application/services/notifications-service';
import { Notification } from '@src/application/entities/notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Post('/search')
  async search(@Body() search: Partial<Notification>) {
    return await this.notificationsService.search(search);
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

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.notificationsService.cancel(id);

    // return {
    //   message: 'Notification canceled',
    // };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.notificationsService.read(id);
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.notificationsService.unread(id);
  }

  @Get('/count-by-recipient-id/:id')
  async countByRecipientId(@Param('id') id: string) {
    const { count } = await this.notificationsService.countManyByRecipientId(
      id,
    );

    return {
      count,
    };
  }

  // async getByRecipientId() {}
}
