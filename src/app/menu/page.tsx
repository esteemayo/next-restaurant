import Link from 'next/link';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  const data = await res.json();
  return data;
};

const Menu = async () => {
  const menu = await getData();

  return (
    <main className='p-4 lg:px-20 xl:p-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((item) => {
        const { id, img, slug, desc, title, color } = item;
        return (
          <Link
            key={id}
            href={`/menu/${encodeURIComponent(slug)}`}
            className='w-full h-1/3 bg-cover p-8 md:h-[1/2] xl:h-[100%] outline-none'
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className={`text-${color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{title}</h1>
              <p className='text-sm my-8'>{desc}</p>
              <button
                className={`hidden 2xl:block capitalize py-2 px-4 bg-${color} text-${
                  color === 'black' ? 'white' : 'red-500'
                } rounded-sm outline-${
                  color === 'black' ? 'white' : 'red-400'
                }`}
              >
                Explore
              </button>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Menu;
