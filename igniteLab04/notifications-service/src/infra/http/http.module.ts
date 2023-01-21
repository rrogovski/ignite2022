import { NotificationsServiceImp } from './../../application/services/implementation/notifications-service-imp';
import { NotificationsService } from '@src/application/services/notifications-service';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    {
      provide: NotificationsService,
      useClass: NotificationsServiceImp,
    },
  ],
  exports: [NotificationsService],
})
export class HttpModule {}
