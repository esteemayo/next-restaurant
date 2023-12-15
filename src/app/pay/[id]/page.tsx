'use client';

import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';

import { useCartStore } from '@/hooks/useCartStore';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface IParams {
  params: {
    id: string;
  };
}

const Pay = ({ params }: IParams) => {
  const { id } = params;
  const reset = useCartStore((state) => state.reset);

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: 'POST',
          }
        );

        const data = await res.json();
        setClientSecret(data.clientSecret);
        reset();
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [id, reset]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
