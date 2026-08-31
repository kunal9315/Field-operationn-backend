export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const RoleType: {
    readonly ADMIN: "ADMIN";
    readonly DISPATCHER: "DISPATCHER";
    readonly TECHNICIAN: "TECHNICIAN";
    readonly INVENTORY_MANAGER: "INVENTORY_MANAGER";
    readonly FINANCE: "FINANCE";
    readonly VIEWER: "VIEWER";
};
export type RoleType = (typeof RoleType)[keyof typeof RoleType];
export declare const WorkOrderStatus: {
    readonly NEW: "NEW";
    readonly ASSIGNED: "ASSIGNED";
    readonly EN_ROUTE: "EN_ROUTE";
    readonly ARRIVED: "ARRIVED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CLOSED: "CLOSED";
    readonly CANCELLED: "CANCELLED";
};
export type WorkOrderStatus = (typeof WorkOrderStatus)[keyof typeof WorkOrderStatus];
export declare const WorkOrderPriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type WorkOrderPriority = (typeof WorkOrderPriority)[keyof typeof WorkOrderPriority];
