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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderController = void 0;
const common_1 = require("@nestjs/common");
const work_order_service_1 = require("./work-order.service");
const create_work_order_dto_1 = require("./dto/create-work-order.dto");
const update_work_order_dto_1 = require("./dto/update-work-order.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const create_work_order_assignment_dto_1 = require("./dto/create-work-order-assignment.dto");
let WorkOrderController = class WorkOrderController {
    workOrderService;
    constructor(workOrderService) {
        this.workOrderService = workOrderService;
    }
    create(createWorkOrderDto, req) {
        return this.workOrderService.create(createWorkOrderDto, req.user.organizationId);
    }
    findAll(req) {
        return this.workOrderService.findAll(req.user.organizationId);
    }
    findOne(id, req) {
        return this.workOrderService.findOne(id, req.user.organizationId);
    }
    update(id, updateWorkOrderDto, req) {
        return this.workOrderService.update(id, updateWorkOrderDto, req.user.organizationId);
    }
    remove(id, req) {
        return this.workOrderService.remove(id, req.user.organizationId);
    }
    assignTechnician(id, createWorkOrderAssignmentDto, req) {
        return this.workOrderService.assignTechnician(id, createWorkOrderAssignmentDto.technicianId, req.user.organizationId);
    }
    unassignTechnician(id, req) {
        return this.workOrderService.unassignTechnician(id, req.user.organizationId);
    }
};
exports.WorkOrderController = WorkOrderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_work_order_dto_1.CreateWorkOrderDto, Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_work_order_dto_1.UpdateWorkOrderDto, Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/assign'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_work_order_assignment_dto_1.CreateWorkOrderAssignmentDto, Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "assignTechnician", null);
__decorate([
    (0, common_1.Delete)(':id/assign'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkOrderController.prototype, "unassignTechnician", null);
exports.WorkOrderController = WorkOrderController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('work-orders'),
    __metadata("design:paramtypes", [work_order_service_1.WorkOrderService])
], WorkOrderController);
//# sourceMappingURL=work-order.controller.js.map