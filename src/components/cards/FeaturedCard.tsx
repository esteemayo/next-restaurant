import { FC } from 'react';
import Image from 'next/image';

import { FeaturedCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const FeaturedCard: FC<FeaturedCardProps> = ({
  id,
  img,
  desc,
  price,
  title,
}) => {
  return (
    <div
      key={id}
      className='w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300'
    >
      {img && (
        <div className='relative flex-1 w-full p-4 hover:rotate-[60deg] transition-all duration-500'>
          <Image src={img} fill alt='' className='object-contain' />
        </div>
      )}
      <div className='flex-1 flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-xl lg:text-2xl 2xl:text-3xl font-bold uppercase'>
          {title}
        </h1>
        <p className='p-4 2xl:p-8 text-center'>{desc}</p>
        <span className='text-xl font-bold'>{formatCurrency(price)}</span>
        <button className='bg-red-500 text-white p-2 rounded-sm outline-red-400 hover:bg-red-400 transition-all'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
