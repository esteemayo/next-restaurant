'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleDelete = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        router.push('/menu');
        toast.success('The product has been deleted!');
      } else {
        const data = await res.json();
        toast.error(data.message);
      }
    },
    [id, router]
  );

  if (status === 'loading') {
    return <p>Loading ...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    return;
  }

  return (
    <button
      onClick={handleDelete}
      className='bg-red-400 p-2 rounded-full absolute top-4 right-4'
    >
      <Image src='/img/delete.png' width={20} height={20} alt='delete icon' />
    </button>
  );
};

export default DeleteButton;
