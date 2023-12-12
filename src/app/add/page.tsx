'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialState = {
  title: '',
  desc: '',
  price: 0,
  catSlug: '',
};

const optionInitialState = {
  title: '',
  additionalPrice: 0,
};

const AddProduct = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState(initialState);
  const [option, setOption] = useState(optionInitialState);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    router.push('/');
  }

  return (
    <div>
      <form className='shadow-lg flex flex-wrap gap-4 p-8'>
        <h1 className='capitalize'>Add new product</h1>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='title'>Title</label>
          <input className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200' type='text' name='title' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='desc'>Desc</label>
          <textarea className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200' name='desc' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='price'>Price</label>
          <input className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200' type='number' name='price' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='category'>Category</label>
          <input className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200' type='text' name='category' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='options'>Options</label>
          <div>
            <input className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200' type='text' placeholder='Title' name='title' />
            <input className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
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
