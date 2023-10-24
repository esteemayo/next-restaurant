'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { sliderItems } from '@/data';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const lastIndex = sliderItems.length - 1;

    const interval = setInterval(() => {
      setCurrentSlide((value) => {
        return value === lastIndex ? 0 : value + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50'>
      <div className='flex-1 flex flex-col items-center justify-center gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {sliderItems[currentSlide].title}
        </h1>
        <button className='py-4 px-8 bg-red-500 text-white capitalize rounded-sm'>
          Order now
        </button>
      </div>
      <div className='flex-1 w-full relative'>
        <Image
          src={sliderItems[currentSlide].image}
          fill
          alt='slide'
          className='block object-cover'
        />
      </div>
    </div>
  );
};

export default Slider;
