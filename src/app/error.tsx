'use client';

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
    <div>
      <Heading title='Uh oh' subtitle='Something went wrong!' center={true} />
    </div>
  );
};

export default ErrorState;
