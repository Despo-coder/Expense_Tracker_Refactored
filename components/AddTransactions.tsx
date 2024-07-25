'use client'
import { toast } from 'react-toastify'
import { useRef, useState } from 'react'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import addTransaction from '@/app/actions/addTransactions';

function TransactionForm() {
  const [transactionType, setTransactionType] = useState('Choose');

  const paymentTypes = [
    'Cash', 
    'Credit Card', 
    'Debit Card', 
    'Bank Transfer', 
    'Mobile Payment'
  ];
  const predefinedExpenses = [
    'Transportation',
    'Food',
    'Housing',
    'Utilities',
    'Insurance',
    'Healthcare',
    'Savings',
    'Personal',
    'Entertainment',
    'Other'
  ];
  const predefinedIncomes = [
    'Salary',
    'Side Hustle',
    'Donation',
    'Gift',
    'Pension',
    'Insurance Claim',
    'Reimbursment',
    'Savings',
    'Other'
  ];

  const formRef = useRef<HTMLFormElement>(null)

  const clientAction = async(formData:FormData) => {
    const result = await addTransaction(formData)
    if(result.error){
       toast.error(result.error)
    } else if(result){ 
      toast.success('Transaction Added')
      formRef.current?.reset()
      setTransactionType('Choose')
    }
  }

  

  return (
    <Card className="container mt-16 p-6 shadow-lg border border-gray-200 rounded-lg">
      <form ref={formRef} action={clientAction} className="space-y-4 md:space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2 form-control">
            <label htmlFor="transactionType" className="block mb-2 text-sm font-medium text-gray-900">Transaction Type</label>
            <select 
              name="transactionType" 
              value={transactionType} 
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="choose">Choose</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
             
            </select>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 form-control">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <select name="text">
              {transactionType === 'expense' 
                ? predefinedExpenses.map((expense) => (
                    <option key={expense} value={expense}>{expense}</option>
                  ))
                : predefinedIncomes.map((income) => (
                    <option key={income} value={income}>{income}</option>
                  ))
              }
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2 form-control">
            <label htmlFor="paymentType" className="block mb-2 text-sm font-medium text-gray-900">Payment Method</label>
            <select name="paymentType">
              {paymentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 form-control">
            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
            <input 
              type="number" 
              name='amount' 
              placeholder='enter amount' 
              step='0.01'
              onChange={(e) => {
                const value = e.target.value;
                e.target.value = transactionType === 'expense' ? `-${Math.abs(parseFloat(value))}` : `${Math.abs(parseFloat(value))}`;
              }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="px-6 py-2 bg-black text-white hover:bg-black/80 rounded-xl">Add Transaction</Button>
        </div>
      </form>
    </Card>
  );
}

export default TransactionForm;
