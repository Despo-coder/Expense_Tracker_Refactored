import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { addCommas } from '@/assets/utility/addCommas';

function BalanceSection() {
  const userName = "John Doe"; // Replace with actual user data
  const balance = 5000; // Replace with actual balance

  return (
    <div >
      <h2 className='text-2xl font-bold'>Hello, {userName}</h2>
      {balance && balance < 0 ? ( 
      <h1 className='lowbalance'>${addCommas(Number(balance?.toFixed(2) ?? 0))}.00  Balance</h1>) : ( 
        <h1 className='goobalance'>${addCommas(Number(balance?.toFixed(2) ?? 0))}.00 Balance</h1>)}
     
      <p >Monitor your income and expenses with our simple and effective tracker. Take charge of your financial health today.</p>
      <Link href="/transactions">
        <Button className='bg-[#91e5a5] hover:bg-[#8beca2] hover:ease-in-out  rounded-xl mt-4'>All Transactions</Button>
      </Link>
    </div>
  );
}

export default BalanceSection;
