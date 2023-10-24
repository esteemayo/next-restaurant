import Link from 'next/link';
import Image from 'next/image';

import { pizzas } from '@/data';

const Category = () => {
  return (
    <main className='flex text-red-500'>
      {pizzas.map((item) => {
        const { id, price, title, desc, img, options } = item;
        return (
          <Link
            key={id}
            href={`/product/${encodeURIComponent(id)}`}
            className='w-full h-[60vh] border-r-2 border-b-2 border-red-500'
          >
            {img && (
              <div className='relative'>
                <Image src={img} fill alt='image' />
              </div>
            )}
          </Link>
        );
      })}
    </main>
  );
};

export default Category;
