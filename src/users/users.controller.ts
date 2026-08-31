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

import { RoleType } from '@prisma/client';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { JwtGuard } from '../auth/jwt/jwt.guard';
import { Roles } from '../auth/decorators/roles/roles.decorator';
import { RolesGuard } from '../auth/guards/roles/roles.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @Roles(RoleType.ADMIN)
  @UseGuards(RolesGuard)
  create(
    @Body() createUserDto: CreateUserDto,
    @Request() req: any,
  ) {
    return this.usersService.create(
      createUserDto,
      req.user.organizationId,
    );
  }

  @Get()
  @Roles(RoleType.ADMIN)
  @UseGuards(RolesGuard)
  findAll(@Request() req: any) {
    return this.usersService.findAll(
      req.user.organizationId,
    );
  }

      @Get('technicians')
    @Roles(RoleType.ADMIN, RoleType.DISPATCHER)
    @UseGuards(RolesGuard)
    findTechnicians(@Request() req: any) {
      return this.usersService.findTechnicians(
        req.user.organizationId,
      );
    }

  @Get(':id')
  @Roles(RoleType.ADMIN)
  @UseGuards(RolesGuard)
  findOne(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.usersService.findOne(
      id,
      req.user.organizationId,
    );
  }

  @Patch(':id')
  @Roles(RoleType.ADMIN)
  @UseGuards(RolesGuard)
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req: any,
  ) {
    return this.usersService.update(
      id,
      updateUserDto,
      req.user.organizationId,
    );
  }

  
  @Patch('technicians/:id')
@Roles(RoleType.ADMIN)
@UseGuards(RolesGuard)
updateTechnician(
  @Param('id') id: string,
  @Body()
  data: {
    phone?: string;
    isAvailable?: boolean;
    latitude?: number;
    longitude?: number;
  },
  @Request() req: any,
) {
  return this.usersService.updateTechnician(
    id,
    data,
    req.user.organizationId,
  );
}

  @Delete(':id')
  @Roles(RoleType.ADMIN)
  @UseGuards(RolesGuard)
  remove(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.usersService.remove(
      id,
      req.user.organizationId,
    );
  }
}