'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Transaction } from "@/types/transactions"
import { getTransactionById } from "@/app/actions/getSingleTransaction"

export default function TransactionDetails() {
  const { id } = useParams()
  const [transaction, setTransaction] = useState<Transaction | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTransaction = async () => {
      if (typeof id === 'string') {
        const response = await getTransactionById(id)
        if (response.error) {
          setError(response.error)
        } else if (response.transaction) {
          setTransaction(response.transaction)
        }
      }
    }
    fetchTransaction()
  }, [id])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!transaction) {
    return <div>Loading...</div>
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
            <dd>{transaction.transactionType}</dd>
            <dt className="font-semibold">Name:</dt>
            <dd>{transaction.text}</dd>
            <dt className="font-semibold">Amount:</dt>
            <dd>${transaction.amount}</dd>
            <dt className="font-semibold">Date:</dt>
            <dd>{new Date(transaction.createdAt).toLocaleDateString()}</dd>
            <dt className="font-semibold">Payment Method:</dt>
            <dd>{transaction.paymentType}</dd>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
