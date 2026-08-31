import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkOrderEventModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkOrderEventPayload>;
export type AggregateWorkOrderEvent = {
    _count: WorkOrderEventCountAggregateOutputType | null;
    _min: WorkOrderEventMinAggregateOutputType | null;
    _max: WorkOrderEventMaxAggregateOutputType | null;
};
export type WorkOrderEventMinAggregateOutputType = {
    id: string | null;
    workOrderId: string | null;
    status: $Enums.WorkOrderStatus | null;
    notes: string | null;
    createdAt: Date | null;
};
export type WorkOrderEventMaxAggregateOutputType = {
    id: string | null;
    workOrderId: string | null;
    status: $Enums.WorkOrderStatus | null;
    notes: string | null;
    createdAt: Date | null;
};
export type WorkOrderEventCountAggregateOutputType = {
    id: number;
    workOrderId: number;
    status: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type WorkOrderEventMinAggregateInputType = {
    id?: true;
    workOrderId?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
};
export type WorkOrderEventMaxAggregateInputType = {
    id?: true;
    workOrderId?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
};
export type WorkOrderEventCountAggregateInputType = {
    id?: true;
    workOrderId?: true;
    status?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type WorkOrderEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderEventWhereInput;
    orderBy?: Prisma.WorkOrderEventOrderByWithRelationInput | Prisma.WorkOrderEventOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkOrderEventCountAggregateInputType;
    _min?: WorkOrderEventMinAggregateInputType;
    _max?: WorkOrderEventMaxAggregateInputType;
};
export type GetWorkOrderEventAggregateType<T extends WorkOrderEventAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkOrderEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkOrderEvent[P]> : Prisma.GetScalarType<T[P], AggregateWorkOrderEvent[P]>;
};
export type WorkOrderEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderEventWhereInput;
    orderBy?: Prisma.WorkOrderEventOrderByWithAggregationInput | Prisma.WorkOrderEventOrderByWithAggregationInput[];
    by: Prisma.WorkOrderEventScalarFieldEnum[] | Prisma.WorkOrderEventScalarFieldEnum;
    having?: Prisma.WorkOrderEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkOrderEventCountAggregateInputType | true;
    _min?: WorkOrderEventMinAggregateInputType;
    _max?: WorkOrderEventMaxAggregateInputType;
};
export type WorkOrderEventGroupByOutputType = {
    id: string;
    workOrderId: string;
    status: $Enums.WorkOrderStatus;
    notes: string | null;
    createdAt: Date;
    _count: WorkOrderEventCountAggregateOutputType | null;
    _min: WorkOrderEventMinAggregateOutputType | null;
    _max: WorkOrderEventMaxAggregateOutputType | null;
};
export type GetWorkOrderEventGroupByPayload<T extends WorkOrderEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkOrderEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkOrderEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkOrderEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkOrderEventGroupByOutputType[P]>;
}>>;
export type WorkOrderEventWhereInput = {
    AND?: Prisma.WorkOrderEventWhereInput | Prisma.WorkOrderEventWhereInput[];
    OR?: Prisma.WorkOrderEventWhereInput[];
    NOT?: Prisma.WorkOrderEventWhereInput | Prisma.WorkOrderEventWhereInput[];
    id?: Prisma.StringFilter<"WorkOrderEvent"> | string;
    workOrderId?: Prisma.StringFilter<"WorkOrderEvent"> | string;
    status?: Prisma.EnumWorkOrderStatusFilter<"WorkOrderEvent"> | $Enums.WorkOrderStatus;
    notes?: Prisma.StringNullableFilter<"WorkOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkOrderEvent"> | Date | string;
    workOrder?: Prisma.XOR<Prisma.WorkOrderScalarRelationFilter, Prisma.WorkOrderWhereInput>;
};
export type WorkOrderEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    workOrder?: Prisma.WorkOrderOrderByWithRelationInput;
};
export type WorkOrderEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WorkOrderEventWhereInput | Prisma.WorkOrderEventWhereInput[];
    OR?: Prisma.WorkOrderEventWhereInput[];
    NOT?: Prisma.WorkOrderEventWhereInput | Prisma.WorkOrderEventWhereInput[];
    workOrderId?: Prisma.StringFilter<"WorkOrderEvent"> | string;
    status?: Prisma.EnumWorkOrderStatusFilter<"WorkOrderEvent"> | $Enums.WorkOrderStatus;
    notes?: Prisma.StringNullableFilter<"WorkOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkOrderEvent"> | Date | string;
    workOrder?: Prisma.XOR<Prisma.WorkOrderScalarRelationFilter, Prisma.WorkOrderWhereInput>;
}, "id">;
export type WorkOrderEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WorkOrderEventCountOrderByAggregateInput;
    _max?: Prisma.WorkOrderEventMaxOrderByAggregateInput;
    _min?: Prisma.WorkOrderEventMinOrderByAggregateInput;
};
export type WorkOrderEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkOrderEventScalarWhereWithAggregatesInput | Prisma.WorkOrderEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkOrderEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkOrderEventScalarWhereWithAggregatesInput | Prisma.WorkOrderEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorkOrderEvent"> | string;
    workOrderId?: Prisma.StringWithAggregatesFilter<"WorkOrderEvent"> | string;
    status?: Prisma.EnumWorkOrderStatusWithAggregatesFilter<"WorkOrderEvent"> | $Enums.WorkOrderStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"WorkOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorkOrderEvent"> | Date | string;
};
export type WorkOrderEventCreateInput = {
    id?: string;
    status: $Enums.WorkOrderStatus;
    notes?: string | null;
    createdAt?: Date | string;
    workOrder: Prisma.WorkOrderCreateNestedOneWithoutEventsInput;
};
export type WorkOrderEventUncheckedCreateInput = {
    id?: string;
    workOrderId: string;
    status: $Enums.WorkOrderStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type WorkOrderEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workOrder?: Prisma.WorkOrderUpdateOneRequiredWithoutEventsNestedInput;
};
export type WorkOrderEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkOrderEventCreateManyInput = {
    id?: string;
    workOrderId: string;
    status: $Enums.WorkOrderStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type WorkOrderEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkOrderEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkOrderEventListRelationFilter = {
    every?: Prisma.WorkOrderEventWhereInput;
    some?: Prisma.WorkOrderEventWhereInput;
    none?: Prisma.WorkOrderEventWhereInput;
};
export type WorkOrderEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkOrderEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkOrderEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkOrderEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workOrderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkOrderEventCreateNestedManyWithoutWorkOrderInput = {
    create?: Prisma.XOR<Prisma.WorkOrderEventCreateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderEventCreateWithoutWorkOrderInput[] | Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderEventCreateManyWorkOrderInputEnvelope;
    connect?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
};
export type WorkOrderEventUncheckedCreateNestedManyWithoutWorkOrderInput = {
    create?: Prisma.XOR<Prisma.WorkOrderEventCreateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderEventCreateWithoutWorkOrderInput[] | Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderEventCreateManyWorkOrderInputEnvelope;
    connect?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
};
export type WorkOrderEventUpdateManyWithoutWorkOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WorkOrderEventCreateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderEventCreateWithoutWorkOrderInput[] | Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput[];
    upsert?: Prisma.WorkOrderEventUpsertWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderEventUpsertWithWhereUniqueWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderEventCreateManyWorkOrderInputEnvelope;
    set?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    disconnect?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    delete?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    connect?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    update?: Prisma.WorkOrderEventUpdateWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderEventUpdateWithWhereUniqueWithoutWorkOrderInput[];
    updateMany?: Prisma.WorkOrderEventUpdateManyWithWhereWithoutWorkOrderInput | Prisma.WorkOrderEventUpdateManyWithWhereWithoutWorkOrderInput[];
    deleteMany?: Prisma.WorkOrderEventScalarWhereInput | Prisma.WorkOrderEventScalarWhereInput[];
};
export type WorkOrderEventUncheckedUpdateManyWithoutWorkOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WorkOrderEventCreateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput> | Prisma.WorkOrderEventCreateWithoutWorkOrderInput[] | Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput[];
    connectOrCreate?: Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput | Prisma.WorkOrderEventCreateOrConnectWithoutWorkOrderInput[];
    upsert?: Prisma.WorkOrderEventUpsertWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderEventUpsertWithWhereUniqueWithoutWorkOrderInput[];
    createMany?: Prisma.WorkOrderEventCreateManyWorkOrderInputEnvelope;
    set?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    disconnect?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    delete?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    connect?: Prisma.WorkOrderEventWhereUniqueInput | Prisma.WorkOrderEventWhereUniqueInput[];
    update?: Prisma.WorkOrderEventUpdateWithWhereUniqueWithoutWorkOrderInput | Prisma.WorkOrderEventUpdateWithWhereUniqueWithoutWorkOrderInput[];
    updateMany?: Prisma.WorkOrderEventUpdateManyWithWhereWithoutWorkOrderInput | Prisma.WorkOrderEventUpdateManyWithWhereWithoutWorkOrderInput[];
    deleteMany?: Prisma.WorkOrderEventScalarWhereInput | Prisma.WorkOrderEventScalarWhereInput[];
};
export type WorkOrderEventCreateWithoutWorkOrderInput = {
    id?: string;
    status: $Enums.WorkOrderStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type WorkOrderEventUncheckedCreateWithoutWorkOrderInput = {
    id?: string;
    status: $Enums.WorkOrderStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type WorkOrderEventCreateOrConnectWithoutWorkOrderInput = {
    where: Prisma.WorkOrderEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkOrderEventCreateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput>;
};
export type WorkOrderEventCreateManyWorkOrderInputEnvelope = {
    data: Prisma.WorkOrderEventCreateManyWorkOrderInput | Prisma.WorkOrderEventCreateManyWorkOrderInput[];
    skipDuplicates?: boolean;
};
export type WorkOrderEventUpsertWithWhereUniqueWithoutWorkOrderInput = {
    where: Prisma.WorkOrderEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkOrderEventUpdateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedUpdateWithoutWorkOrderInput>;
    create: Prisma.XOR<Prisma.WorkOrderEventCreateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedCreateWithoutWorkOrderInput>;
};
export type WorkOrderEventUpdateWithWhereUniqueWithoutWorkOrderInput = {
    where: Prisma.WorkOrderEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkOrderEventUpdateWithoutWorkOrderInput, Prisma.WorkOrderEventUncheckedUpdateWithoutWorkOrderInput>;
};
export type WorkOrderEventUpdateManyWithWhereWithoutWorkOrderInput = {
    where: Prisma.WorkOrderEventScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkOrderEventUpdateManyMutationInput, Prisma.WorkOrderEventUncheckedUpdateManyWithoutWorkOrderInput>;
};
export type WorkOrderEventScalarWhereInput = {
    AND?: Prisma.WorkOrderEventScalarWhereInput | Prisma.WorkOrderEventScalarWhereInput[];
    OR?: Prisma.WorkOrderEventScalarWhereInput[];
    NOT?: Prisma.WorkOrderEventScalarWhereInput | Prisma.WorkOrderEventScalarWhereInput[];
    id?: Prisma.StringFilter<"WorkOrderEvent"> | string;
    workOrderId?: Prisma.StringFilter<"WorkOrderEvent"> | string;
    status?: Prisma.EnumWorkOrderStatusFilter<"WorkOrderEvent"> | $Enums.WorkOrderStatus;
    notes?: Prisma.StringNullableFilter<"WorkOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkOrderEvent"> | Date | string;
};
export type WorkOrderEventCreateManyWorkOrderInput = {
    id?: string;
    status: $Enums.WorkOrderStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type WorkOrderEventUpdateWithoutWorkOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkOrderEventUncheckedUpdateWithoutWorkOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkOrderEventUncheckedUpdateManyWithoutWorkOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkOrderEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workOrderId?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workOrderEvent"]>;
export type WorkOrderEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workOrderId?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workOrderEvent"]>;
export type WorkOrderEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workOrderId?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workOrderEvent"]>;
export type WorkOrderEventSelectScalar = {
    id?: boolean;
    workOrderId?: boolean;
    status?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type WorkOrderEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "workOrderId" | "status" | "notes" | "createdAt", ExtArgs["result"]["workOrderEvent"]>;
export type WorkOrderEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
};
export type WorkOrderEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
};
export type WorkOrderEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workOrder?: boolean | Prisma.WorkOrderDefaultArgs<ExtArgs>;
};
export type $WorkOrderEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkOrderEvent";
    objects: {
        workOrder: Prisma.$WorkOrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        workOrderId: string;
        status: $Enums.WorkOrderStatus;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["workOrderEvent"]>;
    composites: {};
};
export type WorkOrderEventGetPayload<S extends boolean | null | undefined | WorkOrderEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload, S>;
export type WorkOrderEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkOrderEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkOrderEventCountAggregateInputType | true;
};
export interface WorkOrderEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkOrderEvent'];
        meta: {
            name: 'WorkOrderEvent';
        };
    };
    findUnique<T extends WorkOrderEventFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkOrderEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkOrderEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkOrderEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkOrderEventFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkOrderEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkOrderEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkOrderEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkOrderEventFindManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkOrderEventCreateArgs>(args: Prisma.SelectSubset<T, WorkOrderEventCreateArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkOrderEventCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkOrderEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkOrderEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkOrderEventDeleteArgs>(args: Prisma.SelectSubset<T, WorkOrderEventDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkOrderEventUpdateArgs>(args: Prisma.SelectSubset<T, WorkOrderEventUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkOrderEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkOrderEventUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkOrderEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkOrderEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkOrderEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkOrderEventUpsertArgs>(args: Prisma.SelectSubset<T, WorkOrderEventUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkOrderEventClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkOrderEventCountArgs>(args?: Prisma.Subset<T, WorkOrderEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkOrderEventCountAggregateOutputType> : number>;
    aggregate<T extends WorkOrderEventAggregateArgs>(args: Prisma.Subset<T, WorkOrderEventAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderEventAggregateType<T>>;
    groupBy<T extends WorkOrderEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkOrderEventGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkOrderEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkOrderEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkOrderEventFieldRefs;
}
export interface Prisma__WorkOrderEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    workOrder<T extends Prisma.WorkOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkOrderEventFieldRefs {
    readonly id: Prisma.FieldRef<"WorkOrderEvent", 'String'>;
    readonly workOrderId: Prisma.FieldRef<"WorkOrderEvent", 'String'>;
    readonly status: Prisma.FieldRef<"WorkOrderEvent", 'WorkOrderStatus'>;
    readonly notes: Prisma.FieldRef<"WorkOrderEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WorkOrderEvent", 'DateTime'>;
}
export type WorkOrderEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where: Prisma.WorkOrderEventWhereUniqueInput;
};
export type WorkOrderEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where: Prisma.WorkOrderEventWhereUniqueInput;
};
export type WorkOrderEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderEventWhereInput;
    orderBy?: Prisma.WorkOrderEventOrderByWithRelationInput | Prisma.WorkOrderEventOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderEventScalarFieldEnum | Prisma.WorkOrderEventScalarFieldEnum[];
};
export type WorkOrderEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderEventWhereInput;
    orderBy?: Prisma.WorkOrderEventOrderByWithRelationInput | Prisma.WorkOrderEventOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderEventScalarFieldEnum | Prisma.WorkOrderEventScalarFieldEnum[];
};
export type WorkOrderEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where?: Prisma.WorkOrderEventWhereInput;
    orderBy?: Prisma.WorkOrderEventOrderByWithRelationInput | Prisma.WorkOrderEventOrderByWithRelationInput[];
    cursor?: Prisma.WorkOrderEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkOrderEventScalarFieldEnum | Prisma.WorkOrderEventScalarFieldEnum[];
};
export type WorkOrderEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkOrderEventCreateInput, Prisma.WorkOrderEventUncheckedCreateInput>;
};
export type WorkOrderEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkOrderEventCreateManyInput | Prisma.WorkOrderEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkOrderEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    data: Prisma.WorkOrderEventCreateManyInput | Prisma.WorkOrderEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WorkOrderEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WorkOrderEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkOrderEventUpdateInput, Prisma.WorkOrderEventUncheckedUpdateInput>;
    where: Prisma.WorkOrderEventWhereUniqueInput;
};
export type WorkOrderEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkOrderEventUpdateManyMutationInput, Prisma.WorkOrderEventUncheckedUpdateManyInput>;
    where?: Prisma.WorkOrderEventWhereInput;
    limit?: number;
};
export type WorkOrderEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkOrderEventUpdateManyMutationInput, Prisma.WorkOrderEventUncheckedUpdateManyInput>;
    where?: Prisma.WorkOrderEventWhereInput;
    limit?: number;
    include?: Prisma.WorkOrderEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WorkOrderEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where: Prisma.WorkOrderEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkOrderEventCreateInput, Prisma.WorkOrderEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkOrderEventUpdateInput, Prisma.WorkOrderEventUncheckedUpdateInput>;
};
export type WorkOrderEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
    where: Prisma.WorkOrderEventWhereUniqueInput;
};
export type WorkOrderEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkOrderEventWhereInput;
    limit?: number;
};
export type WorkOrderEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkOrderEventSelect<ExtArgs> | null;
    omit?: Prisma.WorkOrderEventOmit<ExtArgs> | null;
    include?: Prisma.WorkOrderEventInclude<ExtArgs> | null;
};
