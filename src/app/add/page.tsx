'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Inputs, NewProduct, Option } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import Input from '@/components/Input';

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

  const handleClear = useCallback(() => {
    setInputs(initialState);
    setOption(optionInitialState);
  }, []);

  const handleUpload = useCallback(async () => {
    const data = new FormData();
    data.set('file', file!);
    data.set('upload_preset', 'restaurant');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/:learnhowtocode/image/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      }
    );

    const resData = await res.json();
    return resData.url;
  }, [file]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newProduct: NewProduct = {
        ...inputs,
        options,
      };

      try {
        if (file) {
          const url = await handleUpload();
          newProduct.img = url;
        }

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
    [file, handleClear, handleUpload, inputs, options, router]
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated' || !session?.user.isAdmin) {
    router.push('/');
  }

  return (
    <div className='p-4 py-[30rem] lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center text-red-500'>
      <form onSubmit={handleSubmit} className='flex flex-wrap gap-6'>
        <h1 className='capitalize text-4xl mb-2 text-gray-300 font-bold'>
          Add new product
        </h1>
        <div className='w-full flex flex-col gap-2'>
          <label
            htmlFor='file'
            className='text-sm cursor-pointer flex gap-4 items-center'
          >
            <Image
              src='/img/upload.png'
              width={30}
              height={20}
              alt='upload icon'
            />
            <span className='capitalize'>Upload image</span>
          </label>
          <input
            id='file'
            type='file'
            onChange={handleChangeImage}
            className='hidden'
          />
        </div>
        <Input
          name='title'
          label='Title'
          value={inputs.title}
          onChange={handleChange}
        />
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='desc' className='text-sm'>
            Description
          </label>
          <textarea
            id='desc'
            name='desc'
            value={inputs.desc}
            onChange={handleChange}
            className='ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200 resize-none'
          />
        </div>
        <Input
          name='price'
          label='Price'
          type='number'
          value={inputs.price}
          onChange={handleChange}
        />
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='catSlug'>Category</label>
          <input
            type='text'
            id='catSlug'
            name='catSlug'
            value={inputs.catSlug}
            onChange={handleChange}
            className='ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200'
          />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor='options' className='text-sm'>
            Options
          </label>
          <div>
            <input
              type='text'
              name='title'
              value={option.title}
              placeholder='Title'
              onChange={handleChangeOption}
              className='w-full md:w-[13rem] ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200'
            />
            <input
              type='number'
              name='additionalPrice'
              value={option.additionalPrice}
              placeholder='Addtional Price'
              onChange={handleChangeOption}
              className='w-full md:w-[13rem] ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200'
            />
          </div>
          <button
            type='button'
            onClick={handleOptions}
            className='capitalize bg-gray-500 p-2 text-white rounded-sm outline-gray-400 hover:bg-gray-400 transition-all'
          >
            Add option
          </button>
        </div>
        <div className='flex flex-wrap gap-4 mt-2'>
          {options.map((item) => {
            const { title, additionalPrice } = item;
            return (
              <div
                key={title}
                onClick={() => handleDeleteOption(title)}
                className='p-2 bg-gray-200 text-gray-400 rounded-md cursor-pointer flex items-center gap-2'
              >
                <span>{title}</span>
                <span className='text-sm'>
                  (+ {formatCurrency(additionalPrice)})
                </span>
              </div>
            );
          })}
        </div>
        <button
          type='submit'
          className='w-full h-14 p-4 bg-red-500 text-white rounded-sm outline-red-400 hover:bg-red-400 transition-all'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
