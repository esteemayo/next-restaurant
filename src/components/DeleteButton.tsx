'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { withSwal } from 'react-sweetalert2';

import { DeleteButtonProps, SwalResult } from '@/types';

const DeleteButton = ({ id, swal }: DeleteButtonProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleDelete = useCallback(async () => {
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
  }, [id, router]);

  const deleteHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#6b7280',
          cancelButtonColor: '#ef4444',
          confirmButtonText: 'Delete',
          reverseButtons: true,
        })
        .then(async (result: SwalResult) => {
          if (result.isConfirmed) {
            await handleDelete();
          }
        });
    },
    [handleDelete, swal]
  );

  if (status === 'loading') {
    return <p>Loading ...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    return;
  }

  return (
    <button
      onClick={deleteHandler}
      className='bg-red-400 p-2 rounded-full outline-red-500 absolute top-4 right-4'
    >
      <Image src='/img/delete.png' width={20} height={20} alt='delete icon' />
    </button>
  );
};

export default withSwal(({ id, swal }: { id: string; swal: any }) => (
  <DeleteButton id={id} swal={swal} />
));
