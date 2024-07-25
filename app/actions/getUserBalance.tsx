'use server'
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

async function getUserBalance(): Promise<{
    balance?: number;
    error?: string;
  }> {
    const { userId } = auth();
  
    if (!userId) {
      return { error: 'User not found' };
    }
  
    try {
      const transactions = await db.transactionv1.findMany({
        where: { userId },
      });
  
      const balance = transactions.reduce(
        (sum: number, transaction: { amount: number }) => sum + transaction.amount,
        0    );
  
      return { balance };
    } catch (error) {
      return { error: 'Database error' };
    }
  }
  
  export default getUserBalance;