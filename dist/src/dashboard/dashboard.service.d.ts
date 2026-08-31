import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getStats(organizationId: string): Promise<{
        users: number;
        customers: number;
        workOrders: number;
        technicians: number;
    }>;
}
