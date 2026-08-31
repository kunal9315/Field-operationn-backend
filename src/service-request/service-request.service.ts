import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';

@Injectable()
export class ServiceRequestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createServiceRequestDto: CreateServiceRequestDto,
    organizationId: string,
  ) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: createServiceRequestDto.customerId,
        organizationId,
      },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    return this.prisma.serviceRequest.create({
      data: {
        organizationId,
        customerId: createServiceRequestDto.customerId,
        title: createServiceRequestDto.title,
        description: createServiceRequestDto.description,
        priority: createServiceRequestDto.priority,
      },
      include: {
        customer: true,
      },
    });
  }

  async findAll(organizationId: string) {
    return this.prisma.serviceRequest.findMany({
      where: {
        organizationId,
      },
      include: {
        customer: true,
        workOrders: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(
    id: string,
    organizationId: string,
  ) {
    const serviceRequest =
      await this.prisma.serviceRequest.findFirst({
        where: {
          id,
          organizationId,
        },
        include: {
          customer: true,
          workOrders: true,
        },
      });

    if (!serviceRequest) {
      throw new NotFoundException(
        'Service request not found',
      );
    }

    return serviceRequest;
  }

  async update(
    id: string,
    updateServiceRequestDto: UpdateServiceRequestDto,
    organizationId: string,
  ) {
    const existing =
      await this.prisma.serviceRequest.findFirst({
        where: {
          id,
          organizationId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Service request not found',
      );
    }

    if (updateServiceRequestDto.customerId) {
      const customer =
        await this.prisma.customer.findFirst({
          where: {
            id: updateServiceRequestDto.customerId,
            organizationId,
          },
        });

      if (!customer) {
        throw new NotFoundException(
          'Customer not found',
        );
      }
    }

    return this.prisma.serviceRequest.update({
      where: {
        id,
      },
      data: updateServiceRequestDto,
      include: {
        customer: true,
        workOrders: true,
      },
    });
  }

  async remove(
    id: string,
    organizationId: string,
  ) {
    const existing =
      await this.prisma.serviceRequest.findFirst({
        where: {
          id,
          organizationId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Service request not found',
      );
    }

    return this.prisma.serviceRequest.delete({
      where: {
        id,
      },
    });
  }
}