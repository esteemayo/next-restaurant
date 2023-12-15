'use client';

import { useEffect } from 'react';

interface ErrorStateProps {
  message: Error;
}

const ErrorState = ({ message }: ErrorStateProps) => {
  useEffect(() => {
    console.error(message);
  }, [message]);

  return <div>ErrorState</div>;
};

export default ErrorState;
