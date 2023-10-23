'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import CartIcon from './CartIcon';
import { menuLinks } from '@/data';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = false;

  return (
    <div className='cursor-pointer'>
      {!isOpen ? (
        <Image
          src='/img/open.png'
          width={20}
          height={20}
          alt='open'
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Image
          src='/img/close.png'
          width={20}
          height={20}
          alt='close'
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && (
        <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {menuLinks.map((link) => {
            const { id, title, url } = link;
            return (
              <Link key={id} href={url} onClick={() => setIsOpen(false)}>
                {title}
              </Link>
            );
          })}
          {!user ? (
            <Link href='/login' onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href='/orders' onClick={() => setIsOpen(false)}>
              Orders
            </Link>
          )}
          <CartIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;
