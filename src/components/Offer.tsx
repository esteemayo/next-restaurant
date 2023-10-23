import Image from 'next/image';

const Offer = () => {
  return (
    <div className='h-screen w-screen bg-black text-white flex flex-col md:flex-row'>
      <div className='flex-1 flex flex-col items-center justify-center gap-8 text-center p-6'>
        <h1 className='text-inherit text-5xl xl:text-6xl font-bold capitalize'>
          Delicious burger & french fry
        </h1>
        <p className='text-inherit xl:text-xl'>
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <button className=''>Order now</button>
      </div>
      <div className='flex-1 w-full relative'>
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
