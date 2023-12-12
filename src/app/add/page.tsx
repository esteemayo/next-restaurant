'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddProduct = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status==='loading') {
    return <p>Loading...</p>;
  }

  if (status==='unauthenticated'||!session?.user.isAdmin) {
    router.push('/');
  }

  return (
    <div>
      <form>
        <h1 className='capitalize'>Add new product</h1>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' />
        </div>
        <div>
          <label htmlFor='desc'>DEsc</label>
          <textarea name='desc' />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' />
        </div>
        <div>
          <label htmlFor='category'>Category</label>
          <input type='text' name='category' />
        </div>
        <div>
          <label htmlFor='options'>Options</label>
          <div>
            <input type='text' placeholder='Title' name='title' />
            <input
              type='number'
              placeholder='Addtional Price'
              name='additionalPrice'
            />
            <button className='capitalize'>Add option</button>
          </div>
        </div>
        <div>
          <div>
            <span>Small</span>
            <span>$2</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
