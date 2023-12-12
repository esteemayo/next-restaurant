'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Option } from '@/types';

const initialState = {
  title: '',
  desc: '',
  price: 0,
  catSlug: '',
};

const optionInitialState: Option = {
  title: '',
  additionalPrice: 0,
};

const AddProduct = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState(initialState);
  const [options, setOptions] = useState<Array<Option>>([]);
  const [option, setOption] = useState(optionInitialState);

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = input;
      setInputs((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleChangeOption = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setOption((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

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
          <input
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            type='text'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='desc'>Desc</label>
          <textarea
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200 resize-none'
            name='desc'
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='price'>Price</label>
          <input
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            type='number'
            name='price'
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='category'>Category</label>
          <input
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            type='text'
            name='category'
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='options'>Options</label>
          <div>
            <input
              className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
              type='text'
              name='title'
              placeholder='Title'
              onChange={handleChangeOption}
            />
            <input
              className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
              type='number'
              name='additionalPrice'
              placeholder='Addtional Price'
              onChange={handleChangeOption}
            />
            <button className='w-52 p-2 bg-red-500 text-white capitalize rounded-sm outline-red-400 hover:bg-red-400 transition-all'>
              Add option
            </button>
          </div>
        </div>
        <div>
          <div className='ring-1 p-2 ring-red-500 rounded-md cursor-pointer'>
            <span>Small</span>
            <span>$2</span>
          </div>
        </div>
        <button
          type='submit'
          className='w-full p-2 bg-red-500 text-white rounded-sm outline-red-400 hover:bg-red-400 transition-all'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
