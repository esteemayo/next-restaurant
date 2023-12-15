import { HeadingProps } from '@/types';

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className=''>
      <h1 className=''>{title}</h1>
      <h2 className=''>{subtitle}</h2>
    </div>
  );
};

export default Heading;
