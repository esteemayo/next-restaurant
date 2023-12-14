

const TextArea = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label htmlFor='desc' className='text-sm'>
        Description
      </label>
      <textarea
        id='desc'
        name='desc'
        className='ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200 resize-none'
      />
    </div>
  );
};

export default TextArea;
