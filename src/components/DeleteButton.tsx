'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface DeleteButtonProps {
  id: string
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading ...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    return;
  }

  return (
    <button className='bg-red-400 p-2 rounded-full absolute top-4 right-4'>
      <Image src='/img/delete.png' width={20} height={20} alt='delete icon' />
    </button>
  );
};

export default DeleteButton;
