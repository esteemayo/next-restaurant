import Link from 'next/link';

import Menu from './Menu';

const Navbar = () => {
  return (
    <nav className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-red-500 uppercase'>
      <ul className='hidden list-none md:flex gap-4 items-center'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/menu'>Menu</Link>
        </li>
        <li>
          <Link href='/'>Contact</Link>
        </li>
      </ul>
      <div className='text-xl'>
        <Link href='/'>Massimo</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
