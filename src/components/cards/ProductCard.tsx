import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

import { ProductCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const ProductCard: FC<ProductCardProps> = ({ id, img, price, title }) => {
  return (
    <Link
      href={`/product/${encodeURIComponent(id)}`}
      className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 md:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50'
    >
      {img && (
        <div className='relative h-[80%]'>
          <Image src={img} fill alt='image' className='object-contain' />
        </div>
      )}
      <div className='flex items-center justify-between font-bold'>
        <h1 className='text-2xl uppercase p-2'>{title}</h1>
        <h2 className='group-hover:hidden text-xl'>{formatCurrency(price)}</h2>
        <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-sm hover:bg-red-400 transition-all'>
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
