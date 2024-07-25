import Hero from "@/components/Hero";
import TransactionForm from "@/components/AddTransactions";
import AllTransactions from "@/components/History";
import TransactionPagination from "@/components/TransactionPagination";
import { currentUser } from "@clerk/nextjs/server"
import Guest from "@/components/Guest";
//import ClientIncomeExpense from "@/components/ClientIncomeExpense";
import Charts from "@/components/Charts";


export default async function Home() {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }
  return (
   <main> 
<Hero />
<TransactionForm />
<Charts />
<AllTransactions />
<TransactionPagination />
   </main>
  );
}
