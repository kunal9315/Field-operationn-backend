import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
