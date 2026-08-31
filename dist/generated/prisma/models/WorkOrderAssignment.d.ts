import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkOrderAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkOrderAssignmentPayload>;
export type AggregateWorkOrderAssignment = {
    _count: WorkOrderAssignmentCountAggregateOutputType | null;
    _min: WorkOrderAssignmentMinAggregateOutputType | null;
    _max: WorkOrderAssignmentMaxAggregateOutputType | null;
};
export type WorkOrderAssignmentMinAggregateOutputType = {
    id: string | null;
    workOrderId: string | null;
    technicianId: string | null;
    assignedAt: Date | null;
    unassignedAt: Date | null;
};
export type WorkOrderAssignmentMaxAggregateOutputType = {
    id: string | null;
    workOrderId: string | null;
    technicianId: string | null;
    assignedAt: Date | null;
    unassignedAt: Date | null;
};
export type WorkOrderAssignmentCountAggregateOutputType = {
    id: number;
    workOrderId: number;
    technicianId: number;
    assignedAt: number;
    unassignedAt: number;
    _all: number;
};
export type WorkOrderAssignmentMinAggregateInputType = {
    id?: true;
    workOrderId?: true;
    technicianId?: true;
    assignedAt?: true;
    unassignedAt?: true;
};
export type WorkOrderAssignmentMaxAggregateInputType = {
    id?: true;
    workOrderId?: true;
    technicianId?: true;
    assignedAt?: true;
    unassignedAt?: true;
};
export type WorkOrderAssignmentCountAggregateInputType = {
    id?: true;
    workOrderId?: true;
    technicianId?: true;
    assignedAt?: true;
    unassignedAt?: true;
    _all?: true;
};
export type WorkOrderAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderAssignmentWhereInput;
    orderBy?: Prisma.WorkOrderAssignmentOrderByWithRelationInput | Prisma.WorkOrderAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkOrderAssignmentCountAggregateInputType;
    _min?: WorkOrderAssignmentMinAggregateInputType;
    _max?: WorkOrderAssignmentMaxAggregateInputType;
};
export type GetWorkOrderAssignmentAggregateType<T extends WorkOrderAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkOrderAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkOrderAssignment[P]> : Prisma.GetScalarType<T[P], AggregateWorkOrderAssignment[P]>;
};
export type WorkOrderAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderAssignmentWhereInput;
    orderBy?: Prisma.WorkOrderAssignmentOrderByWithAggregationInput | Prisma.WorkOrderAssignmentOrderByWithAggregationInput[];
    by: Prisma.WorkOrderAssignmentScalarFieldEnum[] | Prisma.WorkOrderAssignmentScalarFieldEnum;
    having?: Prisma.WorkOrderAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkOrderAssignmentCountAggregateInputType | true;
    _min?: WorkOrderAssignmentMinAggregateInputType;
    _max?: WorkOrderAssignmentMaxAggregateInputType;
};
export type WorkOrderAssignmentGroupByOutputType = {
    id: string;
    workOrderId: string;
    technicianId: string;
    assignedAt: Date;
    unassignedAt: Date | null;
    _count: WorkOrderAssignmentCountAggregateOutputType | null;
    _min: WorkOrderAssignmentMinAggregateOutputType | null;
    _max: WorkOrderAssignmentMaxAggregateOutputType | null;
};
export type GetWorkOrderAssignmentGroupByPayload<T extends WorkOrderAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkOrderAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkOrderAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkOrderAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkOrderAssignmentGroupByOutputType[P]>;
}>>;
export type WorkOrderAssignmentWhereInput = {
    AND?: Prisma.WorkOrderAssignmentWhereInput | Prisma.WorkOrderAssignmentWhereInput[];
    OR?: Prisma.WorkOrderAssignmentWhereInput[];
    NOT?: Prisma.WorkOrderAssignmentWhereInput | Prisma.WorkOrderAssignmentWhereInput[];
    id?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    workOrderId?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    technicianId?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"WorkOrderAssignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableFilter<"WorkOrderAssignment"> | Date | string | null;
    workOrder?: Prisma.XOR<Prisma.WorkOrderScalarRelationFilter, Prisma.WorkOrderWhereInput>;
    technician?: Prisma.XOR<Prisma.TechnicianScalarRelationFilter, Prisma.TechnicianWhereInput>;
};
export type WorkOrderAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    workOrder?: Prisma.WorkOrderOrderByWithRelationInput;
    technician?: Prisma.TechnicianOrderByWithRelationInput;
};
export type WorkOrderAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WorkOrderAssignmentWhereInput | Prisma.WorkOrderAssignmentWhereInput[];
    OR?: Prisma.WorkOrderAssignmentWhereInput[];
    NOT?: Prisma.WorkOrderAssignmentWhereInput | Prisma.WorkOrderAssignmentWhereInput[];
    workOrderId?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    technicianId?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"WorkOrderAssignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableFilter<"WorkOrderAssignment"> | Date | string | null;
    workOrder?: Prisma.XOR<Prisma.WorkOrderScalarRelationFilter, Prisma.WorkOrderWhereInput>;
    technician?: Prisma.XOR<Prisma.TechnicianScalarRelationFilter, Prisma.TechnicianWhereInput>;
}, "id">;
export type WorkOrderAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WorkOrderAssignmentCountOrderByAggregateInput;
    _max?: Prisma.WorkOrderAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.WorkOrderAssignmentMinOrderByAggregateInput;
};
export type WorkOrderAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkOrderAssignmentScalarWhereWithAggregatesInput | Prisma.WorkOrderAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkOrderAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkOrderAssignmentScalarWhereWithAggregatesInput | Prisma.WorkOrderAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorkOrderAssignment"> | string;
    workOrderId?: Prisma.StringWithAggregatesFilter<"WorkOrderAssignment"> | string;
    technicianId?: Prisma.StringWithAggregatesFilter<"WorkOrderAssignment"> | string;
    assignedAt?: Prisma.DateTimeWithAggregatesFilter<"WorkOrderAssignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WorkOrderAssignment"> | Date | string | null;
};
export type WorkOrderAssignmentCreateInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    workOrder: Prisma.WorkOrderCreateNestedOneWithoutAssignmentsInput;
    technician: Prisma.TechnicianCreateNestedOneWithoutAssignmentsInput;
};
export type WorkOrderAssignmentUncheckedCreateInput = {
    id?: string;
    workOrderId: string;
    technicianId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
};
export type WorkOrderAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workOrder?: Prisma.WorkOrderUpdateOneRequiredWithoutAssignmentsNestedInput;
    technician?: Prisma.TechnicianUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type WorkOrderAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    technicianId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentCreateManyInput = {
    id?: string;
    workOrderId: string;
    technicianId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
};
export type WorkOrderAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    technicianId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentListRelationFilter = {
    every?: Prisma.WorkOrderAssignmentWhereInput;
    some?: Prisma.WorkOrderAssignmentWhereInput;
    none?: Prisma.WorkOrderAssignmentWhereInput;
};
export type WorkOrderAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkOrderAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrder;
};
export type WorkOrderAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrder;
};
export type WorkOrderAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrder;
};
export type WorkOrderAssignmentCreateNestedManyWithoutTechnicianInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput> | Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyTechnicianInputEnvelope;
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
};
export type WorkOrderAssignmentUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput> | Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyTechnicianInputEnvelope;
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
};
export type WorkOrderAssignmentUpdateManyWithoutTechnicianNestedInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput> | Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput[];
    upsert?: Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutTechnicianInput | Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutTechnicianInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyTechnicianInputEnvelope;
    set?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    update?: Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutTechnicianInput | Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutTechnicianInput[];
    updateMany?: Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutTechnicianInput | Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutTechnicianInput[];
    deleteMany?: Prisma.WorkOrderAssignmentScalarWhereInput | Prisma.WorkOrderAssignmentScalarWhereInput[];
};
export type WorkOrderAssignmentUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput> | Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput[];
    upsert?: Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutTechnicianInput | Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutTechnicianInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyTechnicianInputEnvelope;
    set?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    update?: Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutTechnicianInput | Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutTechnicianInput[];
    updateMany?: Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutTechnicianInput | Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutTechnicianInput[];
    deleteMany?: Prisma.WorkOrderAssignmentScalarWhereInput | Prisma.WorkOrderAssignmentScalarWhereInput[];
};
export type WorkOrderAssignmentCreateNestedManyWithoutWorkOrderInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyWorkOrderInputEnvelope;
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
};
export type WorkOrderAssignmentUncheckedCreateNestedManyWithoutWorkOrderInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyWorkOrderInputEnvelope;
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
};
export type WorkOrderAssignmentUpdateManyWithoutWorkOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput[];
    upsert?: Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyWorkOrderInputEnvelope;
    set?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    update?: Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutWorkOrderInput[];
    updateMany?: Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutWorkOrderInput | Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutWorkOrderInput[];
    deleteMany?: Prisma.WorkOrderAssignmentScalarWhereInput | Prisma.WorkOrderAssignmentScalarWhereInput[];
};
export type WorkOrderAssignmentUncheckedUpdateManyWithoutWorkOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput[] | Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput[];
    upsert?: Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderAssignmentUpsertWithWhereUniqueWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderAssignmentCreateManyWorkOrderInputEnvelope;
    set?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkOrderAssignmentWhereUniqueInput | Prisma.WorkOrderAssignmentWhereUniqueInput[];
    update?: Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderAssignmentUpdateWithWhereUniqueWithoutWorkOrderInput[];
    updateMany?: Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutWorkOrderInput | Prisma.WorkOrderAssignmentUpdateManyWithWhereWithoutWorkOrderInput[];
    deleteMany?: Prisma.WorkOrderAssignmentScalarWhereInput | Prisma.WorkOrderAssignmentScalarWhereInput[];
};
export type WorkOrderAssignmentCreateWithoutTechnicianInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    workOrder: Prisma.WorkOrderCreateNestedOneWithoutAssignmentsInput;
};
export type WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput = {
    id?: string;
    workOrderId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
};
export type WorkOrderAssignmentCreateOrConnectWithoutTechnicianInput = {
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput>;
};
export type WorkOrderAssignmentCreateManyTechnicianInputEnvelope = {
    data: Prisma.WorkOrderAssignmentCreateManyTechnicianInput | Prisma.WorkOrderAssignmentCreateManyTechnicianInput[];
    skipDuplicates?: boolean;
};
export type WorkOrderAssignmentUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedUpdateWithoutTechnicianInput>;
    create: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutTechnicianInput>;
};
export type WorkOrderAssignmentUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateWithoutTechnicianInput, Prisma.WorkOrderAssignmentUncheckedUpdateWithoutTechnicianInput>;
};
export type WorkOrderAssignmentUpdateManyWithWhereWithoutTechnicianInput = {
    where: Prisma.WorkOrderAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateManyMutationInput, Prisma.WorkOrderAssignmentUncheckedUpdateManyWithoutTechnicianInput>;
};
export type WorkOrderAssignmentScalarWhereInput = {
    AND?: Prisma.WorkOrderAssignmentScalarWhereInput | Prisma.WorkOrderAssignmentScalarWhereInput[];
    OR?: Prisma.WorkOrderAssignmentScalarWhereInput[];
    NOT?: Prisma.WorkOrderAssignmentScalarWhereInput | Prisma.WorkOrderAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    workOrderId?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    technicianId?: Prisma.StringFilter<"WorkOrderAssignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"WorkOrderAssignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableFilter<"WorkOrderAssignment"> | Date | string | null;
};
export type WorkOrderAssignmentCreateWithoutWorkOrderInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    technician: Prisma.TechnicianCreateNestedOneWithoutAssignmentsInput;
};
export type WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput = {
    id?: string;
    technicianId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
};
export type WorkOrderAssignmentCreateOrConnectWithoutWorkOrderInput = {
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput>;
};
export type WorkOrderAssignmentCreateManyWorkOrderInputEnvelope = {
    data: Prisma.WorkOrderAssignmentCreateManyWorkOrderInput | Prisma.WorkOrderAssignmentCreateManyWorkOrderInput[];
    skipDuplicates?: boolean;
};
export type WorkOrderAssignmentUpsertWithWhereUniqueWithoutWorkOrderInput = {
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedUpdateWithoutWorkOrderInput>;
    create: Prisma.XOR<Prisma.WorkOrderAssignmentCreateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedCreateWithoutWorkOrderInput>;
};
export type WorkOrderAssignmentUpdateWithWhereUniqueWithoutWorkOrderInput = {
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateWithoutWorkOrderInput, Prisma.WorkOrderAssignmentUncheckedUpdateWithoutWorkOrderInput>;
};
export type WorkOrderAssignmentUpdateManyWithWhereWithoutWorkOrderInput = {
    where: Prisma.WorkOrderAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateManyMutationInput, Prisma.WorkOrderAssignmentUncheckedUpdateManyWithoutWorkOrderInput>;
};
export type WorkOrderAssignmentCreateManyTechnicianInput = {
    id?: string;
    workOrderId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
};
export type WorkOrderAssignmentUpdateWithoutTechnicianInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workOrder?: Prisma.WorkOrderUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type WorkOrderAssignmentUncheckedUpdateWithoutTechnicianInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentUncheckedUpdateManyWithoutTechnicianInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentCreateManyWorkOrderInput = {
    id?: string;
    technicianId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
};
export type WorkOrderAssignmentUpdateWithoutWorkOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technician?: Prisma.TechnicianUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type WorkOrderAssignmentUncheckedUpdateWithoutWorkOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    technicianId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentUncheckedUpdateManyWithoutWorkOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    technicianId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkOrderAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workOrderId?: boolean;
    technicianId?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
    technician?: boolean | Prisma.TechnicianDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workOrderAssignment"]>;
