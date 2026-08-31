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

import { ServiceRequestService } from './service-request.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
import { JwtGuard } from '../auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller('service-requests')
export class ServiceRequestController {
  constructor(
    private readonly serviceRequestService: ServiceRequestService,
  ) {}

  @Post()
  create(
    @Body() createServiceRequestDto: CreateServiceRequestDto,
    @Request() req: any,
  ) {
    return this.serviceRequestService.create(
      createServiceRequestDto,
      req.user.organizationId,
    );
  }

  @Get()
  findAll(@Request() req: any) {
    return this.serviceRequestService.findAll(
      req.user.organizationId,
    );
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.serviceRequestService.findOne(
      id,
      req.user.organizationId,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceRequestDto: UpdateServiceRequestDto,
    @Request() req: any,
  ) {
    return this.serviceRequestService.update(
      id,
      updateServiceRequestDto,
      req.user.organizationId,
    );
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.serviceRequestService.remove(
      id,
      req.user.organizationId,
    );
  }
}