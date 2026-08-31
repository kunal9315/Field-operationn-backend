import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Organization: "Organization";
    readonly User: "User";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly UserRole: "UserRole";
    readonly RolePermission: "RolePermission";
    readonly Customer: "Customer";
    readonly ServiceRequest: "ServiceRequest";
    readonly Technician: "Technician";
    readonly WorkOrder: "WorkOrder";
    readonly WorkOrderAssignment: "WorkOrderAssignment";
    readonly WorkOrderEvent: "WorkOrderEvent";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly type: "type";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly userId: "userId";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly address: "address";
    readonly city: "city";
    readonly state: "state";
    readonly postalCode: "postalCode";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const ServiceRequestScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly customerId: "customerId";
    readonly title: "title";
    readonly description: "description";
    readonly priority: "priority";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum];
export declare const TechnicianScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly userId: "userId";
    readonly phone: "phone";
    readonly isAvailable: "isAvailable";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TechnicianScalarFieldEnum = (typeof TechnicianScalarFieldEnum)[keyof typeof TechnicianScalarFieldEnum];
export declare const WorkOrderScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly customerId: "customerId";
    readonly serviceRequestId: "serviceRequestId";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly priority: "priority";
    readonly scheduledStart: "scheduledStart";
    readonly scheduledEnd: "scheduledEnd";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WorkOrderScalarFieldEnum = (typeof WorkOrderScalarFieldEnum)[keyof typeof WorkOrderScalarFieldEnum];
export declare const WorkOrderAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly workOrderId: "workOrderId";
    readonly technicianId: "technicianId";
    readonly assignedAt: "assignedAt";
    readonly unassignedAt: "unassignedAt";
};
export type WorkOrderAssignmentScalarFieldEnum = (typeof WorkOrderAssignmentScalarFieldEnum)[keyof typeof WorkOrderAssignmentScalarFieldEnum];
export declare const WorkOrderEventScalarFieldEnum: {
    readonly id: "id";
    readonly workOrderId: "workOrderId";
    readonly status: "status";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
};
export type WorkOrderEventScalarFieldEnum = (typeof WorkOrderEventScalarFieldEnum)[keyof typeof WorkOrderEventScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
