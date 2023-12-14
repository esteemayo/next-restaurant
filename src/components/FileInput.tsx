import Image from 'next/image';

import { FileInputProps } from '@/types';

const FileInput = ({ id, icon, label, ...rest }: FileInputProps) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='text-sm cursor-pointer flex gap-4 items-center'
      >
        <Image src={icon} width={30} height={20} alt='file icon' />
        <span className='capitalize'>{label}</span>
      </label>
      <input {...rest} id={id} type='file' className='hidden' />
    </div>
  );
};

export default FileInput;
