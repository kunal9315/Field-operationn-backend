import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
export declare class ServiceRequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createServiceRequestDto: CreateServiceRequestDto, organizationId: string): Promise<{
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
    findAll(organizationId: string): Promise<({
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
    findOne(id: string, organizationId: string): Promise<{
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
    update(id: string, updateServiceRequestDto: UpdateServiceRequestDto, organizationId: string): Promise<{
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
    remove(id: string, organizationId: string): Promise<{
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
