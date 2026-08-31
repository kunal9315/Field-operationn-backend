import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationPayload>;
export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationCountAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganization[P]> : Prisma.GetScalarType<T[P], AggregateOrganization[P]>;
};
export type OrganizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithAggregationInput | Prisma.OrganizationOrderByWithAggregationInput[];
    by: Prisma.OrganizationScalarFieldEnum[] | Prisma.OrganizationScalarFieldEnum;
    having?: Prisma.OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
}>>;
export type OrganizationWhereInput = {
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    id?: Prisma.StringFilter<"Organization"> | string;
    name?: Prisma.StringFilter<"Organization"> | string;
    slug?: Prisma.StringFilter<"Organization"> | string;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    customers?: Prisma.CustomerListRelationFilter;
    serviceRequests?: Prisma.ServiceRequestListRelationFilter;
    technicians?: Prisma.TechnicianListRelationFilter;
    workOrders?: Prisma.WorkOrderListRelationFilter;
};
export type OrganizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    roles?: Prisma.RoleOrderByRelationAggregateInput;
    customers?: Prisma.CustomerOrderByRelationAggregateInput;
    serviceRequests?: Prisma.ServiceRequestOrderByRelationAggregateInput;
    technicians?: Prisma.TechnicianOrderByRelationAggregateInput;
    workOrders?: Prisma.WorkOrderOrderByRelationAggregateInput;
};
export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    name?: Prisma.StringFilter<"Organization"> | string;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    customers?: Prisma.CustomerListRelationFilter;
    serviceRequests?: Prisma.ServiceRequestListRelationFilter;
    technicians?: Prisma.TechnicianListRelationFilter;
    workOrders?: Prisma.WorkOrderListRelationFilter;
}, "id" | "slug">;
export type OrganizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationCountOrderByAggregateInput;
    _max?: Prisma.OrganizationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMinOrderByAggregateInput;
};
export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
};
export type OrganizationCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianUncheckedCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput;
    isNot?: Prisma.OrganizationWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutUsersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.OrganizationUpsertWithoutUsersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutUsersInput, Prisma.OrganizationUpdateWithoutUsersInput>, Prisma.OrganizationUncheckedUpdateWithoutUsersInput>;
};
export type OrganizationCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutRolesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.OrganizationUpsertWithoutRolesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutRolesInput, Prisma.OrganizationUpdateWithoutRolesInput>, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
};
export type OrganizationCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutCustomersInput, Prisma.OrganizationUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutCustomersInput, Prisma.OrganizationUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.OrganizationUpsertWithoutCustomersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutCustomersInput, Prisma.OrganizationUpdateWithoutCustomersInput>, Prisma.OrganizationUncheckedUpdateWithoutCustomersInput>;
};
export type OrganizationCreateNestedOneWithoutServiceRequestsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutServiceRequestsInput, Prisma.OrganizationUncheckedCreateWithoutServiceRequestsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutServiceRequestsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutServiceRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutServiceRequestsInput, Prisma.OrganizationUncheckedCreateWithoutServiceRequestsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutServiceRequestsInput;
    upsert?: Prisma.OrganizationUpsertWithoutServiceRequestsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutServiceRequestsInput, Prisma.OrganizationUpdateWithoutServiceRequestsInput>, Prisma.OrganizationUncheckedUpdateWithoutServiceRequestsInput>;
};
export type OrganizationCreateNestedOneWithoutTechniciansInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutTechniciansInput, Prisma.OrganizationUncheckedCreateWithoutTechniciansInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutTechniciansInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutTechniciansNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutTechniciansInput, Prisma.OrganizationUncheckedCreateWithoutTechniciansInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutTechniciansInput;
    upsert?: Prisma.OrganizationUpsertWithoutTechniciansInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutTechniciansInput, Prisma.OrganizationUpdateWithoutTechniciansInput>, Prisma.OrganizationUncheckedUpdateWithoutTechniciansInput>;
};
export type OrganizationCreateNestedOneWithoutWorkOrdersInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutWorkOrdersInput, Prisma.OrganizationUncheckedCreateWithoutWorkOrdersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutWorkOrdersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutWorkOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutWorkOrdersInput, Prisma.OrganizationUncheckedCreateWithoutWorkOrdersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutWorkOrdersInput;
    upsert?: Prisma.OrganizationUpsertWithoutWorkOrdersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutWorkOrdersInput, Prisma.OrganizationUpdateWithoutWorkOrdersInput>, Prisma.OrganizationUncheckedUpdateWithoutWorkOrdersInput>;
};
export type OrganizationCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianUncheckedCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
};
export type OrganizationUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutUsersInput, Prisma.OrganizationUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutUsersInput, Prisma.OrganizationUncheckedUpdateWithoutUsersInput>;
};
export type OrganizationUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianUncheckedCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutRolesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
};
export type OrganizationUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutRolesInput, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutRolesInput, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
};
export type OrganizationUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutCustomersInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutCustomersInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianUncheckedCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutCustomersInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutCustomersInput, Prisma.OrganizationUncheckedCreateWithoutCustomersInput>;
};
export type OrganizationUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutCustomersInput, Prisma.OrganizationUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutCustomersInput, Prisma.OrganizationUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutCustomersInput, Prisma.OrganizationUncheckedUpdateWithoutCustomersInput>;
};
export type OrganizationUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutServiceRequestsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutServiceRequestsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianUncheckedCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutServiceRequestsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutServiceRequestsInput, Prisma.OrganizationUncheckedCreateWithoutServiceRequestsInput>;
};
export type OrganizationUpsertWithoutServiceRequestsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutServiceRequestsInput, Prisma.OrganizationUncheckedUpdateWithoutServiceRequestsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutServiceRequestsInput, Prisma.OrganizationUncheckedCreateWithoutServiceRequestsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutServiceRequestsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutServiceRequestsInput, Prisma.OrganizationUncheckedUpdateWithoutServiceRequestsInput>;
};
export type OrganizationUpdateWithoutServiceRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutServiceRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutTechniciansInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutTechniciansInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutTechniciansInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutTechniciansInput, Prisma.OrganizationUncheckedCreateWithoutTechniciansInput>;
};
export type OrganizationUpsertWithoutTechniciansInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutTechniciansInput, Prisma.OrganizationUncheckedUpdateWithoutTechniciansInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutTechniciansInput, Prisma.OrganizationUncheckedCreateWithoutTechniciansInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutTechniciansInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutTechniciansInput, Prisma.OrganizationUncheckedUpdateWithoutTechniciansInput>;
};
export type OrganizationUpdateWithoutTechniciansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutTechniciansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutWorkOrdersInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutWorkOrdersInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    customers?: Prisma.CustomerUncheckedCreateNestedManyWithoutOrganizationInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput;
    technicians?: Prisma.TechnicianUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutWorkOrdersInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutWorkOrdersInput, Prisma.OrganizationUncheckedCreateWithoutWorkOrdersInput>;
};
export type OrganizationUpsertWithoutWorkOrdersInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutWorkOrdersInput, Prisma.OrganizationUncheckedUpdateWithoutWorkOrdersInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutWorkOrdersInput, Prisma.OrganizationUncheckedCreateWithoutWorkOrdersInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutWorkOrdersInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutWorkOrdersInput, Prisma.OrganizationUncheckedUpdateWithoutWorkOrdersInput>;
};
export type OrganizationUpdateWithoutWorkOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutWorkOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    customers?: Prisma.CustomerUncheckedUpdateManyWithoutOrganizationNestedInput;
    serviceRequests?: Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
    technicians?: Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCountOutputType = {
    users: number;
    roles: number;
    customers: number;
    serviceRequests: number;
    technicians: number;
    workOrders: number;
};
export type OrganizationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs;
    roles?: boolean | OrganizationCountOutputTypeCountRolesArgs;
    customers?: boolean | OrganizationCountOutputTypeCountCustomersArgs;
    serviceRequests?: boolean | OrganizationCountOutputTypeCountServiceRequestsArgs;
    technicians?: boolean | OrganizationCountOutputTypeCountTechniciansArgs;
    workOrders?: boolean | OrganizationCountOutputTypeCountWorkOrdersArgs;
};
export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type OrganizationCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
};
export type OrganizationCountOutputTypeCountCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
};
export type OrganizationCountOutputTypeCountServiceRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceRequestWhereInput;
};
export type OrganizationCountOutputTypeCountTechniciansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnicianWhereInput;
};
export type OrganizationCountOutputTypeCountWorkOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderWhereInput;
};
export type OrganizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.Organization$usersArgs<ExtArgs>;
    roles?: boolean | Prisma.Organization$rolesArgs<ExtArgs>;
    customers?: boolean | Prisma.Organization$customersArgs<ExtArgs>;
    serviceRequests?: boolean | Prisma.Organization$serviceRequestsArgs<ExtArgs>;
    technicians?: boolean | Prisma.Organization$techniciansArgs<ExtArgs>;
    workOrders?: boolean | Prisma.Organization$workOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>;
