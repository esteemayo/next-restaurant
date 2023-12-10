'use client';

import Image from 'next/image';

import { useCartStore } from '@/hooks/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';

const Cart = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const products = useCartStore((state) => state.products);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40'>
        {products.map((item) => {
          const { id, img, title, price, optionTitle, quantity } = item;
          return (
            <div key={id} className='flex items-center justify-between mb-4'>
              {img && <Image src={img} width={100} height={100} alt={title} />}
              <div className=''>
                <h1 className='uppercase text-xl font-bold'>
                  {title} x{quantity}
                </h1>
                <span className=''>{optionTitle}</span>
              </div>
              <h2 className='font-bold'>{formatCurrency(price)}</h2>
              <span
                className='cursor-pointer'
                onClick={() => removeFromCart(item)}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-20 xl:p-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal ({totalItems} items)</span>
          <span className=''>{formatCurrency(totalPrice)}</span>
        </div>
        <div className='flex justify-between'>
          <span className='capitalize'>Service cost</span>
          <span className=''>{formatCurrency(0.0)}</span>
        </div>
        <div className='flex justify-between'>
          <span className='capitalize'>Delivery cost</span>
          <span className='uppercase text-green-500'>Free</span>
        </div>
        <hr className='my-2' />
        <div className='flex justify-between'>
          <span className='uppercase'>Total(Incl. vat)</span>
          <span className='uppercase font-bold text-inherit'>
            {formatCurrency(totalPrice)}
          </span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-sm w-1/2 uppercase self-end'>
          Checkout
        </button>
      </div>
    </main>
  );
};

export default Cart;
