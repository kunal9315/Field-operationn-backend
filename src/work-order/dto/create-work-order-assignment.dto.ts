import { IsUUID } from 'class-validator';

export class CreateWorkOrderAssignmentDto {
  @IsUUID()
  technicianId: string;
}