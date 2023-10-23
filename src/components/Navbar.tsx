import Link from 'next/link';

import Menu from './Menu';

const Navbar = () => {
  return (
    <nav className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-red-500 uppercase'>
      <div className='text-xl'>
        <Link href='/'>Massimo</Link>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
