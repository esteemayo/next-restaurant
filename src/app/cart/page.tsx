import Image from 'next/image';

import { formatCurrency } from '@/utils/formatCurrency';

const Cart = () => {
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500'>
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll'>
        <div className='flex items-center justify-between mb-4'>
          <Image src='/img/temporary/p1.png' width={100} height={100} alt='' />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>{formatCurrency(79.9)}</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      <div className='h-1/2 p-4 bg-fuchsia-50'>
        <div className=''>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>{formatCurrency(81.7)}</span>
        </div>
        <hr className='' />
        <button className='bg-red-500 text-white p-3 rounded-sm w-1/2 uppercase'>
          Checkout
        </button>
      </div>
    </main>
  );
};

export default Cart;
