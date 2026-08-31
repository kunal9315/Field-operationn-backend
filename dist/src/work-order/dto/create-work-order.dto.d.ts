import { WorkOrderPriority, WorkOrderStatus } from '@prisma/client';
export declare class CreateWorkOrderDto {
    customerId: string;
    serviceRequestId?: string;
    title: string;
    description: string;
    status?: WorkOrderStatus;
    priority?: WorkOrderPriority;
    scheduledStart?: string;
    scheduledEnd?: string;
}
