import Link from 'next/link';
import Image from 'next/image';

import { pizzas } from '@/data';

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
          </Link>
        );
      })}
    </main>
  );
};

export default Category;
