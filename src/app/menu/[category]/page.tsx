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

const Category = async ({ params }: CategoryProps) => {
  const pizzas = await getData(params.category);

  return (
    <main className='flex flex-wrap text-red-500'>
      {pizzas.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </main>
  );
};

export default Category;
