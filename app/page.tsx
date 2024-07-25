import Hero from "@/components/Hero";
import TransactionForm from "@/components/AddTransactions";
import AllTransactions from "@/components/History";
import TransactionPagination from "@/components/TransactionPagination";
import { currentUser } from "@clerk/nextjs/server"
import Guest from "@/components/Guest";


export default async function Home() {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }
  return (
   <main> 
<Hero />
<TransactionForm />
<AllTransactions />
<TransactionPagination />
   </main>
  );
}
