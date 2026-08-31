"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto, organizationId) {
        const passwordHash = await bcrypt.hash(createUserDto.password, 10);
        const role = await this.prisma.role.findFirst({
            where: {
                organizationId,
                type: createUserDto.role,
            },
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role ${createUserDto.role} not found`);
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
        if (createUserDto.role === 'TECHNICIAN') {
            await this.prisma.technician.create({
                data: {
                    organizationId,
                    userId: user.id,
                },
            });
        }
        const { passwordHash: _, ...safeUser } = user;
        return {
            ...safeUser,
            roles: user.roles.map((userRole) => userRole.role.type),
        };
    }
    async findAll(organizationId) {
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
    async findTechnicians(organizationId) {
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
    async findOne(id, organizationId) {
        const user = await this.prisma.user.findFirst({
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
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async update(id, updateUserDto, organizationId) {
        const user = await this.prisma.user.findFirst({
            where: {
                id,
                organizationId,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
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
    async remove(id, organizationId) {
        const user = await this.prisma.user.findFirst({
            where: {
                id,
                organizationId,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
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
    async updateTechnician(technicianId, data, organizationId) {
        const technician = await this.prisma.technician.findFirst({
            where: {
                id: technicianId,
                organizationId,
            },
        });
        if (!technician) {
            throw new common_1.NotFoundException('Technician not found');
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
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map