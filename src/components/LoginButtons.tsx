'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const LoginButtons = () => {
  return (
    <div className='p-10 flex flex-col gap-8 md:w-1/2'>
      <h1 className='font-bold text-xl 2xl:text-3xl'>Welcome</h1>
      <p className=''>
        Log into your account or create a new one using social buttons
      </p>
      <button
        className='flex items-center gap-4 p-4 ring-1 ring-orange-100 rounded-sm'
        onClick={() => signIn('google')}
      >
        <Image
          src='/img/google.png'
          width={20}
          height={20}
          alt='google'
          className='block object-contain'
        />
        <span className=''>Sign in with Google</span>
      </button>
      <button className='flex items-center gap-4 p-4 ring-1 ring-blue-100 rounded-sm'>
        <Image
          src='/img/facebook.png'
          width={20}
          height={20}
          alt='facebook'
          className='block object-contain'
        />
        <span className=''>Sign in with Facebook</span>
      </button>
      <p className='text-sm'>
        Have a problem?{' '}
        <Link href='/' className='underline underline-offset-2'>
          Contact us
        </Link>
      </p>
    </div>
  );
};

export default LoginButtons;
