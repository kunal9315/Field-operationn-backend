import { WorkOrderPriority } from '@prisma/client';
export declare class CreateServiceRequestDto {
    customerId: string;
    title: string;
    description: string;
    priority: WorkOrderPriority;
}
