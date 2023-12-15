import { HeadingProps } from '@/types';

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={`${center && 'text-center mb-5'}`}>
      <h1 className='font-normal text-2xl text-red-500'>{title}</h1>
      <h2 className='font-light text-lg text-red-500 mt-2'>{subtitle}</h2>
    </div>
  );
};

export default Heading;
