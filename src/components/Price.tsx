'use client';

import { FC } from 'react';

import { PriceProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const Price: FC<PriceProps> = ({ id, price, options }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>
        {formatCurrency(parseFloat(price.toFixed(2)))}
      </h2>
      <div className='flex items-center gap-4'>
        {options?.map((option) => {
          const { title, additionalPrice } = option;
          return (
            <button key={title} className='p-2 ring-1 ring-red-400 rounded-sm'>
              {title}
            </button>
          );
        })}
      </div>
      <div className=''>
        <div className=''>
          <span className=''>Quantity</span>
          <div className=''>
            <button className=''>{'<'}</button>
            <span>1</span>
            <button className=''>{'>'}</button>
          </div>
        </div>
        <button className=''>Add to Cart</button>
      </div>
    </div>
  );
};

export default Price;
