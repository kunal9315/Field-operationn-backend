import { ServiceRequestService } from './service-request.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
export declare class ServiceRequestController {
    private readonly serviceRequestService;
    constructor(serviceRequestService: ServiceRequestService);
    create(createServiceRequestDto: CreateServiceRequestDto, req: any): Promise<{
        customer: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            city: string | null;
            state: string | null;
            postalCode: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        description: string;
        customerId: string;
        title: string;
        priority: import("@prisma/client").$Enums.WorkOrderPriority;
    }>;
    findAll(req: any): Promise<({
        workOrders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            status: import("@prisma/client").$Enums.WorkOrderStatus;
            description: string;
            customerId: string;
            title: string;
            priority: import("@prisma/client").$Enums.WorkOrderPriority;
            serviceRequestId: string | null;
            scheduledStart: Date | null;
            scheduledEnd: Date | null;
        }[];
        customer: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            city: string | null;
            state: string | null;
            postalCode: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        description: string;
        customerId: string;
        title: string;
        priority: import("@prisma/client").$Enums.WorkOrderPriority;
    })[]>;
    findOne(id: string, req: any): Promise<{
        workOrders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            status: import("@prisma/client").$Enums.WorkOrderStatus;
            description: string;
            customerId: string;
            title: string;
            priority: import("@prisma/client").$Enums.WorkOrderPriority;
            serviceRequestId: string | null;
            scheduledStart: Date | null;
            scheduledEnd: Date | null;
        }[];
        customer: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            city: string | null;
            state: string | null;
            postalCode: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        description: string;
        customerId: string;
        title: string;
        priority: import("@prisma/client").$Enums.WorkOrderPriority;
    }>;
    update(id: string, updateServiceRequestDto: UpdateServiceRequestDto, req: any): Promise<{
        workOrders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            status: import("@prisma/client").$Enums.WorkOrderStatus;
            description: string;
            customerId: string;
            title: string;
            priority: import("@prisma/client").$Enums.WorkOrderPriority;
            serviceRequestId: string | null;
            scheduledStart: Date | null;
            scheduledEnd: Date | null;
        }[];
        customer: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            email: string | null;
            phone: string | null;
            address: string | null;
            city: string | null;
            state: string | null;
            postalCode: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        description: string;
        customerId: string;
        title: string;
        priority: import("@prisma/client").$Enums.WorkOrderPriority;
    }>;
    remove(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        description: string;
        customerId: string;
        title: string;
        priority: import("@prisma/client").$Enums.WorkOrderPriority;
    }>;
}
