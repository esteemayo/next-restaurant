import Link from 'next/link';
import Image from 'next/image';

import Menu from '../Menu';
import CartIcon from '../CartIcon';
import NavItem from './NavItem';
import UserLinks from './UserLinks';

import { useCartStore } from '@/hooks/useCartStore';

const Navbar = () => {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <nav className='h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-red-500 uppercase lg:px-20 xl:px-40'>
      <ul className='hidden list-none md:flex gap-4 items-center flex-1'>
        <NavItem url='/' label='Home' />
        <NavItem url='/menu' label='Menu' />
        <NavItem url='/' label='Contact' />
      </ul>
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>Massimo</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      <ul className='hidden list-none md:flex gap-4 items-center justify-end flex-1'>
        <li className='md:absolute top-3 right-2 lg:static flex items-center gap-2 px-1 bg-orange-300 rounded-md cursor-pointer'>
          <Image src='/img/phone.png' width={20} height={20} alt='phone' />
          <span>123 456 78</span>
        </li>
        <UserLinks />
        <li>
          <CartIcon quantity={totalItems} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
