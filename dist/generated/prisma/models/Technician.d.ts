import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TechnicianModel = runtime.Types.Result.DefaultSelection<Prisma.$TechnicianPayload>;
export type AggregateTechnician = {
    _count: TechnicianCountAggregateOutputType | null;
    _avg: TechnicianAvgAggregateOutputType | null;
    _sum: TechnicianSumAggregateOutputType | null;
    _min: TechnicianMinAggregateOutputType | null;
    _max: TechnicianMaxAggregateOutputType | null;
};
export type TechnicianAvgAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type TechnicianSumAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type TechnicianMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    userId: string | null;
    phone: string | null;
    isAvailable: boolean | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TechnicianMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    userId: string | null;
    phone: string | null;
    isAvailable: boolean | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TechnicianCountAggregateOutputType = {
    id: number;
    organizationId: number;
    userId: number;
    phone: number;
    isAvailable: number;
    latitude: number;
    longitude: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TechnicianAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type TechnicianSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type TechnicianMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    userId?: true;
    phone?: true;
    isAvailable?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TechnicianMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    userId?: true;
    phone?: true;
    isAvailable?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TechnicianCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    userId?: true;
    phone?: true;
    isAvailable?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TechnicianAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnicianWhereInput;
    orderBy?: Prisma.TechnicianOrderByWithRelationInput | Prisma.TechnicianOrderByWithRelationInput[];
    cursor?: Prisma.TechnicianWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TechnicianCountAggregateInputType;
    _avg?: TechnicianAvgAggregateInputType;
    _sum?: TechnicianSumAggregateInputType;
    _min?: TechnicianMinAggregateInputType;
    _max?: TechnicianMaxAggregateInputType;
};
export type GetTechnicianAggregateType<T extends TechnicianAggregateArgs> = {
    [P in keyof T & keyof AggregateTechnician]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTechnician[P]> : Prisma.GetScalarType<T[P], AggregateTechnician[P]>;
};
export type TechnicianGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnicianWhereInput;
    orderBy?: Prisma.TechnicianOrderByWithAggregationInput | Prisma.TechnicianOrderByWithAggregationInput[];
    by: Prisma.TechnicianScalarFieldEnum[] | Prisma.TechnicianScalarFieldEnum;
    having?: Prisma.TechnicianScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TechnicianCountAggregateInputType | true;
    _avg?: TechnicianAvgAggregateInputType;
    _sum?: TechnicianSumAggregateInputType;
    _min?: TechnicianMinAggregateInputType;
    _max?: TechnicianMaxAggregateInputType;
};
export type TechnicianGroupByOutputType = {
    id: string;
    organizationId: string;
    userId: string;
    phone: string | null;
    isAvailable: boolean;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TechnicianCountAggregateOutputType | null;
    _avg: TechnicianAvgAggregateOutputType | null;
    _sum: TechnicianSumAggregateOutputType | null;
    _min: TechnicianMinAggregateOutputType | null;
    _max: TechnicianMaxAggregateOutputType | null;
};
export type GetTechnicianGroupByPayload<T extends TechnicianGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TechnicianGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TechnicianGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TechnicianGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TechnicianGroupByOutputType[P]>;
}>>;
export type TechnicianWhereInput = {
    AND?: Prisma.TechnicianWhereInput | Prisma.TechnicianWhereInput[];
    OR?: Prisma.TechnicianWhereInput[];
    NOT?: Prisma.TechnicianWhereInput | Prisma.TechnicianWhereInput[];
    id?: Prisma.StringFilter<"Technician"> | string;
    organizationId?: Prisma.StringFilter<"Technician"> | string;
    userId?: Prisma.StringFilter<"Technician"> | string;
    phone?: Prisma.StringNullableFilter<"Technician"> | string | null;
    isAvailable?: Prisma.BoolFilter<"Technician"> | boolean;
    latitude?: Prisma.DecimalNullableFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Technician"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Technician"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignments?: Prisma.WorkOrderAssignmentListRelationFilter;
};
export type TechnicianOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    assignments?: Prisma.WorkOrderAssignmentOrderByRelationAggregateInput;
};
export type TechnicianWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.TechnicianWhereInput | Prisma.TechnicianWhereInput[];
    OR?: Prisma.TechnicianWhereInput[];
    NOT?: Prisma.TechnicianWhereInput | Prisma.TechnicianWhereInput[];
    organizationId?: Prisma.StringFilter<"Technician"> | string;
    phone?: Prisma.StringNullableFilter<"Technician"> | string | null;
    isAvailable?: Prisma.BoolFilter<"Technician"> | boolean;
    latitude?: Prisma.DecimalNullableFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Technician"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Technician"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignments?: Prisma.WorkOrderAssignmentListRelationFilter;
}, "id" | "userId">;
export type TechnicianOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TechnicianCountOrderByAggregateInput;
    _avg?: Prisma.TechnicianAvgOrderByAggregateInput;
    _max?: Prisma.TechnicianMaxOrderByAggregateInput;
    _min?: Prisma.TechnicianMinOrderByAggregateInput;
    _sum?: Prisma.TechnicianSumOrderByAggregateInput;
};
export type TechnicianScalarWhereWithAggregatesInput = {
    AND?: Prisma.TechnicianScalarWhereWithAggregatesInput | Prisma.TechnicianScalarWhereWithAggregatesInput[];
    OR?: Prisma.TechnicianScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TechnicianScalarWhereWithAggregatesInput | Prisma.TechnicianScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Technician"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Technician"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Technician"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Technician"> | string | null;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"Technician"> | boolean;
    latitude?: Prisma.DecimalNullableWithAggregatesFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableWithAggregatesFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Technician"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Technician"> | Date | string;
};
export type TechnicianCreateInput = {
    id?: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutTechniciansInput;
    user: Prisma.UserCreateNestedOneWithoutTechnicianInput;
    assignments?: Prisma.WorkOrderAssignmentCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    userId: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.WorkOrderAssignmentUncheckedCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutTechniciansNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTechnicianNestedInput;
    assignments?: Prisma.WorkOrderAssignmentUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkOrderAssignmentUncheckedUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianCreateManyInput = {
    id?: string;
    organizationId: string;
    userId: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TechnicianUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnicianUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnicianListRelationFilter = {
    every?: Prisma.TechnicianWhereInput;
    some?: Prisma.TechnicianWhereInput;
    none?: Prisma.TechnicianWhereInput;
};
export type TechnicianOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TechnicianNullableScalarRelationFilter = {
    is?: Prisma.TechnicianWhereInput | null;
    isNot?: Prisma.TechnicianWhereInput | null;
};
export type TechnicianCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TechnicianAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type TechnicianMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TechnicianMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TechnicianSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type TechnicianScalarRelationFilter = {
    is?: Prisma.TechnicianWhereInput;
    isNot?: Prisma.TechnicianWhereInput;
};
export type TechnicianCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutOrganizationInput, Prisma.TechnicianUncheckedCreateWithoutOrganizationInput> | Prisma.TechnicianCreateWithoutOrganizationInput[] | Prisma.TechnicianUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutOrganizationInput | Prisma.TechnicianCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.TechnicianCreateManyOrganizationInputEnvelope;
    connect?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
};
export type TechnicianUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutOrganizationInput, Prisma.TechnicianUncheckedCreateWithoutOrganizationInput> | Prisma.TechnicianCreateWithoutOrganizationInput[] | Prisma.TechnicianUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutOrganizationInput | Prisma.TechnicianCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.TechnicianCreateManyOrganizationInputEnvelope;
    connect?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
};
export type TechnicianUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutOrganizationInput, Prisma.TechnicianUncheckedCreateWithoutOrganizationInput> | Prisma.TechnicianCreateWithoutOrganizationInput[] | Prisma.TechnicianUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutOrganizationInput | Prisma.TechnicianCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.TechnicianUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.TechnicianUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.TechnicianCreateManyOrganizationInputEnvelope;
    set?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    disconnect?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    delete?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    connect?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    update?: Prisma.TechnicianUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.TechnicianUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.TechnicianUpdateManyWithWhereWithoutOrganizationInput | Prisma.TechnicianUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.TechnicianScalarWhereInput | Prisma.TechnicianScalarWhereInput[];
};
export type TechnicianUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutOrganizationInput, Prisma.TechnicianUncheckedCreateWithoutOrganizationInput> | Prisma.TechnicianCreateWithoutOrganizationInput[] | Prisma.TechnicianUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutOrganizationInput | Prisma.TechnicianCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.TechnicianUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.TechnicianUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.TechnicianCreateManyOrganizationInputEnvelope;
    set?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    disconnect?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    delete?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    connect?: Prisma.TechnicianWhereUniqueInput | Prisma.TechnicianWhereUniqueInput[];
    update?: Prisma.TechnicianUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.TechnicianUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.TechnicianUpdateManyWithWhereWithoutOrganizationInput | Prisma.TechnicianUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.TechnicianScalarWhereInput | Prisma.TechnicianScalarWhereInput[];
};
export type TechnicianCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutUserInput, Prisma.TechnicianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutUserInput;
    connect?: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutUserInput, Prisma.TechnicianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutUserInput;
    connect?: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutUserInput, Prisma.TechnicianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TechnicianUpsertWithoutUserInput;
    disconnect?: Prisma.TechnicianWhereInput | boolean;
    delete?: Prisma.TechnicianWhereInput | boolean;
    connect?: Prisma.TechnicianWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TechnicianUpdateToOneWithWhereWithoutUserInput, Prisma.TechnicianUpdateWithoutUserInput>, Prisma.TechnicianUncheckedUpdateWithoutUserInput>;
};
export type TechnicianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutUserInput, Prisma.TechnicianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TechnicianUpsertWithoutUserInput;
    disconnect?: Prisma.TechnicianWhereInput | boolean;
    delete?: Prisma.TechnicianWhereInput | boolean;
    connect?: Prisma.TechnicianWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TechnicianUpdateToOneWithWhereWithoutUserInput, Prisma.TechnicianUpdateWithoutUserInput>, Prisma.TechnicianUncheckedUpdateWithoutUserInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TechnicianCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutAssignmentsInput, Prisma.TechnicianUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianCreateWithoutAssignmentsInput, Prisma.TechnicianUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.TechnicianCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.TechnicianUpsertWithoutAssignmentsInput;
    connect?: Prisma.TechnicianWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TechnicianUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.TechnicianUpdateWithoutAssignmentsInput>, Prisma.TechnicianUncheckedUpdateWithoutAssignmentsInput>;
};
export type TechnicianCreateWithoutOrganizationInput = {
    id?: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTechnicianInput;
    assignments?: Prisma.WorkOrderAssignmentCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.WorkOrderAssignmentUncheckedCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.TechnicianWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnicianCreateWithoutOrganizationInput, Prisma.TechnicianUncheckedCreateWithoutOrganizationInput>;
};
export type TechnicianCreateManyOrganizationInputEnvelope = {
    data: Prisma.TechnicianCreateManyOrganizationInput | Prisma.TechnicianCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type TechnicianUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.TechnicianWhereUniqueInput;
    update: Prisma.XOR<Prisma.TechnicianUpdateWithoutOrganizationInput, Prisma.TechnicianUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.TechnicianCreateWithoutOrganizationInput, Prisma.TechnicianUncheckedCreateWithoutOrganizationInput>;
};
export type TechnicianUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.TechnicianWhereUniqueInput;
    data: Prisma.XOR<Prisma.TechnicianUpdateWithoutOrganizationInput, Prisma.TechnicianUncheckedUpdateWithoutOrganizationInput>;
};
export type TechnicianUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.TechnicianScalarWhereInput;
    data: Prisma.XOR<Prisma.TechnicianUpdateManyMutationInput, Prisma.TechnicianUncheckedUpdateManyWithoutOrganizationInput>;
};
export type TechnicianScalarWhereInput = {
    AND?: Prisma.TechnicianScalarWhereInput | Prisma.TechnicianScalarWhereInput[];
    OR?: Prisma.TechnicianScalarWhereInput[];
    NOT?: Prisma.TechnicianScalarWhereInput | Prisma.TechnicianScalarWhereInput[];
    id?: Prisma.StringFilter<"Technician"> | string;
    organizationId?: Prisma.StringFilter<"Technician"> | string;
    userId?: Prisma.StringFilter<"Technician"> | string;
    phone?: Prisma.StringNullableFilter<"Technician"> | string | null;
    isAvailable?: Prisma.BoolFilter<"Technician"> | boolean;
    latitude?: Prisma.DecimalNullableFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"Technician"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Technician"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Technician"> | Date | string;
};
export type TechnicianCreateWithoutUserInput = {
    id?: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutTechniciansInput;
    assignments?: Prisma.WorkOrderAssignmentCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.WorkOrderAssignmentUncheckedCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianCreateOrConnectWithoutUserInput = {
    where: Prisma.TechnicianWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnicianCreateWithoutUserInput, Prisma.TechnicianUncheckedCreateWithoutUserInput>;
};
export type TechnicianUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.TechnicianUpdateWithoutUserInput, Prisma.TechnicianUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TechnicianCreateWithoutUserInput, Prisma.TechnicianUncheckedCreateWithoutUserInput>;
    where?: Prisma.TechnicianWhereInput;
};
export type TechnicianUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.TechnicianWhereInput;
    data: Prisma.XOR<Prisma.TechnicianUpdateWithoutUserInput, Prisma.TechnicianUncheckedUpdateWithoutUserInput>;
};
export type TechnicianUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutTechniciansNestedInput;
    assignments?: Prisma.WorkOrderAssignmentUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkOrderAssignmentUncheckedUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianCreateWithoutAssignmentsInput = {
    id?: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutTechniciansInput;
    user: Prisma.UserCreateNestedOneWithoutTechnicianInput;
};
export type TechnicianUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    organizationId: string;
    userId: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TechnicianCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.TechnicianWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnicianCreateWithoutAssignmentsInput, Prisma.TechnicianUncheckedCreateWithoutAssignmentsInput>;
};
export type TechnicianUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.TechnicianUpdateWithoutAssignmentsInput, Prisma.TechnicianUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.TechnicianCreateWithoutAssignmentsInput, Prisma.TechnicianUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.TechnicianWhereInput;
};
export type TechnicianUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.TechnicianWhereInput;
    data: Prisma.XOR<Prisma.TechnicianUpdateWithoutAssignmentsInput, Prisma.TechnicianUncheckedUpdateWithoutAssignmentsInput>;
};
export type TechnicianUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutTechniciansNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTechnicianNestedInput;
};
export type TechnicianUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnicianCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    phone?: string | null;
    isAvailable?: boolean;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TechnicianUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTechnicianNestedInput;
    assignments?: Prisma.WorkOrderAssignmentUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkOrderAssignmentUncheckedUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnicianCountOutputType = {
    assignments: number;
};
export type TechnicianCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | TechnicianCountOutputTypeCountAssignmentsArgs;
};
export type TechnicianCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianCountOutputTypeSelect<ExtArgs> | null;
};
export type TechnicianCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderAssignmentWhereInput;
};
export type TechnicianSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    userId?: boolean;
    phone?: boolean;
    isAvailable?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignments?: boolean | Prisma.Technician$assignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TechnicianCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technician"]>;
