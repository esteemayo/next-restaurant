import { InputProps } from '@/types';

const Input = ({ name, label, type = 'text', ...rest }: InputProps) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label htmlFor={name} className='text-sm'>
        {label}
      </label>
      <input
        {...rest}
        id={name}
        type={type}
        name={name}
        className='ring-1 ring-red-200 p-2 rounded-sm placeholder:text-red-200 outline-red-300 caret-red-200'
      />
    </div>
  );
};

export default Input;
