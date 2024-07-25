import React from 'react';
import Link from 'next/link';
import BalanceSection from './Balance';
import IncomeExpenseSection from './Income';

function Hero() {
  return (
    <div className="hero">
      <div className="container mt-2 ">
        {/* <h1>Expense Tracker</h1> */}
        {/* Two column grid */}
        <div className="grid grid-cols items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <BalanceSection />
        <IncomeExpenseSection />

        </div>
       
      </div>
    </div>
  );
}

export default Hero;
