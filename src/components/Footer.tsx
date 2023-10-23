import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between uppercase'>
      <Link href='/' className='font-bold text-xl'>
        Massimo
      </Link>
      <span>&copy; All rights reserved</span>
    </footer>
  );
};

export default Footer;
