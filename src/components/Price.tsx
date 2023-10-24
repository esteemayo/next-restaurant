'use client';

import { FC, useState } from 'react';

import { PriceProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const Price: FC<PriceProps> = ({ id, price, options }) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

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
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex items-center gap-4'>
            <button>{'<'}</button>
            <span>1</span>
            <button>{'>'}</button>
          </div>
        </div>
        <button className='w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500 outline-red-400 rounded-sm'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
