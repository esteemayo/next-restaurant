import Link from 'next/link';
import Image from 'next/image';

interface CartIconProps {
  quantity: number;
}

const CartIcon = ({ quantity }: CartIconProps) => {
  return (
    <Link href='/cart' className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src='/img/cart.png' fill alt='cart' />
      </div>
      <span>Cart ({quantity})</span>
    </Link>
  );
};

export default CartIcon;
