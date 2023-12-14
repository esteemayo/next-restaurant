'use client';

const Input = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label htmlFor='title' className='text-sm'>
        Title
      </label>
      <input
        id='title'
        type='text'
        name='title'
        className='ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200'
      />
    </div>
  );
};

export default Input;
