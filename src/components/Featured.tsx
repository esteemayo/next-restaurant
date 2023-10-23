import Image from 'next/image';

import { formatCurrency } from '@/utils/formatCurrency';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      <div className='w-max flex'>
        <div className='w-screen h-[60vh] flex flex-col items-center justify-around'>
          <div className='relative flex-1 w-full p-4'>
            <Image
              src='/img/temporary/p1.png'
              fill
              alt=''
              className='object-contain'
            />
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-xl font-bold uppercase'>title</h1>
            <p>desc</p>
            <span className='text-xl font-bold'>{formatCurrency(123)}</span>
            <button className='bg-red-500 text-white p-2 rounded-md'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
