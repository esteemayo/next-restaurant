'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { OrderType } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const Orders = () => {
  const router = useRouter();

  const queryClient = useQueryClient();
  const { data: session, status } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  const handleUpdate = useCallback(
    (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const status = input.value;

      mutation.mutate({ id, status });
      form.reset();
      toast.success('The order status has been changed!');
    },
    [mutation]
  );

  useEffect(() => {
    error && toast.error(error.message);
  }, [error]);

  if (status === 'unauthenticated') {
    return router.push('/');
  }

  if (isLoading || status === 'loading') return 'Loading';

  return (
    <main className='p-4 lg:p-20 xl:p-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => {
            const { id, createdAt, price, products, status } = item;
            return (
              <tr
                key={id}
                className={`text-sm md:text-base ${
                  status !== 'delivered' && 'bg-red-50'
                }`}
              >
                <td className='hidden md:block py-6 px-1'>{id}</td>
                <td className='py-6 px-1'>
                  {createdAt.toString().slice(0, 10)}
                </td>
                <td className='py-6 px-1'>{formatCurrency(price)}</td>
                <td className='hidden md:block py-6 px-1'>
                  {products.map((item) => {
                    return item.title;
                  })}
                </td>
                {session?.user.isAdmin ? (
                  <td>
                    <form
                      onSubmit={(e) => handleUpdate(e, id)}
                      className='flex items-center justify-center gap-4'
                    >
                      <input
                        type='text'
                        placeholder={status}
                        className='p-2 ring-1 ring-red-100 rounded-sm outline-red-100 caret-red-400'
                      />
                      <button
                        type='submit'
                        className='bg-red-400 p-2 rounded-full outline-red-500 hover:bg-red-500'
                      >
                        <Image
                          src='/img/edit.png'
                          width={20}
                          height={20}
                          alt=''
                        />
                      </button>
                    </form>
                  </td>
                ) : (
                  <td>{status}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Orders;
