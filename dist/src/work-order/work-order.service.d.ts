import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkOrderDto } from './dto/create-work-order.dto';
import { UpdateWorkOrderDto } from './dto/update-work-order.dto';
export declare class WorkOrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createWorkOrderDto: CreateWorkOrderDto, organizationId: string): Promise<{
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
    }>;
    findAll(organizationId: string): Promise<({
        assignments: {
            id: string;
            workOrderId: string;
            technicianId: string;
            assignedAt: Date;
            unassignedAt: Date | null;
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
        serviceRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            description: string;
            customerId: string;
            title: string;
            priority: import("@prisma/client").$Enums.WorkOrderPriority;
        } | null;
        events: {
            id: string;
            createdAt: Date;
            status: import("@prisma/client").$Enums.WorkOrderStatus;
            workOrderId: string;
            notes: string | null;
        }[];
    } & {
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
    })[]>;
    findOne(id: string, organizationId: string): Promise<{
        assignments: ({
            technician: {
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    email: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    status: import("@prisma/client").$Enums.UserStatus;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                organizationId: string;
                userId: string;
                phone: string | null;
                isAvailable: boolean;
                latitude: import("@prisma/client-runtime-utils").Decimal | null;
                longitude: import("@prisma/client-runtime-utils").Decimal | null;
            };
        } & {
            id: string;
            workOrderId: string;
            technicianId: string;
            assignedAt: Date;
            unassignedAt: Date | null;
        })[];
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
        serviceRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            description: string;
            customerId: string;
            title: string;
            priority: import("@prisma/client").$Enums.WorkOrderPriority;
        } | null;
        events: {
            id: string;
            createdAt: Date;
            status: import("@prisma/client").$Enums.WorkOrderStatus;
            workOrderId: string;
            notes: string | null;
        }[];
    } & {
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
    }>;
    update(id: string, updateWorkOrderDto: UpdateWorkOrderDto, organizationId: string): Promise<({
        assignments: ({
            technician: {
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    email: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    status: import("@prisma/client").$Enums.UserStatus;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                organizationId: string;
                userId: string;
                phone: string | null;
                isAvailable: boolean;
                latitude: import("@prisma/client-runtime-utils").Decimal | null;
                longitude: import("@prisma/client-runtime-utils").Decimal | null;
            };
        } & {
            id: string;
            workOrderId: string;
            technicianId: string;
            assignedAt: Date;
            unassignedAt: Date | null;
        })[];
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
        serviceRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            description: string;
            customerId: string;
            title: string;
            priority: import("@prisma/client").$Enums.WorkOrderPriority;
        } | null;
        events: {
            id: string;
            createdAt: Date;
            status: import("@prisma/client").$Enums.WorkOrderStatus;
            workOrderId: string;
            notes: string | null;
        }[];
    } & {
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
    }) | null>;
    remove(id: string, organizationId: string): Promise<{
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
    }>;
    assignTechnician(workOrderId: string, technicianId: string, organizationId: string): Promise<({
        technician: {
            user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                organizationId: string;
                email: string;
                passwordHash: string;
                firstName: string;
                lastName: string;
                status: import("@prisma/client").$Enums.UserStatus;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            userId: string;
            phone: string | null;
            isAvailable: boolean;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
        };
        workOrder: {
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
        };
    } & {
        id: string;
        workOrderId: string;
        technicianId: string;
        assignedAt: Date;
        unassignedAt: Date | null;
    }) | null>;
    unassignTechnician(workOrderId: string, organizationId: string): Promise<{
        technician: {
            user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                organizationId: string;
                email: string;
                passwordHash: string;
                firstName: string;
                lastName: string;
                status: import("@prisma/client").$Enums.UserStatus;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            userId: string;
            phone: string | null;
            isAvailable: boolean;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
        };
        workOrder: {
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
        };
    } & {
        id: string;
        workOrderId: string;
        technicianId: string;
        assignedAt: Date;
        unassignedAt: Date | null;
    }>;
}
