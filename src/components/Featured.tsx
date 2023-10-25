import { featuredProducts } from '@/data';
import FeaturedCard from './cards/FeaturedCard';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      <div className='w-max flex'>
        {featuredProducts.map((item) => {
          return <FeaturedCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
