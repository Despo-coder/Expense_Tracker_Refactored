import getTransactions from '@/app/actions/getTransactions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DeleteButton from './DeleteButton'
import TransactionPagination from './TransactionPagination'
import ChartsButton from './ChartsButton';

const ITEMS_PER_PAGE = 4;

const TransactionList = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = parseInt(searchParams.page || '1', 10);
  const { transactions = [], error } = await getTransactions();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedTransactions = transactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  return (
    <>
    <div className='container mt-16 '>
<div className='flex justify-between items-center mb-8'>
<h3 className='text-2xl font-bold'>Transactions</h3>
<ChartsButton />
</div>
  
    
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead className='hidden md:table-cell'>Transaction Type</TableHead>
            <TableHead className='hidden md:table-cell'>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.createdAt.toDateString()}</TableCell>
              <TableCell className='hidden md:table-cell'>{transaction.transactionType}</TableCell>
              <TableCell className='hidden md:table-cell'>{transaction.text}</TableCell>
              <TableCell className={`${transaction.amount < 0 ? 'text-[#FF6384]' : 'text-[#4BC0C0]'}`}>
  ${transaction.amount}
</TableCell>
              <TableCell>
                <Link href={`/transactions/${transaction.id}`}>
                  <Button  className="mr-2">View</Button>
                </Link>
                <DeleteButton id={transaction.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TransactionPagination currentPage={page} totalPages={totalPages} />
      </div>
    </>
  );
};

export default TransactionList;
