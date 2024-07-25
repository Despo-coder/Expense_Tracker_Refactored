'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useParams } from "next/navigation"
import { use } from "react"
import ClientIncomeExpense from "./ClientIncomeExpense"

export default function TransactionDetails() {
  //const router = useRouter()
  const { id } = useParams()

  console.log(id)
  // Replace with actual data fetching logic
  const transaction = {
    id: 1,
    type: 'Income',
    name: 'Salary',
    amount: 2000,
    date: '2023-06-01',
    paymentMethod: 'Bank Transfer'
  }

  return (
    <div className="container mx-auto p-4 mt-10 mb-20">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Transaction Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            <dt className="font-semibold">Type:</dt>
            <dd>{transaction.type}</dd>
            <dt className="font-semibold">Name:</dt>
            <dd>{transaction.name}</dd>
            <dt className="font-semibold">Amount:</dt>
            <dd>${transaction.amount}</dd>
            <dt className="font-semibold">Date:</dt>
            <dd>{transaction.date}</dd>
            <dt className="font-semibold">Payment Method:</dt>
            <dd>{transaction.paymentMethod}</dd>
          </dl>
        </CardContent>
      </Card>
      <ClientIncomeExpense />
    </div>
  )
}
