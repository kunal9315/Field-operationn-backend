"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.WorkOrderEventScalarFieldEnum = exports.WorkOrderAssignmentScalarFieldEnum = exports.WorkOrderScalarFieldEnum = exports.TechnicianScalarFieldEnum = exports.ServiceRequestScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.RolePermissionScalarFieldEnum = exports.UserRoleScalarFieldEnum = exports.PermissionScalarFieldEnum = exports.RoleScalarFieldEnum = exports.UserScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Organization: 'Organization',
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    UserRole: 'UserRole',
    RolePermission: 'RolePermission',
    Customer: 'Customer',
    ServiceRequest: 'ServiceRequest',
    Technician: 'Technician',
    WorkOrder: 'WorkOrder',
    WorkOrderAssignment: 'WorkOrderAssignment',
    WorkOrderEvent: 'WorkOrderEvent'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PermissionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
};
exports.UserRoleScalarFieldEnum = {
    userId: 'userId',
    roleId: 'roleId'
};
exports.RolePermissionScalarFieldEnum = {
    roleId: 'roleId',
    permissionId: 'permissionId'
};
exports.CustomerScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ServiceRequestScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    customerId: 'customerId',
    title: 'title',
    description: 'description',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TechnicianScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    phone: 'phone',
    isAvailable: 'isAvailable',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WorkOrderScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    customerId: 'customerId',
    serviceRequestId: 'serviceRequestId',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    scheduledStart: 'scheduledStart',
    scheduledEnd: 'scheduledEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WorkOrderAssignmentScalarFieldEnum = {
    id: 'id',
    workOrderId: 'workOrderId',
    technicianId: 'technicianId',
    assignedAt: 'assignedAt',
    unassignedAt: 'unassignedAt'
};
exports.WorkOrderEventScalarFieldEnum = {
    id: 'id',
    workOrderId: 'workOrderId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map