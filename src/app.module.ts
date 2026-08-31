import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomerModule } from './customer/customer.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServiceRequestModule } from './service-request/service-request.module';
import { WorkOrderModule } from './work-order/work-order.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    CustomerModule,
    UsersModule,
    AuthModule,
    ServiceRequestModule,
    WorkOrderModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
  ],
})
export class AppModule {}