export type TechnicianSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    userId?: boolean;
    phone?: boolean;
    isAvailable?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technician"]>;
export type TechnicianSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    userId?: boolean;
    phone?: boolean;
    isAvailable?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technician"]>;
export type TechnicianSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    userId?: boolean;
    phone?: boolean;
    isAvailable?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TechnicianOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "userId" | "phone" | "isAvailable" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["technician"]>;
export type TechnicianInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignments?: boolean | Prisma.Technician$assignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TechnicianCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TechnicianIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TechnicianIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TechnicianPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Technician";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        assignments: Prisma.$WorkOrderAssignmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        userId: string;
        phone: string | null;
        isAvailable: boolean;
        latitude: runtime.Decimal | null;
        longitude: runtime.Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["technician"]>;
    composites: {};
};
export type TechnicianGetPayload<S extends boolean | null | undefined | TechnicianDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TechnicianPayload, S>;
export type TechnicianCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TechnicianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TechnicianCountAggregateInputType | true;
};
export interface TechnicianDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Technician'];
        meta: {
            name: 'Technician';
        };
    };
    findUnique<T extends TechnicianFindUniqueArgs>(args: Prisma.SelectSubset<T, TechnicianFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TechnicianFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TechnicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TechnicianFindFirstArgs>(args?: Prisma.SelectSubset<T, TechnicianFindFirstArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TechnicianFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TechnicianFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TechnicianFindManyArgs>(args?: Prisma.SelectSubset<T, TechnicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TechnicianCreateArgs>(args: Prisma.SelectSubset<T, TechnicianCreateArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TechnicianCreateManyArgs>(args?: Prisma.SelectSubset<T, TechnicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TechnicianCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TechnicianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TechnicianDeleteArgs>(args: Prisma.SelectSubset<T, TechnicianDeleteArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TechnicianUpdateArgs>(args: Prisma.SelectSubset<T, TechnicianUpdateArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TechnicianDeleteManyArgs>(args?: Prisma.SelectSubset<T, TechnicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TechnicianUpdateManyArgs>(args: Prisma.SelectSubset<T, TechnicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TechnicianUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TechnicianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TechnicianUpsertArgs>(args: Prisma.SelectSubset<T, TechnicianUpsertArgs<ExtArgs>>): Prisma.Prisma__TechnicianClient<runtime.Types.Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TechnicianCountArgs>(args?: Prisma.Subset<T, TechnicianCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TechnicianCountAggregateOutputType> : number>;
    aggregate<T extends TechnicianAggregateArgs>(args: Prisma.Subset<T, TechnicianAggregateArgs>): Prisma.PrismaPromise<GetTechnicianAggregateType<T>>;
    groupBy<T extends TechnicianGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TechnicianGroupByArgs['orderBy'];
    } : {
        orderBy?: TechnicianGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TechnicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TechnicianFieldRefs;
}
export interface Prisma__TechnicianClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignments<T extends Prisma.Technician$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Technician$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TechnicianFieldRefs {
    readonly id: Prisma.FieldRef<"Technician", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Technician", 'String'>;
    readonly userId: Prisma.FieldRef<"Technician", 'String'>;
    readonly phone: Prisma.FieldRef<"Technician", 'String'>;
    readonly isAvailable: Prisma.FieldRef<"Technician", 'Boolean'>;
    readonly latitude: Prisma.FieldRef<"Technician", 'Decimal'>;
    readonly longitude: Prisma.FieldRef<"Technician", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Technician", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Technician", 'DateTime'>;
}
export type TechnicianFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    where: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    where: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TechnicianFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TechnicianFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TechnicianCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TechnicianCreateInput, Prisma.TechnicianUncheckedCreateInput>;
};
export type TechnicianCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TechnicianCreateManyInput | Prisma.TechnicianCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TechnicianCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    data: Prisma.TechnicianCreateManyInput | Prisma.TechnicianCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TechnicianIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TechnicianUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TechnicianUpdateInput, Prisma.TechnicianUncheckedUpdateInput>;
    where: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TechnicianUpdateManyMutationInput, Prisma.TechnicianUncheckedUpdateManyInput>;
    where?: Prisma.TechnicianWhereInput;
    limit?: number;
};
export type TechnicianUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TechnicianUpdateManyMutationInput, Prisma.TechnicianUncheckedUpdateManyInput>;
    where?: Prisma.TechnicianWhereInput;
    limit?: number;
    include?: Prisma.TechnicianIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TechnicianUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    where: Prisma.TechnicianWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnicianCreateInput, Prisma.TechnicianUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TechnicianUpdateInput, Prisma.TechnicianUncheckedUpdateInput>;
};
export type TechnicianDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
    where: Prisma.TechnicianWhereUniqueInput;
};
export type TechnicianDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnicianWhereInput;
    limit?: number;
};
export type Technician$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TechnicianDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TechnicianSelect<ExtArgs> | null;
    omit?: Prisma.TechnicianOmit<ExtArgs> | null;
    include?: Prisma.TechnicianInclude<ExtArgs> | null;
};
