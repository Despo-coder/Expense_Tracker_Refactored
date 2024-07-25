'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import {Transaction} from '@/types/transactions';

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const { userId } = auth();
console.log(userId)
  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transactionv1.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getTransactions;