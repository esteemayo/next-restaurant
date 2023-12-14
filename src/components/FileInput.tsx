import Image from 'next/image';

const FileInput = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label
        htmlFor='file'
        className='text-sm cursor-pointer flex gap-4 items-center'
      >
        <Image src='/img/upload.png' width={30} height={20} alt='upload icon' />
        <span className='capitalize'>Upload image</span>
      </label>
      <input id='file' type='file' className='hidden' />
    </div>
  );
};

export default FileInput;
