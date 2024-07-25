import Hero from "@/components/Hero";
import TransactionForm from "@/components/AddTransactions";
import { currentUser } from "@clerk/nextjs/server"
import Guest from "@/components/Guest";
import TransactionList from "@/components/TransactionList";



export default async function Home({ searchParams }: { searchParams: { page?: string } }) {
 const user = await currentUser()

 if (!user) {
   return <Guest />
 }
 return (
  <main> 
     <Hero />
     <TransactionForm />
     {/* <Charts /> */}
     <TransactionList searchParams={searchParams} />
  </main>
 );
}
