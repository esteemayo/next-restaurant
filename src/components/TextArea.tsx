import { TextAreaProps } from '@/types';

const TextArea = ({ name, label }: TextAreaProps) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label htmlFor={name} className='text-sm'>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className='ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200 resize-none'
      />
    </div>
  );
};

export default TextArea;
