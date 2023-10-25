import { FC } from 'react';
import Link from 'next/link';

import { NavItemProps } from '@/types';

const NavItem: FC<NavItemProps> = ({ url, label }) => {
  return (
    <li>
      <Link href={url}>{label}</Link>
    </li>
  );
};

export default NavItem;
