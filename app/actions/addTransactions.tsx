'use server'
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
    text: string;
    amount: number;
    paymentType: string;
    transactionType: string;
}

interface TransactionResponse {
    data?: TransactionData;
    error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResponse> {
    const textValue = formData.get('text');
    const amountValue = formData.get('amount');
    const paymentTypeValue = formData.get('paymentType');
    const transactionTypeValue = formData.get('transactionType');

    if (!textValue || !amountValue || !paymentTypeValue || !transactionTypeValue) {
        return { error: 'All Fields are required.' };
    }

    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString());
    const paymentType: string = paymentTypeValue.toString();
    const transactionType: string = transactionTypeValue.toString();

    const {userId} = auth()
    if(!userId){
        return {error: 'User not found'}
    }
    try {
        const transactionData : TransactionData = await db.transactionv1.create({
            data: {
                text,
                amount,
                paymentType,
                transactionType,
                userId
            }
        })
        revalidatePath('/')
        revalidatePath('/transactions')

        return { data: transactionData };
        
    } catch (error) {
        return { error: 'Error adding transaction' };
    }
}

export default addTransaction;
