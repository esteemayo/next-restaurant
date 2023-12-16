import type { Metadata } from 'next';

import { ProductType } from '@/types';
import ProductCard from '@/components/cards/ProductCard';

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=${category}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }

  const data = await res.json();
  return data;
};

interface CategoryProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryProps): Promise<Metadata> {
  const { category } = params;

  const title = category[0].toUpperCase().concat(category.substring(1));

  return {
    title: `Restaurant | ${title}`,
  };
}

const Category = async ({ params }: CategoryProps) => {
  const pizzas: ProductType = await getData(params.category);

  return (
    <main className='flex flex-wrap text-red-500'>
      {pizzas.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </main>
  );
};

export default Category;
