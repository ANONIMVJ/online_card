import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { ClientsModule } from '../clients/clients.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Notification]), ClientsModule, JwtModule],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}