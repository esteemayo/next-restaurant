import Image from 'next/image';

import { featuredProducts } from '@/data';
import { formatCurrency } from '@/utils/formatCurrency';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      <div className='w-max flex'>
        {featuredProducts.map((item) => {
          const { id, img, title, desc, price } = item;
          return (
            <div
              key={id}
              className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'
            >
              {img && (
                <div className='relative flex-1 w-full p-4'>
                  <Image src={img} fill alt='' className='object-contain' />
                </div>
              )}
              <div className='flex-1 flex flex-col items-center gap-4'>
                <h1 className='text-xl font-bold uppercase'>{title}</h1>
                <p className='p-4 text-center'>{desc}</p>
                <span className='text-xl font-bold'>
                  {formatCurrency(price)}
                </span>
                <button className='bg-red-500 text-white p-2 rounded-md'>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
