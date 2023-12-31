import Image from 'next/image';

import CountDown from './CountDown';

const Offer = () => {
  return (
    <div className='h-screen w-screen bg-black text-white flex flex-col md:flex-row md:justify-between md:bg-[url(/img/offerBg.png)] md:h-[70vh]'>
      <div className='flex-1 flex flex-col items-center justify-center gap-8 text-center p-6'>
        <h1 className='text-inherit text-5xl xl:text-6xl font-bold capitalize'>
          Delicious burger & french fry
        </h1>
        <p className='text-inherit xl:text-xl'>
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className='bg-red-500 text-inherit py-3 px-6 rounded-sm outline-red-400 hover:bg-red-400 transition-all'>
          Order now
        </button>
      </div>
      <div className='flex-1 w-full md:h-full relative'>
        <Image
          src='/img/offerProduct.png'
          fill
          alt='offer product'
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default Offer;
