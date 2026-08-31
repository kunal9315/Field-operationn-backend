import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto, organizationId: string): Promise<{
        roles: import("@prisma/client").$Enums.RoleType[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    findAll(organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
        roles: {
            role: {
                name: string;
                type: import("@prisma/client").$Enums.RoleType;
            };
        }[];
        technician: {
            id: string;
            phone: string | null;
            isAvailable: boolean;
        } | null;
    }[]>;
    findTechnicians(organizationId: string): Promise<({
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            status: import("@prisma/client").$Enums.UserStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        userId: string;
        phone: string | null;
        isAvailable: boolean;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
    })[]>;
    findOne(id: string, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
        roles: {
            role: {
                name: string;
                type: import("@prisma/client").$Enums.RoleType;
            };
        }[];
        technician: {
            id: string;
            phone: string | null;
            isAvailable: boolean;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
        } | null;
    }>;
    update(id: string, updateUserDto: UpdateUserDto, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    remove(id: string, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    updateTechnician(technicianId: string, data: {
        phone?: string;
        isAvailable?: boolean;
        latitude?: number;
        longitude?: number;
    }, organizationId: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            status: import("@prisma/client").$Enums.UserStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        userId: string;
        phone: string | null;
        isAvailable: boolean;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
}
