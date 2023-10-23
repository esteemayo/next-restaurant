import Image from 'next/image';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      <div className='w-max flex'>
        <div className='w-screen h-[60vh] flex flex-col items-center justify-around'>
          <div className='relative flex-1 w-full p-4'>
            <Image
              src='/img/temporary/p1.png'
              fill
              alt=''
              className='object-contain'
            />
          </div>
          <div className='flex-1'>
            <h1 className=''>title</h1>
            <p>desc</p>
            <span>price</span>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
