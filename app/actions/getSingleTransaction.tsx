'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Transaction } from '@/types/transactions';

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const { userId } = auth();

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

async function getTransactionById(id: string): Promise<{
  transaction?: Transaction;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transaction = await db.transactionv1.findUnique({
      where: { id, userId },
    });

    if (!transaction) {
      return { error: 'Transaction not found' };
    }

    return { transaction };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export { getTransactions, getTransactionById };
