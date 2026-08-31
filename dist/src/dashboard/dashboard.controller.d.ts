import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(req: any): Promise<{
        users: number;
        customers: number;
        workOrders: number;
        technicians: number;
    }>;
}
