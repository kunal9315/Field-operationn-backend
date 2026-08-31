import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const email = 'admin@demo-fieldops.com';
  const newPassword = 'Admin@12345';

  console.log('Looking for admin user...');

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error(`User not found: ${email}`);
  }

  console.log('Admin user found.');

  const passwordHash = await bcrypt.hash(
    newPassword,
    10,
  );

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      passwordHash,
    },
  });

  console.log('');
  console.log('Admin password reset successfully.');
  console.log(`Email: ${email}`);
  console.log(`Password: ${newPassword}`);
  console.log(`Organization ID: ${user.organizationId}`);
}

main()
  .catch((error) => {
    console.error('Failed to reset admin password:');
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
