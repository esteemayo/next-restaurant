'use client';

import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { OrderType } from '@/types';
import Image from 'next/image';

const Orders = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) => res.json()),
  });

  const handleUpdate = useCallback(
    (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();
    },
    []
  );

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
              <tr key={id} className='text-sm md:text-base bg-red-50'>
                <td className='hidden md:block py-6 px-1'>{id}</td>
                <td className='py-6 px-1'>
                  {createdAt.toString().slice(0, 10)}
                </td>
                <td className='py-6 px-1'>{price}</td>
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
                        className='p-2 ring-1 ring-red-100 rounded-sm'
                      />
                      <button
                        type='submit'
                        className='bg-red-400 p-2 rounded-full'
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
