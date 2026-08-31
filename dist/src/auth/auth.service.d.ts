import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string, organizationId: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            organizationId: string;
            email: string;
            firstName: string;
            lastName: string;
            status: import("@prisma/client").$Enums.UserStatus;
            roles: import("@prisma/client").$Enums.RoleType[];
        };
    }>;
}
