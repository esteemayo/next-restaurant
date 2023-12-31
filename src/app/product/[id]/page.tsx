import Image from 'next/image';
import type { Metadata } from 'next';

import Price from '@/components/Price';
import DeleteButton from '@/components/DeleteButton';

import { SingleProductType } from '@/types';

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed!');
  }

  const data = await res.json();
  return data;
};

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  return {
    title: `Restaurant | ${product.title}`,
  };
};

const Product = async ({ params }: IParams) => {
  const product: SingleProductType = await getData(params.id);

  return (
    <main className='p-4 lg:px-20 xl:p-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative'>
      {product.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={product.img} fill alt='' className='object-contain' />
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>
          {product.title}
        </h1>
        <p className=''>{product.desc}</p>
        <Price product={product} />
      </div>
      <DeleteButton id={product.id} />
    </main>
  );
};

export default Product;
