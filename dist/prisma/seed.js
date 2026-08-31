"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    const organization = await prisma.organization.upsert({
        where: {
            slug: 'demo-fieldops',
        },
        update: {},
        create: {
            name: 'Demo FieldOps',
            slug: 'demo-fieldops',
        },
    });
    console.log('Organization created:', organization);
    const adminRole = await prisma.role.upsert({
        where: {
            organizationId_name: {
                organizationId: organization.id,
                name: 'Administrator',
            },
        },
        update: {
            type: client_1.RoleType.ADMIN,
        },
        create: {
            organizationId: organization.id,
            name: 'Administrator',
            type: client_1.RoleType.ADMIN,
        },
    });
    console.log('Admin role created:', adminRole);
    const adminUser = await prisma.user.findUnique({
        where: {
            organizationId_email: {
                organizationId: organization.id,
                email: 'admin@demo-fieldops.com',
            },
        },
    });
    if (adminUser) {
        await prisma.userRole.upsert({
            where: {
                userId_roleId: {
                    userId: adminUser.id,
                    roleId: adminRole.id,
                },
            },
            update: {},
            create: {
                userId: adminUser.id,
                roleId: adminRole.id,
            },
        });
        console.log('Admin role assigned to:', adminUser.email);
    }
    else {
        console.log('Admin user not found. Create the admin user first, then run the seed again.');
    }
}
main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map