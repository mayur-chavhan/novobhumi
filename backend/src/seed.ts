import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@novobhumi.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        passwordHash
      }
    });
    console.log(`Admin user created: ${adminEmail}`);
  } else {
    console.log('Admin user already exists');
  }

  const existingSettings = await prisma.siteSettings.findUnique({
    where: { id: 1 }
  });

  if (!existingSettings) {
    await prisma.siteSettings.create({
      data: {
        id: 1,
        siteName: 'Novobhumi',
        tagline: 'Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming',
        phone: '+91 9226202224',
        email: 'support@novobhumi.com',
        location: 'Pune, Maharashtra, India',
        amazonUrl: 'https://amzn.in/d/asVswJT',
        shopifyUrl: '',
        showAmazon: true,
        showShopify: false
      }
    });
    console.log('Default site settings created');
  } else {
    console.log('Site settings already exist');
  }

  const existingSocialLinks = await prisma.socialLink.findMany();
  
  if (existingSocialLinks.length === 0) {
    await prisma.socialLink.createMany({
      data: [
        { platform: 'instagram', handle: 'novobhumi', url: 'https://www.instagram.com/novobhumi', sortOrder: 1 },
        { platform: 'facebook', handle: 'novobhumi', url: 'https://www.facebook.com/novobhumi', sortOrder: 2 },
        { platform: 'twitter', handle: 'novobhumi', url: 'https://www.twitter.com/novobhumi', sortOrder: 3 }
      ]
    });
    console.log('Default social links created');
  } else {
    console.log('Social links already exist');
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
