import Link from 'next/link';
import Image from 'next/image';

const CartIcon = () => {
  return (
    <Link href='/cart'>
      <div className='relative w-8 h-8'>
        <Image src='/img/cart.png' fill alt='cart' />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
