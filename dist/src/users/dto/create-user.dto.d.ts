import { RoleType } from '@prisma/client';
export declare class CreateUserDto {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: RoleType;
}
