import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import {
  WorkOrderPriority,
  WorkOrderStatus,
} from '@prisma/client';

export class CreateWorkOrderDto {
  @IsUUID()
  @IsNotEmpty()
  customerId: string;

  @IsUUID()
  @IsOptional()
  serviceRequestId?: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(WorkOrderStatus)
  @IsOptional()
  status?: WorkOrderStatus;

  @IsEnum(WorkOrderPriority)
  @IsOptional()
  priority?: WorkOrderPriority;

  @IsISO8601()
  @IsOptional()
  scheduledStart?: string;

  @IsISO8601()
  @IsOptional()
  scheduledEnd?: string;
}