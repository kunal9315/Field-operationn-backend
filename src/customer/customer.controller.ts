import { Body, 
        Controller, 
        Get, 
        Param, 
        Post, 
        Patch,
        Delete,
        Request, 
      } from '@nestjs/common';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from "./dto/update-customer.dto";

import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller("customer")

// @Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

    @Get()
      findAll(@Request() req: any) {
      return this.customerService.findAll(req.user.organizationId);
  }

      @Get(':id')
      findOne(@Param('id') id: string, @Request() req: any) {
        return this.customerService.findOne(id, req.user.organizationId);
      }

        @Patch(':id')
      update(
        @Param('id') id: string,
        @Body() updateCustomerDto: UpdateCustomerDto,
        @Request() req: any,
      ) {
        return this.customerService.update(
          id,
          updateCustomerDto,
          req.user.organizationId,
        );
      }

          @Delete(':id')
      remove(@Param('id') id: string, @Request() req: any) {
        return this.customerService.remove(id, req.user.organizationId);
      }


}