'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { PriceProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const Price: FC<PriceProps> = ({ id, price, options }) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const handleIncrement = useCallback(() => {
    setQuantity((value) => {
      if (value < 9) {
        return value + 1;
      }
      return value;
    });
  }, []);

  const handleDecrement = useCallback(() => {
    setQuantity((value) => {
      if (value > 1) {
        return value - 1;
      }
      return value;
    });
  }, []);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [options, price, quantity, selected]);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>
        {formatCurrency(parseFloat(total.toFixed(2)))}
      </h2>
      <div className='flex items-center gap-4'>
        {options?.map((option, index) => {
          const { title } = option;
          return (
            <button
              key={title}
              onClick={() => setSelected(index)}
              className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-sm outline-red-400'
              style={{
                backgroundColor:
                  selected === index ? 'rgb(248 113 113)' : '#fff',
                color: selected === index ? '#fff' : 'rgb(248 113 113)',
              }}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex items-center gap-4'>
            <button onClick={handleDecrement} className='outline-red-400'>
              {'<'}
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} className='outline-red-400'>
              {'>'}
            </button>
          </div>
        </div>
        <button className='w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500 outline-red-400 rounded-sm hover:bg-red-400 transition-all'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
