import Hero from "@/components/Hero";
import TransactionForm from "@/components/AddTransactions";
import AllTransactions from "@/components/History";
import TransactionPagination from "@/components/TransactionPagination";

export default function Home() {
  return (
   <main> 
<Hero />
<TransactionForm />
<AllTransactions />
<TransactionPagination />
   </main>
  );
}
