import {
  Controller,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';

import { DashboardService } from './dashboard.service';
import { JwtGuard } from '../auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
  ) {}

  @Get('stats')
  getStats(@Request() req: any) {
    return this.dashboardService.getStats(
      req.user.organizationId,
    );
  }
}