'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import Heading from '@/components/Heading';

interface ErrorStateProps {
  message: Error;
}

const ErrorState = ({ message }: ErrorStateProps) => {
  useEffect(() => {
    console.error(message);
  }, [message]);

  return (
    <div className='p-4 lg:px-20 xl:p-40 h-[80vh] flex flex-col items-center justify-around'>
      <Image
        src='/img/error.png'
        width={500}
        height={500}
        alt='error'
        className='block object-cover'
      />
      <Heading title='Uh oh' subtitle='Something went wrong!' center={true} />
    </div>
  );
};

export default ErrorState;