export type OrganizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Organization$usersArgs<ExtArgs>;
    roles?: boolean | Prisma.Organization$rolesArgs<ExtArgs>;
    customers?: boolean | Prisma.Organization$customersArgs<ExtArgs>;
    serviceRequests?: boolean | Prisma.Organization$serviceRequestsArgs<ExtArgs>;
    technicians?: boolean | Prisma.Organization$techniciansArgs<ExtArgs>;
    workOrders?: boolean | Prisma.Organization$workOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrganizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organization";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        roles: Prisma.$RolePayload<ExtArgs>[];
        customers: Prisma.$CustomerPayload<ExtArgs>[];
        serviceRequests: Prisma.$ServiceRequestPayload<ExtArgs>[];
        technicians: Prisma.$TechnicianPayload<ExtArgs>[];
        workOrders: Prisma.$WorkOrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organization"]>;
    composites: {};
};
export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationPayload, S>;
export type OrganizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationCountAggregateInputType | true;
};
export interface OrganizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
        meta: {
            name: 'Organization';
        };
    };
    findUnique<T extends OrganizationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationCountArgs>(args?: Prisma.Subset<T, OrganizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationAggregateArgs>(args: Prisma.Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;
    groupBy<T extends OrganizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationFieldRefs;
}
export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Organization$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    roles<T extends Prisma.Organization$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.Organization$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$customersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    serviceRequests<T extends Prisma.Organization$serviceRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$serviceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    technicians<T extends Prisma.Organization$techniciansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$techniciansArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    workOrders<T extends Prisma.Organization$workOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$workOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationFieldRefs {
    readonly id: Prisma.FieldRef<"Organization", 'String'>;
    readonly name: Prisma.FieldRef<"Organization", 'String'>;
    readonly slug: Prisma.FieldRef<"Organization", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
}
export type OrganizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
};
export type OrganizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
};
export type OrganizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type Organization$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Organization$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type Organization$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type Organization$serviceRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    where?: Prisma.ServiceRequestWhereInput;
    orderBy?: Prisma.ServiceRequestOrderByWithRelationInput | Prisma.ServiceRequestOrderByWithRelationInput[];
    cursor?: Prisma.ServiceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceRequestScalarFieldEnum | Prisma.ServiceRequestScalarFieldEnum[];
};
export type Organization$techniciansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    where?: Prisma.TechnicianWhereInput;
    orderBy?: Prisma.TechnicianOrderByWithRelationInput | Prisma.TechnicianOrderByWithRelationInput[];
    cursor?: Prisma.TechnicianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TechnicianScalarFieldEnum | Prisma.TechnicianScalarFieldEnum[];
};
export type Organization$workOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderWhereInput;
    orderBy?: Prisma.WorkOrderOrderByWithRelationInput | Prisma.WorkOrderOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderScalarFieldEnum | Prisma.WorkOrderScalarFieldEnum[];
};
export type OrganizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
};
