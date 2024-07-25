import { SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import Image from 'next/image';

const Guest = () => {
  return (
    <div className='relative h-screen flex items-center justify-center'>
      <Image
        src="/finance.jpg"
        alt="Welcome Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 text-center text-white'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Expense Tracker</h1>
        <p className='text-xl mb-8 max-w-2xl mx-auto'>Take control of your finances with ease. With growing Global uncertainty, its even more important to be aware of your finances. Sign up now and use the free tracking tool</p>
        <Button className='bg-black hover:bg-slate-900 border-0 mr-5 p-4 text-white rounded-xl'>
          <SignInButton />
        </Button>
      </div>
    </div>
  );
};

export default Guest;
