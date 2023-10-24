import Image from 'next/image';

import { formatCurrency } from '@/utils/formatCurrency';

const Cart = () => {
  return (
    <main className='p-4 lg:p-20 xl:p-40'>
      <div className='relative'>
        <Image src='/img/temporary/p1.png' fill alt='' />
        <div className=''>
          <h1 className=''>sicilian</h1>
          <span className=''>Large</span>
        </div>
        <h2 className=''>{formatCurrency(79.9)}</h2>
        <span>X</span>
      </div>
      <div className=''>
        <div className=''>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>{formatCurrency(81.7)}</span>
        </div>
        <hr className='' />
        <button className='uppercase'>Checkout</button>
      </div>
    </main>
  );
};

export default Cart;
