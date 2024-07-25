import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { addCommas } from '@/assets/utility/addCommas';
import { currentUser } from '@clerk/nextjs/server';
import getUserBalance from '@/app/actions/getUserBalance';

async function BalanceSection() {
  const user = await currentUser(); // Replace with actual user data
  const userName = user?.firstName || 'User';
  const { balance } = await getUserBalance();// Replace with actual balance

  return (
    <div>
      <h2 className='text-2xl font-bold'>Hello, {userName}</h2>
      {balance && balance < 0 ? (
        <h1 className='lowbalance'> Balance  -   <span className='text-xl font-semibold'>${addCommas(Number(balance?.toFixed(2) ?? 0))}</span></h1>
      ) : ( 
        <h1 className='goobalance'> Balance  -    <span className='text-xl font-semibold text-white'>${addCommas(Number(balance?.toFixed(2) ?? 0))}</span></h1>
      )}
     
      <p>Monitor your income and expenses with our simple and effective tracker. Take charge of your financial health today.</p>
      <Link href="/transactions">
        <Button className='bg-[#2b6372] hover:bg-[#8beca2] hover:ease-in-out  rounded-xl mt-4 text-white'>All Transactions</Button>
      </Link>
    </div>
  );
}

export default BalanceSection;
