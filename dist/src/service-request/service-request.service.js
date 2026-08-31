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
exports.ServiceRequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServiceRequestService = class ServiceRequestService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createServiceRequestDto, organizationId) {
        const customer = await this.prisma.customer.findFirst({
            where: {
                id: createServiceRequestDto.customerId,
                organizationId,
            },
        });
        if (!customer) {
            throw new common_1.NotFoundException('Customer not found');
        }
        return this.prisma.serviceRequest.create({
            data: {
                organizationId,
                customerId: createServiceRequestDto.customerId,
                title: createServiceRequestDto.title,
                description: createServiceRequestDto.description,
                priority: createServiceRequestDto.priority,
            },
            include: {
                customer: true,
            },
        });
    }
    async findAll(organizationId) {
        return this.prisma.serviceRequest.findMany({
            where: {
                organizationId,
            },
            include: {
                customer: true,
                workOrders: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id, organizationId) {
        const serviceRequest = await this.prisma.serviceRequest.findFirst({
            where: {
                id,
                organizationId,
            },
            include: {
                customer: true,
                workOrders: true,
            },
        });
        if (!serviceRequest) {
            throw new common_1.NotFoundException('Service request not found');
        }
        return serviceRequest;
    }
    async update(id, updateServiceRequestDto, organizationId) {
        const existing = await this.prisma.serviceRequest.findFirst({
            where: {
                id,
                organizationId,
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException('Service request not found');
        }
        if (updateServiceRequestDto.customerId) {
            const customer = await this.prisma.customer.findFirst({
                where: {
                    id: updateServiceRequestDto.customerId,
                    organizationId,
                },
            });
            if (!customer) {
                throw new common_1.NotFoundException('Customer not found');
            }
        }
        return this.prisma.serviceRequest.update({
            where: {
                id,
            },
            data: updateServiceRequestDto,
            include: {
                customer: true,
                workOrders: true,
            },
        });
    }
    async remove(id, organizationId) {
        const existing = await this.prisma.serviceRequest.findFirst({
            where: {
                id,
                organizationId,
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException('Service request not found');
        }
        return this.prisma.serviceRequest.delete({
            where: {
                id,
            },
        });
    }
};
exports.ServiceRequestService = ServiceRequestService;
exports.ServiceRequestService = ServiceRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiceRequestService);
//# sourceMappingURL=service-request.service.js.map