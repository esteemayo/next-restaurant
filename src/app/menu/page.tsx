import { menu } from '@/data';
import Link from 'next/link';

const Menu = () => {
  return (
    <main className='p-4 lg:px-20 xl:p-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((item) => {
        const { id, img, slug, desc, title, color } = item;
        return (
          <Link
            key={id}
            href={`/menu/${encodeURIComponent(slug)}`}
            className='w-full h-1/3 bg-cover p-8 md:h-1/2'
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className={`text-${color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{title}</h1>
              <p className='text-sm my-8'>{desc}</p>
              <button className={`hidden 2xl:block capitalize`}>Explore</button>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Menu;
