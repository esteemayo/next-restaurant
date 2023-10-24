import Image from 'next/image';

import Price from '@/components/Price';
import { singleProduct } from '@/data';

const Product = () => {
  return (
    <main className='p-4 lg:px-20 xl:p-40 h-screen flex flex-col justify-around text-red-500 md:flex-row'>
      {singleProduct.img && (
        <div className='relative'>
          <Image src={singleProduct.img} fill alt='' />
        </div>
      )}
      <div className=''>
        <h1 className=''>{singleProduct.title}</h1>
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
