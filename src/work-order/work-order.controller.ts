import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { WorkOrderService } from './work-order.service';
import { CreateWorkOrderDto } from './dto/create-work-order.dto';
import { UpdateWorkOrderDto } from './dto/update-work-order.dto';
import { JwtGuard } from '../auth/jwt/jwt.guard';

import { CreateWorkOrderAssignmentDto } from './dto/create-work-order-assignment.dto';

@UseGuards(JwtGuard)
@Controller('work-orders')
export class WorkOrderController {
  constructor(
    private readonly workOrderService: WorkOrderService,
  ) {}

  @Post()
  create(
    @Body()
    createWorkOrderDto: CreateWorkOrderDto,
    @Request() req: any,
  ) {
    return this.workOrderService.create(
      createWorkOrderDto,
      req.user.organizationId,
    );
  }

  @Get()
  findAll(@Request() req: any) {
    return this.workOrderService.findAll(
      req.user.organizationId,
    );
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.workOrderService.findOne(
      id,
      req.user.organizationId,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateWorkOrderDto: UpdateWorkOrderDto,
    @Request() req: any,
  ) {
    return this.workOrderService.update(
      id,
      updateWorkOrderDto,
      req.user.organizationId,
    );
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.workOrderService.remove(
      id,
      req.user.organizationId,
    );
  }

    @Post(':id/assign')
  assignTechnician(
    @Param('id') id: string,
    @Body()
    createWorkOrderAssignmentDto: CreateWorkOrderAssignmentDto,
    @Request() req: any,
  ) {
    return this.workOrderService.assignTechnician(
      id,
      createWorkOrderAssignmentDto.technicianId,
      req.user.organizationId,
    );
  }

  @Delete(':id/assign')
  unassignTechnician(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.workOrderService.unassignTechnician(
      id,
      req.user.organizationId,
    );
  }

}