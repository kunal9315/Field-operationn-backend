import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getStats(organizationId: string) {
    const [
      users,
      customers,
      workOrders,
      technicians,
    ] = await Promise.all([
      this.prisma.user.count({
        where: { organizationId },
      }),

      this.prisma.customer.count({
        where: { organizationId },
      }),

      this.prisma.workOrder.count({
        where: { organizationId },
      }),

      this.prisma.technician.count({
        where: { organizationId },
      }),
    ]);

    return {
      users,
      customers,
      workOrders,
      technicians,
    };
  }
}