import FeaturedCard from './cards/FeaturedCard';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/products');

  if (!res.ok) {
    throw new Error('Failed');
  }

  const data = await res.json();
  return data;
};

const Featured = async () => {
  const featuredProducts = await getData();
  console.log(featuredProducts);

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
