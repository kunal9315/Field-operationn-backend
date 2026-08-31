import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ServiceRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$ServiceRequestPayload>;
export type AggregateServiceRequest = {
    _count: ServiceRequestCountAggregateOutputType | null;
    _min: ServiceRequestMinAggregateOutputType | null;
    _max: ServiceRequestMaxAggregateOutputType | null;
};
export type ServiceRequestMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    customerId: string | null;
    title: string | null;
    description: string | null;
    priority: $Enums.WorkOrderPriority | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ServiceRequestMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    customerId: string | null;
    title: string | null;
    description: string | null;
    priority: $Enums.WorkOrderPriority | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ServiceRequestCountAggregateOutputType = {
    id: number;
    organizationId: number;
    customerId: number;
    title: number;
    description: number;
    priority: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ServiceRequestMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    customerId?: true;
    title?: true;
    description?: true;
    priority?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ServiceRequestMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    customerId?: true;
    title?: true;
    description?: true;
    priority?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ServiceRequestCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    customerId?: true;
    title?: true;
    description?: true;
    priority?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ServiceRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceRequestWhereInput;
    orderBy?: Prisma.ServiceRequestOrderByWithRelationInput | Prisma.ServiceRequestOrderByWithRelationInput[];
    cursor?: Prisma.ServiceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServiceRequestCountAggregateInputType;
    _min?: ServiceRequestMinAggregateInputType;
    _max?: ServiceRequestMaxAggregateInputType;
};
export type GetServiceRequestAggregateType<T extends ServiceRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateServiceRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServiceRequest[P]> : Prisma.GetScalarType<T[P], AggregateServiceRequest[P]>;
};
export type ServiceRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceRequestWhereInput;
    orderBy?: Prisma.ServiceRequestOrderByWithAggregationInput | Prisma.ServiceRequestOrderByWithAggregationInput[];
    by: Prisma.ServiceRequestScalarFieldEnum[] | Prisma.ServiceRequestScalarFieldEnum;
    having?: Prisma.ServiceRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceRequestCountAggregateInputType | true;
    _min?: ServiceRequestMinAggregateInputType;
    _max?: ServiceRequestMaxAggregateInputType;
};
export type ServiceRequestGroupByOutputType = {
    id: string;
    organizationId: string;
    customerId: string;
    title: string;
    description: string;
    priority: $Enums.WorkOrderPriority;
    createdAt: Date;
    updatedAt: Date;
    _count: ServiceRequestCountAggregateOutputType | null;
    _min: ServiceRequestMinAggregateOutputType | null;
    _max: ServiceRequestMaxAggregateOutputType | null;
};
export type GetServiceRequestGroupByPayload<T extends ServiceRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServiceRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServiceRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServiceRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>;
}>>;
export type ServiceRequestWhereInput = {
    AND?: Prisma.ServiceRequestWhereInput | Prisma.ServiceRequestWhereInput[];
    OR?: Prisma.ServiceRequestWhereInput[];
    NOT?: Prisma.ServiceRequestWhereInput | Prisma.ServiceRequestWhereInput[];
    id?: Prisma.StringFilter<"ServiceRequest"> | string;
    organizationId?: Prisma.StringFilter<"ServiceRequest"> | string;
    customerId?: Prisma.StringFilter<"ServiceRequest"> | string;
    title?: Prisma.StringFilter<"ServiceRequest"> | string;
    description?: Prisma.StringFilter<"ServiceRequest"> | string;
    priority?: Prisma.EnumWorkOrderPriorityFilter<"ServiceRequest"> | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFilter<"ServiceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ServiceRequest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    workOrders?: Prisma.WorkOrderListRelationFilter;
};
export type ServiceRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    workOrders?: Prisma.WorkOrderOrderByRelationAggregateInput;
};
export type ServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ServiceRequestWhereInput | Prisma.ServiceRequestWhereInput[];
    OR?: Prisma.ServiceRequestWhereInput[];
    NOT?: Prisma.ServiceRequestWhereInput | Prisma.ServiceRequestWhereInput[];
    organizationId?: Prisma.StringFilter<"ServiceRequest"> | string;
    customerId?: Prisma.StringFilter<"ServiceRequest"> | string;
    title?: Prisma.StringFilter<"ServiceRequest"> | string;
    description?: Prisma.StringFilter<"ServiceRequest"> | string;
    priority?: Prisma.EnumWorkOrderPriorityFilter<"ServiceRequest"> | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFilter<"ServiceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ServiceRequest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    workOrders?: Prisma.WorkOrderListRelationFilter;
}, "id">;
export type ServiceRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ServiceRequestCountOrderByAggregateInput;
    _max?: Prisma.ServiceRequestMaxOrderByAggregateInput;
    _min?: Prisma.ServiceRequestMinOrderByAggregateInput;
};
export type ServiceRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServiceRequestScalarWhereWithAggregatesInput | Prisma.ServiceRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServiceRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServiceRequestScalarWhereWithAggregatesInput | Prisma.ServiceRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ServiceRequest"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"ServiceRequest"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"ServiceRequest"> | string;
    title?: Prisma.StringWithAggregatesFilter<"ServiceRequest"> | string;
    description?: Prisma.StringWithAggregatesFilter<"ServiceRequest"> | string;
    priority?: Prisma.EnumWorkOrderPriorityWithAggregatesFilter<"ServiceRequest"> | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string;
};
export type ServiceRequestCreateInput = {
    id?: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutServiceRequestsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutServiceRequestsInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutServiceRequestInput;
};
export type ServiceRequestUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    customerId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutServiceRequestInput;
};
export type ServiceRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutServiceRequestsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutServiceRequestsNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutServiceRequestNestedInput;
};
export type ServiceRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutServiceRequestNestedInput;
};
export type ServiceRequestCreateManyInput = {
    id?: string;
    organizationId: string;
    customerId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceRequestListRelationFilter = {
    every?: Prisma.ServiceRequestWhereInput;
    some?: Prisma.ServiceRequestWhereInput;
    none?: Prisma.ServiceRequestWhereInput;
};
export type ServiceRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServiceRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceRequestNullableScalarRelationFilter = {
    is?: Prisma.ServiceRequestWhereInput | null;
    isNot?: Prisma.ServiceRequestWhereInput | null;
};
export type ServiceRequestCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ServiceRequestCreateWithoutOrganizationInput[] | Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput | Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ServiceRequestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
};
export type ServiceRequestUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ServiceRequestCreateWithoutOrganizationInput[] | Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput | Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ServiceRequestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
};
export type ServiceRequestUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ServiceRequestCreateWithoutOrganizationInput[] | Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput | Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ServiceRequestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ServiceRequestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ServiceRequestCreateManyOrganizationInputEnvelope;
    set?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    disconnect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    delete?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    update?: Prisma.ServiceRequestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ServiceRequestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ServiceRequestUpdateManyWithWhereWithoutOrganizationInput | Prisma.ServiceRequestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ServiceRequestScalarWhereInput | Prisma.ServiceRequestScalarWhereInput[];
};
export type ServiceRequestUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ServiceRequestCreateWithoutOrganizationInput[] | Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput | Prisma.ServiceRequestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ServiceRequestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ServiceRequestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ServiceRequestCreateManyOrganizationInputEnvelope;
    set?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    disconnect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    delete?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    update?: Prisma.ServiceRequestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ServiceRequestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ServiceRequestUpdateManyWithWhereWithoutOrganizationInput | Prisma.ServiceRequestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ServiceRequestScalarWhereInput | Prisma.ServiceRequestScalarWhereInput[];
};
export type ServiceRequestCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutCustomerInput, Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput> | Prisma.ServiceRequestCreateWithoutCustomerInput[] | Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput | Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ServiceRequestCreateManyCustomerInputEnvelope;
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
};
export type ServiceRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutCustomerInput, Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput> | Prisma.ServiceRequestCreateWithoutCustomerInput[] | Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput | Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ServiceRequestCreateManyCustomerInputEnvelope;
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
};
export type ServiceRequestUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutCustomerInput, Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput> | Prisma.ServiceRequestCreateWithoutCustomerInput[] | Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput | Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ServiceRequestCreateManyCustomerInputEnvelope;
    set?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    disconnect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    delete?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    update?: Prisma.ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ServiceRequestUpdateManyWithWhereWithoutCustomerInput | Prisma.ServiceRequestUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ServiceRequestScalarWhereInput | Prisma.ServiceRequestScalarWhereInput[];
};
export type ServiceRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutCustomerInput, Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput> | Prisma.ServiceRequestCreateWithoutCustomerInput[] | Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput | Prisma.ServiceRequestCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ServiceRequestCreateManyCustomerInputEnvelope;
    set?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    disconnect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    delete?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    connect?: Prisma.ServiceRequestWhereUniqueInput | Prisma.ServiceRequestWhereUniqueInput[];
    update?: Prisma.ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ServiceRequestUpdateManyWithWhereWithoutCustomerInput | Prisma.ServiceRequestUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ServiceRequestScalarWhereInput | Prisma.ServiceRequestScalarWhereInput[];
};
export type EnumWorkOrderPriorityFieldUpdateOperationsInput = {
    set?: $Enums.WorkOrderPriority;
};
export type ServiceRequestCreateNestedOneWithoutWorkOrdersInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutWorkOrdersInput, Prisma.ServiceRequestUncheckedCreateWithoutWorkOrdersInput>;
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutWorkOrdersInput;
    connect?: Prisma.ServiceRequestWhereUniqueInput;
};
export type ServiceRequestUpdateOneWithoutWorkOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceRequestCreateWithoutWorkOrdersInput, Prisma.ServiceRequestUncheckedCreateWithoutWorkOrdersInput>;
    connectOrCreate?: Prisma.ServiceRequestCreateOrConnectWithoutWorkOrdersInput;
    upsert?: Prisma.ServiceRequestUpsertWithoutWorkOrdersInput;
    disconnect?: Prisma.ServiceRequestWhereInput | boolean;
    delete?: Prisma.ServiceRequestWhereInput | boolean;
    connect?: Prisma.ServiceRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceRequestUpdateToOneWithWhereWithoutWorkOrdersInput, Prisma.ServiceRequestUpdateWithoutWorkOrdersInput>, Prisma.ServiceRequestUncheckedUpdateWithoutWorkOrdersInput>;
};
export type ServiceRequestCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutServiceRequestsInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutServiceRequestInput;
};
export type ServiceRequestUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    customerId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutServiceRequestInput;
};
export type ServiceRequestCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceRequestCreateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput>;
};
export type ServiceRequestCreateManyOrganizationInputEnvelope = {
    data: Prisma.ServiceRequestCreateManyOrganizationInput | Prisma.ServiceRequestCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ServiceRequestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServiceRequestUpdateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ServiceRequestCreateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedCreateWithoutOrganizationInput>;
};
export type ServiceRequestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateWithoutOrganizationInput, Prisma.ServiceRequestUncheckedUpdateWithoutOrganizationInput>;
};
export type ServiceRequestUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ServiceRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateManyMutationInput, Prisma.ServiceRequestUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ServiceRequestScalarWhereInput = {
    AND?: Prisma.ServiceRequestScalarWhereInput | Prisma.ServiceRequestScalarWhereInput[];
    OR?: Prisma.ServiceRequestScalarWhereInput[];
    NOT?: Prisma.ServiceRequestScalarWhereInput | Prisma.ServiceRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"ServiceRequest"> | string;
    organizationId?: Prisma.StringFilter<"ServiceRequest"> | string;
    customerId?: Prisma.StringFilter<"ServiceRequest"> | string;
    title?: Prisma.StringFilter<"ServiceRequest"> | string;
    description?: Prisma.StringFilter<"ServiceRequest"> | string;
    priority?: Prisma.EnumWorkOrderPriorityFilter<"ServiceRequest"> | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFilter<"ServiceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ServiceRequest"> | Date | string;
};
export type ServiceRequestCreateWithoutCustomerInput = {
    id?: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutServiceRequestsInput;
    workOrders?: Prisma.WorkOrderCreateNestedManyWithoutServiceRequestInput;
};
export type ServiceRequestUncheckedCreateWithoutCustomerInput = {
    id?: string;
    organizationId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutServiceRequestInput;
};
export type ServiceRequestCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceRequestCreateWithoutCustomerInput, Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput>;
};
export type ServiceRequestCreateManyCustomerInputEnvelope = {
    data: Prisma.ServiceRequestCreateManyCustomerInput | Prisma.ServiceRequestCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ServiceRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServiceRequestUpdateWithoutCustomerInput, Prisma.ServiceRequestUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ServiceRequestCreateWithoutCustomerInput, Prisma.ServiceRequestUncheckedCreateWithoutCustomerInput>;
};
export type ServiceRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateWithoutCustomerInput, Prisma.ServiceRequestUncheckedUpdateWithoutCustomerInput>;
};
export type ServiceRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ServiceRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateManyMutationInput, Prisma.ServiceRequestUncheckedUpdateManyWithoutCustomerInput>;
};
export type ServiceRequestCreateWithoutWorkOrdersInput = {
    id?: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutServiceRequestsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutServiceRequestsInput;
};
export type ServiceRequestUncheckedCreateWithoutWorkOrdersInput = {
    id?: string;
    organizationId: string;
    customerId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceRequestCreateOrConnectWithoutWorkOrdersInput = {
    where: Prisma.ServiceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceRequestCreateWithoutWorkOrdersInput, Prisma.ServiceRequestUncheckedCreateWithoutWorkOrdersInput>;
};
export type ServiceRequestUpsertWithoutWorkOrdersInput = {
    update: Prisma.XOR<Prisma.ServiceRequestUpdateWithoutWorkOrdersInput, Prisma.ServiceRequestUncheckedUpdateWithoutWorkOrdersInput>;
    create: Prisma.XOR<Prisma.ServiceRequestCreateWithoutWorkOrdersInput, Prisma.ServiceRequestUncheckedCreateWithoutWorkOrdersInput>;
    where?: Prisma.ServiceRequestWhereInput;
};
export type ServiceRequestUpdateToOneWithWhereWithoutWorkOrdersInput = {
    where?: Prisma.ServiceRequestWhereInput;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateWithoutWorkOrdersInput, Prisma.ServiceRequestUncheckedUpdateWithoutWorkOrdersInput>;
};
export type ServiceRequestUpdateWithoutWorkOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutServiceRequestsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutServiceRequestsNestedInput;
};
export type ServiceRequestUncheckedUpdateWithoutWorkOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceRequestCreateManyOrganizationInput = {
    id?: string;
    customerId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceRequestUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutServiceRequestsNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutServiceRequestNestedInput;
};
export type ServiceRequestUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutServiceRequestNestedInput;
};
export type ServiceRequestUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceRequestCreateManyCustomerInput = {
    id?: string;
    organizationId: string;
    title: string;
    description: string;
    priority?: $Enums.WorkOrderPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceRequestUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutServiceRequestsNestedInput;
    workOrders?: Prisma.WorkOrderUpdateManyWithoutServiceRequestNestedInput;
};
export type ServiceRequestUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutServiceRequestNestedInput;
};
export type ServiceRequestUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumWorkOrderPriorityFieldUpdateOperationsInput | $Enums.WorkOrderPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceRequestCountOutputType = {
    workOrders: number;
};
export type ServiceRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrders?: boolean | ServiceRequestCountOutputTypeCountWorkOrdersArgs;
};
export type ServiceRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestCountOutputTypeSelect<ExtArgs> | null;
};
export type ServiceRequestCountOutputTypeCountWorkOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderWhereInput;
};
export type ServiceRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    workOrders?: boolean | Prisma.ServiceRequest$workOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serviceRequest"]>;
export type ServiceRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serviceRequest"]>;
export type ServiceRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serviceRequest"]>;
export type ServiceRequestSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    priority?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ServiceRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "customerId" | "title" | "description" | "priority" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceRequest"]>;
export type ServiceRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    workOrders?: boolean | Prisma.ServiceRequest$workOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ServiceRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type ServiceRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $ServiceRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ServiceRequest";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        workOrders: Prisma.$WorkOrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        customerId: string;
        title: string;
        description: string;
        priority: $Enums.WorkOrderPriority;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["serviceRequest"]>;
    composites: {};
};
export type ServiceRequestGetPayload<S extends boolean | null | undefined | ServiceRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload, S>;
export type ServiceRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServiceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceRequestCountAggregateInputType | true;
};
export interface ServiceRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequest'];
        meta: {
            name: 'ServiceRequest';
        };
    };
    findUnique<T extends ServiceRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, ServiceRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServiceRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServiceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServiceRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, ServiceRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServiceRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServiceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServiceRequestFindManyArgs>(args?: Prisma.SelectSubset<T, ServiceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServiceRequestCreateArgs>(args: Prisma.SelectSubset<T, ServiceRequestCreateArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServiceRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, ServiceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServiceRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServiceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServiceRequestDeleteArgs>(args: Prisma.SelectSubset<T, ServiceRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServiceRequestUpdateArgs>(args: Prisma.SelectSubset<T, ServiceRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServiceRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServiceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServiceRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, ServiceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServiceRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServiceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServiceRequestUpsertArgs>(args: Prisma.SelectSubset<T, ServiceRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__ServiceRequestClient<runtime.Types.Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServiceRequestCountArgs>(args?: Prisma.Subset<T, ServiceRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServiceRequestCountAggregateOutputType> : number>;
    aggregate<T extends ServiceRequestAggregateArgs>(args: Prisma.Subset<T, ServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestAggregateType<T>>;
    groupBy<T extends ServiceRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServiceRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: ServiceRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServiceRequestFieldRefs;
}
export interface Prisma__ServiceRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workOrders<T extends Prisma.ServiceRequest$workOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServiceRequest$workOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServiceRequestFieldRefs {
    readonly id: Prisma.FieldRef<"ServiceRequest", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ServiceRequest", 'String'>;
    readonly customerId: Prisma.FieldRef<"ServiceRequest", 'String'>;
    readonly title: Prisma.FieldRef<"ServiceRequest", 'String'>;
    readonly description: Prisma.FieldRef<"ServiceRequest", 'String'>;
    readonly priority: Prisma.FieldRef<"ServiceRequest", 'WorkOrderPriority'>;
    readonly createdAt: Prisma.FieldRef<"ServiceRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ServiceRequest", 'DateTime'>;
}
export type ServiceRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    where: Prisma.ServiceRequestWhereUniqueInput;
};
export type ServiceRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    where: Prisma.ServiceRequestWhereUniqueInput;
};
export type ServiceRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceRequestCreateInput, Prisma.ServiceRequestUncheckedCreateInput>;
};
export type ServiceRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServiceRequestCreateManyInput | Prisma.ServiceRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServiceRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    data: Prisma.ServiceRequestCreateManyInput | Prisma.ServiceRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServiceRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServiceRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateInput, Prisma.ServiceRequestUncheckedUpdateInput>;
    where: Prisma.ServiceRequestWhereUniqueInput;
};
export type ServiceRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServiceRequestUpdateManyMutationInput, Prisma.ServiceRequestUncheckedUpdateManyInput>;
    where?: Prisma.ServiceRequestWhereInput;
    limit?: number;
};
export type ServiceRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceRequestUpdateManyMutationInput, Prisma.ServiceRequestUncheckedUpdateManyInput>;
    where?: Prisma.ServiceRequestWhereInput;
    limit?: number;
    include?: Prisma.ServiceRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServiceRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    where: Prisma.ServiceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceRequestCreateInput, Prisma.ServiceRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServiceRequestUpdateInput, Prisma.ServiceRequestUncheckedUpdateInput>;
};
export type ServiceRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
    where: Prisma.ServiceRequestWhereUniqueInput;
};
export type ServiceRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceRequestWhereInput;
    limit?: number;
};
export type ServiceRequest$workOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceRequestSelect<ExtArgs> | null;
    omit?: Prisma.ServiceRequestOmit<ExtArgs> | null;
    include?: Prisma.ServiceRequestInclude<ExtArgs> | null;
};
