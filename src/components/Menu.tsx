'use client';

import Image from 'next/image';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    </div>
  );
};

export default Menu;
