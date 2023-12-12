'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Success = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const payment_intent = searchParams.get('payment_intent');

  useEffect(() => {
    (async () => {
      try {
        await fetch(
          `http://localhost:3000/api/confirm/${payment_intent}`,
          {
            method: 'PATCH',
          }
        );

        router.push('/orders');
      } catch (err) {
        console.log(err);
      }
    })();
  }, [payment_intent, router]);

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do not close the page.
    </div>
  );
};

export default Success;