export type WorkOrderAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workOrderId?: boolean;
    technicianId?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
    technician?: boolean | Prisma.TechnicianDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workOrderAssignment"]>;
export type WorkOrderAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workOrderId?: boolean;
    technicianId?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
    technician?: boolean | Prisma.TechnicianDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workOrderAssignment"]>;
export type WorkOrderAssignmentSelectScalar = {
    id?: boolean;
    workOrderId?: boolean;
    technicianId?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
};
export type WorkOrderAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "workOrderId" | "technicianId" | "assignedAt" | "unassignedAt", ExtArgs["result"]["workOrderAssignment"]>;
export type WorkOrderAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
    technician?: boolean | Prisma.TechnicianDefaultArgs<ExtArgs>;
};
export type WorkOrderAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
    technician?: boolean | Prisma.TechnicianDefaultArgs<ExtArgs>;
};
export type WorkOrderAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
    technician?: boolean | Prisma.TechnicianDefaultArgs<ExtArgs>;
};
export type $WorkOrderAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkOrderAssignment";
    objects: {
        workOrder: Prisma.$WorkOrderPayload<ExtArgs>;
        technician: Prisma.$TechnicianPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        workOrderId: string;
        technicianId: string;
        assignedAt: Date;
        unassignedAt: Date | null;
    }, ExtArgs["result"]["workOrderAssignment"]>;
    composites: {};
};
export type WorkOrderAssignmentGetPayload<S extends boolean | null | undefined | WorkOrderAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload, S>;
export type WorkOrderAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkOrderAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkOrderAssignmentCountAggregateInputType | true;
};
export interface WorkOrderAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkOrderAssignment'];
        meta: {
            name: 'WorkOrderAssignment';
        };
    };
    findUnique<T extends WorkOrderAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkOrderAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkOrderAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkOrderAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkOrderAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkOrderAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkOrderAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkOrderAssignmentCreateArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkOrderAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkOrderAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkOrderAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkOrderAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkOrderAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkOrderAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkOrderAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkOrderAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkOrderAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, WorkOrderAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkOrderAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkOrderAssignmentCountArgs>(args?: Prisma.Subset<T, WorkOrderAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkOrderAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends WorkOrderAssignmentAggregateArgs>(args: Prisma.Subset<T, WorkOrderAssignmentAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderAssignmentAggregateType<T>>;
    groupBy<T extends WorkOrderAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkOrderAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkOrderAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkOrderAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkOrderAssignmentFieldRefs;
}
export interface Prisma__WorkOrderAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    workOrder<T extends Prisma.WorkOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    technician<T extends Prisma.TechnicianDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TechnicianDefaultArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkOrderAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"WorkOrderAssignment", 'String'>;
    readonly workOrderId: Prisma.FieldRef<"WorkOrderAssignment", 'String'>;
    readonly technicianId: Prisma.FieldRef<"WorkOrderAssignment", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"WorkOrderAssignment", 'DateTime'>;
    readonly unassignedAt: Prisma.FieldRef<"WorkOrderAssignment", 'DateTime'>;
}
export type WorkOrderAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
};
export type WorkOrderAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
};
export type WorkOrderAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderAssignmentWhereInput;
    orderBy?: Prisma.WorkOrderAssignmentOrderByWithRelationInput | Prisma.WorkOrderAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderAssignmentScalarFieldEnum | Prisma.WorkOrderAssignmentScalarFieldEnum[];
};
export type WorkOrderAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderAssignmentWhereInput;
    orderBy?: Prisma.WorkOrderAssignmentOrderByWithRelationInput | Prisma.WorkOrderAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderAssignmentScalarFieldEnum | Prisma.WorkOrderAssignmentScalarFieldEnum[];
};
export type WorkOrderAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderAssignmentWhereInput;
    orderBy?: Prisma.WorkOrderAssignmentOrderByWithRelationInput | Prisma.WorkOrderAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderAssignmentScalarFieldEnum | Prisma.WorkOrderAssignmentScalarFieldEnum[];
};
export type WorkOrderAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentCreateInput, Prisma.WorkOrderAssignmentUncheckedCreateInput>;
};
export type WorkOrderAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkOrderAssignmentCreateManyInput | Prisma.WorkOrderAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkOrderAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    data: Prisma.WorkOrderAssignmentCreateManyInput | Prisma.WorkOrderAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WorkOrderAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WorkOrderAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateInput, Prisma.WorkOrderAssignmentUncheckedUpdateInput>;
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
};
export type WorkOrderAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateManyMutationInput, Prisma.WorkOrderAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.WorkOrderAssignmentWhereInput;
    limit?: number;
};
export type WorkOrderAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateManyMutationInput, Prisma.WorkOrderAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.WorkOrderAssignmentWhereInput;
    limit?: number;
    include?: Prisma.WorkOrderAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WorkOrderAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkOrderAssignmentCreateInput, Prisma.WorkOrderAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkOrderAssignmentUpdateInput, Prisma.WorkOrderAssignmentUncheckedUpdateInput>;
};
export type WorkOrderAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkOrderAssignmentWhereUniqueInput;
};
export type WorkOrderAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderAssignmentWhereInput;
    limit?: number;
};
export type WorkOrderAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderAssignmentInclude<ExtArgs> | null;
};
