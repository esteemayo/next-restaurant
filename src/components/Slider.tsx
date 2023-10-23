import Image from 'next/image';

const Slider = () => {
  return (
    <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      <div className='h-1/2 flex flex-col items-center justify-center gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4'>Texts</h1>
        <button className='py-4 px-8 bg-red-500 text-white capitalize'>
          Order now
        </button>
      </div>
      <div className='w-full h-1/2 relative'>
        <Image
          src='/img/slide1.png'
          fill
          alt='slide'
          className='block object-cover'
        />
      </div>
    </div>
  );
};

export default Slider;
