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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcrypt"));
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    const organizationId = '4b3c93ba-bee1-4dfc-8bef-6fe004872756';
    const email = 'technician@demo-fieldops.com';
    const password = 'Tech@12345';
    const technicianRole = await prisma.role.upsert({
        where: {
            organizationId_name: {
                organizationId,
                name: 'Technician',
            },
        },
        update: {
            type: client_1.RoleType.TECHNICIAN,
        },
        create: {
            organizationId,
            name: 'Technician',
            type: client_1.RoleType.TECHNICIAN,
        },
    });
    console.log('Technician role:', technicianRole.id);
    let user = await prisma.user.findUnique({
        where: {
            organizationId_email: {
                organizationId,
                email,
            },
        },
    });
    if (!user) {
        const passwordHash = await bcrypt.hash(password, 10);
        user = await prisma.user.create({
            data: {
                organizationId,
                email,
                passwordHash,
                firstName: 'Mike',
                lastName: 'Technician',
                status: 'ACTIVE',
            },
        });
        console.log('Technician user created:', user.id);
    }
    else {
        console.log('Technician user already exists:', user.id);
    }
    await prisma.userRole.upsert({
        where: {
            userId_roleId: {
                userId: user.id,
                roleId: technicianRole.id,
            },
        },
        update: {},
        create: {
            userId: user.id,
            roleId: technicianRole.id,
        },
    });
    console.log('Technician role assigned.');
    const existingTechnician = await prisma.technician.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!existingTechnician) {
        const technician = await prisma.technician.create({
            data: {
                organizationId,
                userId: user.id,
                phone: '9876543210',
                isAvailable: true,
            },
        });
        console.log('Technician record created:', technician.id);
    }
    else {
        console.log('Technician record already exists:', existingTechnician.id);
    }
    console.log('');
    console.log('================================');
    console.log('TECHNICIAN LOGIN');
    console.log('================================');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Organization ID: ${organizationId}`);
    console.log('================================');
}
main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-technician.js.map