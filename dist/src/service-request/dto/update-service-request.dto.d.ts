import { WorkOrderPriority } from '@prisma/client';
export declare class UpdateServiceRequestDto {
    customerId?: string;
    title?: string;
    description?: string;
    priority?: WorkOrderPriority;
}
