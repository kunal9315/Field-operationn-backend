"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderPriority = exports.WorkOrderStatus = exports.RoleType = exports.UserStatus = void 0;
exports.UserStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    SUSPENDED: 'SUSPENDED'
};
exports.RoleType = {
    ADMIN: 'ADMIN',
    DISPATCHER: 'DISPATCHER',
    TECHNICIAN: 'TECHNICIAN',
    INVENTORY_MANAGER: 'INVENTORY_MANAGER',
    FINANCE: 'FINANCE',
    VIEWER: 'VIEWER'
};
exports.WorkOrderStatus = {
    NEW: 'NEW',
    ASSIGNED: 'ASSIGNED',
    EN_ROUTE: 'EN_ROUTE',
    ARRIVED: 'ARRIVED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    CLOSED: 'CLOSED',
    CANCELLED: 'CANCELLED'
};
exports.WorkOrderPriority = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    URGENT: 'URGENT'
};
//# sourceMappingURL=enums.js.map