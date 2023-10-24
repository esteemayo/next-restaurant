import Image from 'next/image';

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
      </div>
    </main>
  );
};

export default Product;
