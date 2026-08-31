import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';



@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: {
        organizationId: '4b3c93ba-bee1-4dfc-8bef-6fe004872756',
        ...createCustomerDto,
      },
    });
  }

      async findAll(organizationId: string) {
        return this.prisma.customer.findMany({
          where: {
            organizationId,
          },
        });
      }

          async findOne(id: string, organizationId: string) {
      const customer = await this.prisma.customer.findFirst({
        where: {
          id,
          organizationId,
        },
      });

      if (!customer) {
        throw new NotFoundException('Customer not found');
      }

      return customer;
    }


          async update(
        id: string,
        updateCustomerDto: UpdateCustomerDto,
        organizationId: string,
      ) {
        const customer = await this.prisma.customer.findFirst({
          where: {
            id,
            organizationId,
          },
        });

        if (!customer) {
          throw new NotFoundException('Customer not found');
        }

        return this.prisma.customer.update({
          where: {
            id,
          },
          data: updateCustomerDto,
        });
      }


          async remove(id: string, organizationId: string) {
        const customer = await this.prisma.customer.findFirst({
          where: {
            id,
            organizationId,
          },
        });

        if (!customer) {
          throw new NotFoundException('Customer not found');
        }

        return this.prisma.customer.delete({
          where: {
            id,
          },
        });
      }

}