import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, req: any): Promise<{
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
    findAll(req: any): Promise<{
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
    findTechnicians(req: any): Promise<({
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
    findOne(id: string, req: any): Promise<{
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
    update(id: string, updateUserDto: UpdateUserDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    updateTechnician(id: string, data: {
        phone?: string;
        isAvailable?: boolean;
        latitude?: number;
        longitude?: number;
    }, req: any): Promise<{
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
    remove(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        email: string;
        firstName: string;
        lastName: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
}
