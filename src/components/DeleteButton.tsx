'use client';

import Image from 'next/image';

const DeleteButton = () => {
  return (
    <button className='bg-red-400 p-2 rounded-full absolute top-4 right-4'>
      <Image src='/img/delete.png' width={20} height={20} alt='delete icon' />
    </button>
  );
};

export default DeleteButton;
