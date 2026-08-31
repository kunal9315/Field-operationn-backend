"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WorkOrderService = class WorkOrderService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createWorkOrderDto, organizationId) {
        const customer = await this.prisma.customer.findFirst({
            where: {
                id: createWorkOrderDto.customerId,
                organizationId,
            },
        });
        if (!customer) {
            throw new common_1.NotFoundException('Customer not found');
        }
        const serviceRequest = await this.prisma.serviceRequest.findFirst({
            where: {
                id: createWorkOrderDto.serviceRequestId,
                organizationId,
            },
        });
        if (!serviceRequest) {
            throw new common_1.NotFoundException('Service request not found');
        }
        if (serviceRequest.customerId !==
            createWorkOrderDto.customerId) {
            throw new common_1.NotFoundException('Service request does not belong to this customer');
        }
        return this.prisma.workOrder.create({
            data: {
                organizationId,
                customerId: createWorkOrderDto.customerId,
                serviceRequestId: createWorkOrderDto.serviceRequestId,
                title: createWorkOrderDto.title,
                description: createWorkOrderDto.description,
                status: createWorkOrderDto.status,
                priority: createWorkOrderDto.priority,
                scheduledStart: createWorkOrderDto.scheduledStart
                    ? new Date(createWorkOrderDto.scheduledStart)
                    : undefined,
                scheduledEnd: createWorkOrderDto.scheduledEnd
                    ? new Date(createWorkOrderDto.scheduledEnd)
                    : undefined,
            },
        });
    }
    async findAll(organizationId) {
        return this.prisma.workOrder.findMany({
            where: {
                organizationId,
            },
            include: {
                customer: true,
                serviceRequest: true,
                assignments: true,
                events: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id, organizationId) {
        const workOrder = await this.prisma.workOrder.findFirst({
            where: {
                id,
                organizationId,
            },
            include: {
                customer: true,
                serviceRequest: true,
                assignments: {
                    include: {
                        technician: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
                events: true,
            },
        });
        if (!workOrder) {
            throw new common_1.NotFoundException('Work order not found');
        }
        return workOrder;
    }
    async update(id, updateWorkOrderDto, organizationId) {
        const existing = await this.prisma.workOrder.findFirst({
            where: {
                id,
                organizationId,
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException('Work order not found');
        }
        if (updateWorkOrderDto.customerId) {
            const customer = await this.prisma.customer.findFirst({
                where: {
                    id: updateWorkOrderDto.customerId,
                    organizationId,
                },
            });
            if (!customer) {
                throw new common_1.NotFoundException('Customer not found');
            }
        }
        if (updateWorkOrderDto.serviceRequestId) {
            const serviceRequest = await this.prisma.serviceRequest.findFirst({
                where: {
                    id: updateWorkOrderDto.serviceRequestId,
                    organizationId,
                },
            });
            if (!serviceRequest) {
                throw new common_1.NotFoundException('Service request not found');
            }
            const customerId = updateWorkOrderDto.customerId ??
                existing.customerId;
            if (serviceRequest.customerId !==
                customerId) {
                throw new common_1.NotFoundException('Service request does not belong to this customer');
            }
        }
        const updatedWorkOrder = await this.prisma.workOrder.update({
            where: {
                id,
            },
            data: updateWorkOrderDto,
            include: {
                customer: true,
                serviceRequest: true,
                assignments: {
                    include: {
                        technician: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
                events: true,
            },
        });
        if (updateWorkOrderDto.status &&
            updateWorkOrderDto.status !== existing.status) {
            await this.prisma.workOrderEvent.create({
                data: {
                    workOrderId: id,
                    status: updateWorkOrderDto.status,
                    notes: `Work order status changed from ${existing.status} to ${updateWorkOrderDto.status}`,
                },
            });
        }
        return this.prisma.workOrder.findFirst({
            where: {
                id,
                organizationId,
            },
            include: {
                customer: true,
                serviceRequest: true,
                assignments: {
                    include: {
                        technician: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
                events: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });
    }
    async remove(id, organizationId) {
        const existing = await this.prisma.workOrder.findFirst({
            where: {
                id,
                organizationId,
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException('Work order not found');
        }
        return this.prisma.workOrder.delete({
            where: {
                id,
            },
        });
    }
    async assignTechnician(workOrderId, technicianId, organizationId) {
        const workOrder = await this.prisma.workOrder.findFirst({
            where: {
                id: workOrderId,
                organizationId,
            },
        });
        if (!workOrder) {
            throw new common_1.NotFoundException('Work order not found');
        }
        const technician = await this.prisma.technician.findFirst({
            where: {
                id: technicianId,
                organizationId,
            },
            include: {
                user: true,
            },
        });
        if (!technician) {
            throw new common_1.NotFoundException('Technician not found');
        }
        if (!technician.isAvailable) {
            throw new common_1.NotFoundException('Technician is not available');
        }
        const existingAssignment = await this.prisma.workOrderAssignment.findFirst({
            where: {
                workOrderId,
                technicianId,
                unassignedAt: null,
            },
        });
        if (existingAssignment) {
            return this.prisma.workOrderAssignment.findUnique({
                where: {
                    id: existingAssignment.id,
                },
                include: {
                    technician: {
                        include: {
                            user: true,
                        },
                    },
                    workOrder: true,
                },
            });
        }
        await this.prisma.workOrderAssignment.updateMany({
            where: {
                workOrderId,
                unassignedAt: null,
            },
            data: {
                unassignedAt: new Date(),
            },
        });
        const assignment = await this.prisma.workOrderAssignment.create({
            data: {
                workOrderId,
                technicianId,
            },
            include: {
                technician: {
                    include: {
                        user: true,
                    },
                },
                workOrder: true,
            },
        });
        await this.prisma.workOrder.update({
            where: {
                id: workOrderId,
            },
            data: {
                status: 'ASSIGNED',
            },
        });
        return assignment;
    }
    async unassignTechnician(workOrderId, organizationId) {
        const workOrder = await this.prisma.workOrder.findFirst({
            where: {
                id: workOrderId,
                organizationId,
            },
        });
        if (!workOrder) {
            throw new common_1.NotFoundException('Work order not found');
        }
        const activeAssignment = await this.prisma.workOrderAssignment.findFirst({
            where: {
                workOrderId,
                unassignedAt: null,
            },
        });
        if (!activeAssignment) {
            throw new common_1.NotFoundException('No active technician assignment found');
        }
        const assignment = await this.prisma.workOrderAssignment.update({
            where: {
                id: activeAssignment.id,
            },
            data: {
                unassignedAt: new Date(),
            },
            include: {
                technician: {
                    include: {
                        user: true,
                    },
                },
                workOrder: true,
            },
        });
        await this.prisma.workOrder.update({
            where: {
                id: workOrderId,
            },
            data: {
                status: 'NEW',
            },
        });
        return assignment;
    }
};
exports.WorkOrderService = WorkOrderService;
exports.WorkOrderService = WorkOrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WorkOrderService);
//# sourceMappingURL=work-order.service.js.map