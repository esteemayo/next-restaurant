import Link from 'next/link';

import { NavItemProps } from '@/types';

const NavItem = ({ url, label }: NavItemProps) => {
  return (
    <li>
      <Link href={url} className='outline-red-100'>{label}</Link>
    </li>
  );
};

export default NavItem;
