import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateWorkOrderDto } from './dto/create-work-order.dto';
import { UpdateWorkOrderDto } from './dto/update-work-order.dto';

@Injectable()
export class WorkOrderService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    createWorkOrderDto: CreateWorkOrderDto,
    organizationId: string,
  ) {
    const customer =
      await this.prisma.customer.findFirst({
        where: {
          id: createWorkOrderDto.customerId,
          organizationId,
        },
      });

    if (!customer) {
      throw new NotFoundException(
        'Customer not found',
      );
    }

    const serviceRequest =
      await this.prisma.serviceRequest.findFirst({
        where: {
          id: createWorkOrderDto.serviceRequestId,
          organizationId,
        },
      });

    if (!serviceRequest) {
      throw new NotFoundException(
        'Service request not found',
      );
    }

    if (
      serviceRequest.customerId !==
      createWorkOrderDto.customerId
    ) {
      throw new NotFoundException(
        'Service request does not belong to this customer',
      );
    }

   return this.prisma.workOrder.create({
  data: {
    organizationId,
    customerId: createWorkOrderDto.customerId,
    serviceRequestId: createWorkOrderDto.serviceRequestId,
    title: createWorkOrderDto.title,
    description: createWorkOrderDto.description,
    status: createWorkOrderDto.status,
    priority: createWorkOrderDto.priority,

    scheduledStart: createWorkOrderDto.scheduledStart
      ? new Date(createWorkOrderDto.scheduledStart)
      : undefined,

    scheduledEnd: createWorkOrderDto.scheduledEnd
      ? new Date(createWorkOrderDto.scheduledEnd)
      : undefined,
  },
    });
  }

  async findAll(organizationId: string) {
    return this.prisma.workOrder.findMany({
      where: {
        organizationId,
      },
      include: {
        customer: true,
        serviceRequest: true,
        assignments: true,
        events: true,
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
  const workOrder =
    await this.prisma.workOrder.findFirst({
      where: {
        id,
        organizationId,
      },
      include: {
        customer: true,

        serviceRequest: true,

        assignments: {
          include: {
            technician: {
              include: {
                user: true,
              },
            },
          },
        },

        events: true,
      },
    });

  if (!workOrder) {
    throw new NotFoundException(
      'Work order not found',
    );
  }

  return workOrder;
}

    async update(
      id: string,
      updateWorkOrderDto: UpdateWorkOrderDto,
      organizationId: string,
    ) {
      const existing =
        await this.prisma.workOrder.findFirst({
          where: {
            id,
            organizationId,
          },
        });

      if (!existing) {
        throw new NotFoundException(
          'Work order not found',
        );
      }

      if (updateWorkOrderDto.customerId) {
        const customer =
          await this.prisma.customer.findFirst({
            where: {
              id: updateWorkOrderDto.customerId,
              organizationId,
            },
          });

        if (!customer) {
          throw new NotFoundException(
            'Customer not found',
          );
        }
      }

      if (updateWorkOrderDto.serviceRequestId) {
        const serviceRequest =
          await this.prisma.serviceRequest.findFirst({
            where: {
              id: updateWorkOrderDto.serviceRequestId,
              organizationId,
            },
          });

        if (!serviceRequest) {
          throw new NotFoundException(
            'Service request not found',
          );
        }

        const customerId =
          updateWorkOrderDto.customerId ??
          existing.customerId;

        if (
          serviceRequest.customerId !==
          customerId
        ) {
          throw new NotFoundException(
            'Service request does not belong to this customer',
          );
        }
      }

      const updatedWorkOrder =
        await this.prisma.workOrder.update({
          where: {
            id,
          },
          data: updateWorkOrderDto,
          include: {
            customer: true,
            serviceRequest: true,
            assignments: {
              include: {
                technician: {
                  include: {
                    user: true,
                  },
                },
              },
            },
            events: true,
          },
        });

      // Create a work-order event whenever the status changes.
      if (
        updateWorkOrderDto.status &&
        updateWorkOrderDto.status !== existing.status
      ) {
        await this.prisma.workOrderEvent.create({
          data: {
            workOrderId: id,
            status: updateWorkOrderDto.status,
            notes: `Work order status changed from ${existing.status} to ${updateWorkOrderDto.status}`,
          },
        });
      }

      // Fetch again so the newly-created event is included
      // in the response.
      return this.prisma.workOrder.findFirst({
        where: {
          id,
          organizationId,
        },
        include: {
          customer: true,
          serviceRequest: true,
          assignments: {
            include: {
              technician: {
                include: {
                  user: true,
                },
              },
            },
          },
          events: {
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      });
    }

  async remove(
    id: string,
    organizationId: string,
  ) {
    const existing =
      await this.prisma.workOrder.findFirst({
        where: {
          id,
          organizationId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Work order not found',
      );
    }

    return this.prisma.workOrder.delete({
      where: {
        id,
      },
    });
  }

    async assignTechnician(
    workOrderId: string,
    technicianId: string,
    organizationId: string,
  ) {
    const workOrder =
      await this.prisma.workOrder.findFirst({
        where: {
          id: workOrderId,
          organizationId,
        },
      });

    if (!workOrder) {
      throw new NotFoundException(
        'Work order not found',
      );
    }

    const technician =
      await this.prisma.technician.findFirst({
        where: {
          id: technicianId,
          organizationId,
        },
        include: {
          user: true,
        },
      });

    if (!technician) {
      throw new NotFoundException(
        'Technician not found',
      );
    }

    if (!technician.isAvailable) {
      throw new NotFoundException(
        'Technician is not available',
      );
    }

    const existingAssignment =
      await this.prisma.workOrderAssignment.findFirst({
        where: {
          workOrderId,
          technicianId,
          unassignedAt: null,
        },
      });

    if (existingAssignment) {
      return this.prisma.workOrderAssignment.findUnique({
        where: {
          id: existingAssignment.id,
        },
        include: {
          technician: {
            include: {
              user: true,
            },
          },
          workOrder: true,
        },
      });
    }

    await this.prisma.workOrderAssignment.updateMany({
      where: {
        workOrderId,
        unassignedAt: null,
      },
      data: {
        unassignedAt: new Date(),
      },
    });

    const assignment =
      await this.prisma.workOrderAssignment.create({
        data: {
          workOrderId,
          technicianId,
        },
        include: {
          technician: {
            include: {
              user: true,
            },
          },
          workOrder: true,
        },
      });

    await this.prisma.workOrder.update({
      where: {
        id: workOrderId,
      },
      data: {
        status: 'ASSIGNED',
      },
    });

    return assignment;
  }

  async unassignTechnician(
    workOrderId: string,
    organizationId: string,
  ) {
    const workOrder =
      await this.prisma.workOrder.findFirst({
        where: {
          id: workOrderId,
          organizationId,
        },
      });

    if (!workOrder) {
      throw new NotFoundException(
        'Work order not found',
      );
    }

    const activeAssignment =
      await this.prisma.workOrderAssignment.findFirst({
        where: {
          workOrderId,
          unassignedAt: null,
        },
      });

    if (!activeAssignment) {
      throw new NotFoundException(
        'No active technician assignment found',
      );
    }

    const assignment =
      await this.prisma.workOrderAssignment.update({
        where: {
          id: activeAssignment.id,
        },
        data: {
          unassignedAt: new Date(),
        },
        include: {
          technician: {
            include: {
              user: true,
            },
          },
          workOrder: true,
        },
      });

    await this.prisma.workOrder.update({
      where: {
        id: workOrderId,
      },
      data: {
        status: 'NEW',
      },
    });

    return assignment;
  }

}