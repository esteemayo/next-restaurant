'use client';

import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import LoginButtons from '@/components/LoginButtons';

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'loading') {
    return <p>loading...</p>;
  }

  if (status === 'authenticated') {
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
        <LoginButtons />
      </div>
    </main>
  );
};

export default Login;
