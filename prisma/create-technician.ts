import 'dotenv/config';
import { PrismaClient, RoleType } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const organizationId =
    '4b3c93ba-bee1-4dfc-8bef-6fe004872756';

  const email = 'technician@demo-fieldops.com';
  const password = 'Tech@12345';

  // 1. Create or find Technician role
  const technicianRole = await prisma.role.upsert({
    where: {
      organizationId_name: {
        organizationId,
        name: 'Technician',
      },
    },
    update: {
      type: RoleType.TECHNICIAN,
    },
    create: {
      organizationId,
      name: 'Technician',
      type: RoleType.TECHNICIAN,
    },
  });

  console.log('Technician role:', technicianRole.id);

  // 2. Create or find technician user
  let user = await prisma.user.findUnique({
    where: {
      organizationId_email: {
        organizationId,
        email,
      },
    },
  });

  if (!user) {
    const passwordHash = await bcrypt.hash(
      password,
      10,
    );

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
  } else {
    console.log('Technician user already exists:', user.id);
  }

  // 3. Give the user the Technician role
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

  // 4. Create Technician record
  const existingTechnician =
    await prisma.technician.findUnique({
      where: {
        userId: user.id,
      },
    });

  if (!existingTechnician) {
    const technician =
      await prisma.technician.create({
        data: {
          organizationId,
          userId: user.id,
          phone: '9876543210',
          isAvailable: true,
        },
      });

    console.log(
      'Technician record created:',
      technician.id,
    );
  } else {
    console.log(
      'Technician record already exists:',
      existingTechnician.id,
    );
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