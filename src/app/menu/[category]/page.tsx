import { pizzas } from '@/data';
import ProductCard from '@/components/cards/ProductCard';

interface CategoryProps {
  params: {
    category: string;
  };
}

const Category = ({ params }: CategoryProps) => {
  return (
    <main className='flex flex-wrap text-red-500'>
      {pizzas.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </main>
  );
};

export default Category;
