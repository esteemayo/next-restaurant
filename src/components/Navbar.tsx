import Link from 'next/link';

import Menu from './Menu';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  const user = false;

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
      <ul className='hidden list-none md:flex gap-4 items-center'>
        <li className='flex items-center gap-2 px-1 bg-orange-300 rounded-md cursor-pointer'>
          <Image src='/img/phone.png' width={20} height={20} alt='phone' />
          <span>123 456 78</span>
        </li>
        {!user ? (
          <li>
            <Link href='/'>Login</Link>
          </li>
        ) : (
          <li>
            <Link href='/menu'>Orders</Link>
          </li>
        )}
        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
