'use client';

import { FC } from 'react';

import { PriceProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const Price: FC<PriceProps> = ({ id, price, options }) => {
  return (
    <div className=''>
      <h2 className=''>{formatCurrency(parseFloat(price.toFixed(2)))}</h2>
      <div className=''>
        {options?.map((option) => {
          const { title, additionalPrice } = option;
          return (
            <button key={title} className=''>
              {title}
            </button>
          );
        })}
      </div>
      <div className=''></div>
    </div>
  );
};

export default Price;
