import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
    organizationId: string,
  ) {
    const passwordHash = await bcrypt.hash(
      createUserDto.password,
      10,
    );

    const role = await this.prisma.role.findFirst({
      where: {
        organizationId,
        type: createUserDto.role,
      },
    });

    if (!role) {
      throw new NotFoundException(
        `Role ${createUserDto.role} not found`,
      );
    }

    const user = await this.prisma.user.create({
      data: {
        organizationId,
        email: createUserDto.email,
        passwordHash,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,

        roles: {
          create: {
            roleId: role.id,
          },
        },
      },

      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    // If the selected role is TECHNICIAN,
    // create a Technician record as well.
    if (createUserDto.role === 'TECHNICIAN') {
      await this.prisma.technician.create({
        data: {
          organizationId,
          userId: user.id,
        },
      });
    }

    const {
      passwordHash: _,
      ...safeUser
    } = user;

    return {
      ...safeUser,
      roles: user.roles.map(
        (userRole) => userRole.role.type,
      ),
    };
  }

  async findAll(organizationId: string) {
    return this.prisma.user.findMany({
      where: {
        organizationId,
      },

      select: {
        id: true,
        organizationId: true,
        email: true,
        firstName: true,
        lastName: true,
        status: true,
        createdAt: true,
        updatedAt: true,

        roles: {
          select: {
            role: {
              select: {
                type: true,
                name: true,
              },
            },
          },
        },

        technician: {
          select: {
            id: true,
            phone: true,
            isAvailable: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findTechnicians(
    organizationId: string,
  ) {
    return this.prisma.technician.findMany({
      where: {
        organizationId,
      },

      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            status: true,
          },
        },
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
    const user =
      await this.prisma.user.findFirst({
        where: {
          id,
          organizationId,
        },

        select: {
          id: true,
          organizationId: true,
          email: true,
          firstName: true,
          lastName: true,
          status: true,
          createdAt: true,
          updatedAt: true,

          roles: {
            select: {
              role: {
                select: {
                  type: true,
                  name: true,
                },
              },
            },
          },

          technician: {
            select: {
              id: true,
              phone: true,
              isAvailable: true,
              latitude: true,
              longitude: true,
            },
          },
        },
      });

    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    organizationId: string,
  ) {
    const user =
      await this.prisma.user.findFirst({
        where: {
          id,
          organizationId,
        },
      });

    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    return this.prisma.user.update({
      where: {
        id,
      },

      data: updateUserDto,

      select: {
        id: true,
        organizationId: true,
        email: true,
        firstName: true,
        lastName: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async remove(
    id: string,
    organizationId: string,
  ) {
    const user =
      await this.prisma.user.findFirst({
        where: {
          id,
          organizationId,
        },
      });

    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    return this.prisma.user.delete({
      where: {
        id,
      },

      select: {
        id: true,
        organizationId: true,
        email: true,
        firstName: true,
        lastName: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async updateTechnician(
  technicianId: string,
  data: {
    phone?: string;
    isAvailable?: boolean;
    latitude?: number;
    longitude?: number;
  },
  organizationId: string,
) {
  const technician =
    await this.prisma.technician.findFirst({
      where: {
        id: technicianId,
        organizationId,
      },
    });

  if (!technician) {
    throw new NotFoundException(
      'Technician not found',
    );
  }

  return this.prisma.technician.update({
    where: {
      id: technicianId,
    },
    data,
    include: {
      user: {
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          status: true,
        },
      },
    },
  });
}
}