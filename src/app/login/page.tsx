'use client';

import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'loading') {
    return <p>loading...</p>;
  }

  if (status==='authenticated') {
    return router.push('/');
  }

  return (
    <main className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-xl rounded-md flex flex-col md:flex-row md:w-full md:h-[70%] lg:w-[70%] 2xl:w-1/2'>
        <div className='relative w-full h-1/3 md:w-1/2 md:h-full'>
          <Image
            src='/img/loginBg.webp'
            fill
            alt=''
            className='block object-cover rounded-l-md'
          />
        </div>
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
      </div>
    </main>
  );
};

export default Login;
