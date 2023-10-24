import Image from 'next/image';

import Price from '@/components/Price';
import { singleProduct } from '@/data';

const Product = () => {
  return (
    <main className='p-4 lg:px-20 xl:p-40 h-screen flex flex-col justify-around text-red-500 md:flex-row'>
      {singleProduct.img && (
        <div className='relative w-full h-1/2'>
          <Image
            src={singleProduct.img}
            fill
            alt=''
            className='object-contain'
          />
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
        <p className=''>{singleProduct.desc}</p>
        <Price
          id={singleProduct.id}
          price={singleProduct.price}
          options={singleProduct.options}
        />
      </div>
    </main>
  );
};

export default Product;
