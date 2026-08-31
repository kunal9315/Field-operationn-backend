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
exports.ServiceRequestController = void 0;
const common_1 = require("@nestjs/common");
const service_request_service_1 = require("./service-request.service");
const create_service_request_dto_1 = require("./dto/create-service-request.dto");
const update_service_request_dto_1 = require("./dto/update-service-request.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let ServiceRequestController = class ServiceRequestController {
    serviceRequestService;
    constructor(serviceRequestService) {
        this.serviceRequestService = serviceRequestService;
    }
    create(createServiceRequestDto, req) {
        return this.serviceRequestService.create(createServiceRequestDto, req.user.organizationId);
    }
    findAll(req) {
        return this.serviceRequestService.findAll(req.user.organizationId);
    }
    findOne(id, req) {
        return this.serviceRequestService.findOne(id, req.user.organizationId);
    }
    update(id, updateServiceRequestDto, req) {
        return this.serviceRequestService.update(id, updateServiceRequestDto, req.user.organizationId);
    }
    remove(id, req) {
        return this.serviceRequestService.remove(id, req.user.organizationId);
    }
};
exports.ServiceRequestController = ServiceRequestController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_request_dto_1.CreateServiceRequestDto, Object]),
    __metadata("design:returntype", void 0)
], ServiceRequestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ServiceRequestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ServiceRequestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_request_dto_1.UpdateServiceRequestDto, Object]),
    __metadata("design:returntype", void 0)
], ServiceRequestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ServiceRequestController.prototype, "remove", null);
exports.ServiceRequestController = ServiceRequestController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('service-requests'),
    __metadata("design:paramtypes", [service_request_service_1.ServiceRequestService])
], ServiceRequestController);
//# sourceMappingURL=service-request.controller.js.map