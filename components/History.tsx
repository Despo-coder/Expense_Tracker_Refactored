// 'use client'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function AllTransactions() {
 
//   const transactions = [
//     { id: 1, type: 'Income', name: 'Salary', amount: 2000, date: '2023-06-01', paymentMethod: 'Bank Transfer' },
//     { id: 2, type: 'Expense', name: 'Rent', amount: 1000, date: '2023-06-02', paymentMethod: 'Credit Card' },
//   ]

//   const handleDelete = (id: number) => {
    
//     console.log(`Delete transaction with id: ${id}`)
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">All Transactions</h1>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Type</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Amount</TableHead>
//             <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {transactions.map((transaction) => (
//             <TableRow key={transaction.id}>
//               <TableCell>{transaction.type}</TableCell>
//               <TableCell>{transaction.name}</TableCell>
//               <TableCell>${transaction.amount}</TableCell>
//               <TableCell className="text-right">
//                 <div className="flex flex-col justify-center sm:justify-center sm:flex sm:flex-row  sm:items-center space-x-2">
//                   <Link href={`/transactions/${transaction.id}`}>
//                     <Button variant="outline" className="">View</Button>
//                   </Link>
//                   <Button variant="destructive" onClick={() => handleDelete(transaction.id)}>Delete</Button>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
   
//     </div>
//   )
// }


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
  } from '@/components/ui/table';
  import Link from 'next/link';
  import posts from '@/data/posts';
  import { Post } from '@/types/posts';
import { Button } from './ui/button';
import { Card } from './ui/card';
  
  interface PostsTableProps {
    limit?: number;
    title?: string;
  }
  
  const PostsTable = ({ limit, title }: PostsTableProps) => {
    // Sort posts in dec order based on date
    const sortedPosts: Post[] = [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  
    // Filter posts to limit
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  
    return (
        <Card className='container mt-10 p-6 shadow-lg border border-gray-200 rounded-lg'>
        <div className="flex items-center justify-between p-6">
          <h3 className='sm:text-2xl text-lg font-semibold'>{title ? title : 'Transaction Details'}</h3>
          <Button className='bg-[#2eec5a] hover:bg-[#41fa6c]  rounded-xl text-white sm:mr-32' size={'sm'}> View Charts</Button>
        </div>
        
        <Table>
          <TableCaption>A list of recent posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className='hidden md:table-cell'>Author</TableHead>
              <TableHead className='hidden md:table-cell'>Author</TableHead>
              <TableHead className='hidden md:table-cell text-right'>
                Date
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell className='hidden md:table-cell'>
                  {post.author}
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {post.author}
                </TableCell>
                <TableCell className='text-right hidden md:table-cell'>
                  {post.date}
                </TableCell>
                <TableCell>
                    <div >
                  <Link href={`/transactions/${post.id}`}>
                    <button className='bg-black text-white font-bold py-1 px-2  mr-2 rounded text-xs mb-2'>
                      View
                    </button>
                  </Link>
                  <Link href={`/transaction/${post.id}`}>
                    <button className='bg-black text-white font-bold py-1 px-2 rounded text-xs'>
                      Delete
                    </button>
                  </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  };
  
  export default PostsTable;