import Link from 'next/link';
import Image from 'next/image';

import { pizzas } from '@/data';
import { formatCurrency } from '@/utils/formatCurrency';

const Category = () => {
  return (
    <main className='flex flex-wrap text-red-500'>
      {pizzas.map((item) => {
        const { id, price, title, desc, img, options } = item;
        return (
          <Link
            key={id}
            href={`/product/${encodeURIComponent(id)}`}
            className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 md:w-1/3 p-4'
          >
            {img && (
              <div className='relative h-[80%]'>
                <Image src={img} fill alt='image' className='object-contain' />
              </div>
            )}
            <div className='flex items-center justify-between'>
              <h1 className=''>{title}</h1>
              <h2 className=''>{formatCurrency(price)}</h2>
              <button className='uppercase bg-red-500 text-white p-2 rounded-sm'>
                Add to cart
              </button>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Category;
