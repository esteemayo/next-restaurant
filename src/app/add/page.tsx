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
  const [file, setFile] = useState<File>();
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

  const handleChangeImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const item = (target.files as FileList)[0];
      setFile(item);
    },
    [],
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

  const handleClear = useCallback(() => {
    setInputs(initialState);
    setOption(optionInitialState);
  }, []);

  const handleUpload = useCallback(
    async () => {
      const data = new FormData();
      data.set('file', file!);
      data.set('upload_preset', 'restaurant');

      const res = await fetch('https://api.cloudinary.com/v1_1/:learnhowtocode/image/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });

      const resData = await res.json();
      return resData.url;
    },
    [file],
  );
  

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      try {
        const url = await handleUpload();

        const newProduct = {
          ...inputs,
          options,
          img: url,
        };

        const res = await fetch('http://localhost:3000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });

        const data = await res.json();
        handleClear();
        router.push(`/product/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    },
    [handleClear, handleUpload, inputs, options, router]
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    router.push('/');
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='shadow-lg flex flex-wrap gap-4 p-8'
      >
        <h1 className='capitalize'>Add new product</h1>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='file'>Image</label>
          <input
            id='file'
            type='file'
            onChange={handleChangeImage}
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            name='title'
            value={inputs.title}
            onChange={handleChange}
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='desc'>Desc</label>
          <textarea
            id='desc'
            name='desc'
            value={inputs.desc}
            onChange={handleChange}
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200 resize-none'
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='price'>Price</label>
          <input
            id='price'
            type='number'
            name='price'
            value={inputs.price}
            onChange={handleChange}
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='catSlug'>Category</label>
          <input
            type='text'
            id='catSlug'
            name='catSlug'
            value={inputs.catSlug}
            onChange={handleChange}
            className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='options'>Options</label>
          <div>
            <input
              type='text'
              name='title'
              value={option.title}
              placeholder='Title'
              onChange={handleChangeOption}
              className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
            />
            <input
              type='number'
              name='additionalPrice'
              value={option.additionalPrice}
              placeholder='Addtional Price'
              onChange={handleChangeOption}
              className='ring-1 ring-red-200 p-2 rounded-sm outline-red-300 caret-red-200'
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
