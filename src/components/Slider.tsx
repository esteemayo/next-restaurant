import Image from 'next/image';

const Slider = () => {
  return (
    <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      <div className='h-1/2'>
        <h1 className=''>Texts</h1>
        <button className=''>Order now</button>
      </div>
      <div className='w-full h-1/2 relative'>
        <Image
          src='/img/slide1.png'
          fill
          alt='slide'
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Slider;
