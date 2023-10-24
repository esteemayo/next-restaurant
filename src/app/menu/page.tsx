import { menu } from '@/data';
import Link from 'next/link';

const Menu = () => {
  return (
    <main className='p-4 lg:px-20 xl:p-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((item) => {
        const { id, img, slug, desc, title } = item;
        return (
          <Link
            key={id}
            href={slug}
            className='w-full h-1/3 bg-cover'
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className=''>
              <h1>{title}</h1>
              <p>{desc}</p>
              <button className=''>Explore</button>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Menu;
