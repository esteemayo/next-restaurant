import Image from 'next/image';

import { formatCurrency } from '@/utils/formatCurrency';

const Cart = () => {
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40'>
        <div className='flex items-center justify-between mb-4'>
          <Image src='/img/temporary/p1.png' width={100} height={100} alt='' />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>{formatCurrency(79.9)}</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src='/img/temporary/p1.png' width={100} height={100} alt='' />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>{formatCurrency(79.9)}</h2>
          <span className='cursor-pointer'>X</span>
        </div>
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
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-20 xl:p-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>{formatCurrency(81.7)}</span>
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
            {formatCurrency(81.7)}
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
