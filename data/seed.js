const { PrismaClient } = require('@prisma/client');
const data = require('../data/MOCK_DATA.json');
const prisma = new PrismaClient();

// node assets/utils/seed.js
const ID =[
  'user_2jeSdPS7ezF9AiR8DX5qEKaoneM',
  'user_2jeNQ9rbQj2U3lrYvRVNx5HANtA',
];

async function main() {
  const UserId = ID[Math.floor(Math.random() * ID.length)];
  const jobs = data.map((job) => {
    return {
      ...job,
      UserId,
    };
  });
  for (const job of jobs) {
    await prisma.transactionv1.create({
      data: {
        text: job.text,
        amount: job.amount,
        paymentType: job.paymentType,
        transactionType: job.transactionType,
        createdAt: new Date(job.createdAt).toISOString(),
        user: {
          connectOrCreate: {
            where: { id: job.UserId },
            create: { id: job.UserId }
          }
        }
      }
    })
  }
  
    
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });