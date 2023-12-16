import Image from 'next/image';

const NotFound = () => {
  return (
    <main className='p-4 lg:px-20 xl:p-40 h-[80vh]'>
      <div className='w-full h-full flex items-center justify-center'>
        <Image
          src='/img/404.png'
          width={700}
          height={500}
          alt='404'
          className='block object-cover'
        />
      </div>
    </main>
  );
};

export default NotFound;
