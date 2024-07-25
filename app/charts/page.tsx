import React from 'react'
import ClientIncomeExpense from '@/components/ClientIncomeExpense'
import TransactionList from '@/components/TransactionList'

const page = async({ searchParams }: { searchParams: { page?: string } }) => {
  return (
    <div>
      <ClientIncomeExpense />
      <TransactionList searchParams={searchParams}/>
    </div>
  )
}

export default page
