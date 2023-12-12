'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Inputs, Option } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const initialState: Inputs = {
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

  const handleOptions = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setOptions((prev) => [...prev, option]);
      setOption(optionInitialState);
    },
    [option]
  );

  const handleDeleteOption = useCallback((title: string) => {
    setOptions((prev) => [...prev].filter((item) => item.title !== title));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    router.push('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='shadow-lg flex flex-wrap gap-4 p-8'>
        <h1 className='capitalize'>Add new product</h1>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='title'>Title</label>
          <input
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            type='text'
            name='title'
            value={inputs.title}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='desc'>Desc</label>
          <textarea
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200 resize-none'
            name='desc'
            value={inputs.desc}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='price'>Price</label>
          <input
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            type='number'
            name='price'
            value={inputs.price}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='category'>Category</label>
          <input
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            type='text'
            name='category'
            value={inputs.catSlug}
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
              value={option.title}
              placeholder='Title'
              onChange={handleChangeOption}
            />
            <input
              className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
              type='number'
              name='additionalPrice'
              value={option.additionalPrice}
              placeholder='Addtional Price'
              onChange={handleChangeOption}
            />
          </div>
          <button
            type='button'
            onClick={handleOptions}
            className='w-52 p-2 bg-red-500 text-white capitalize rounded-sm outline-red-400 hover:bg-red-400 transition-all'
          >
            Add option
          </button>
        </div>
        <div>
          {options.map((item) => {
            const { title, additionalPrice } = item;
            return (
              <div
                key={title}
                onClick={() => handleDeleteOption(title)}
                className='ring-1 p-2 ring-red-500 rounded-md cursor-pointer'
              >
                <span>{title}</span>
                <span>{formatCurrency(additionalPrice)}</span>
              </div>
            );
          })}
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
