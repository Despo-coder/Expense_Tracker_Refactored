'use client'

import { Button } from "@/components/ui/button"
import deleteTransaction from '@/app/actions/deleteTransactions'
import { toast } from 'react-toastify'

const DeleteButton = ({ id }: { id: string }) => {
  const handleDelete = async () => {
    //const { message, error } = await deleteTransaction(id)

    if (!confirm('Are you sure you want to delete this transaction?')) {
      return
    }
    const { message, error } = await deleteTransaction(id)
    if (error) {
      toast.error(error)
    } else {
      toast.success(message)
    }
   
    
  }

  return (
    <Button variant="destructive" onClick={handleDelete}>Delete</Button>
  )
}

export default DeleteButton
