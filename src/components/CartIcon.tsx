'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useCartStore } from '@/hooks/useCartStore';

const CartIcon = () => {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <Link href='/cart' className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src='/img/cart.png' fill alt='cart icon' />
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
