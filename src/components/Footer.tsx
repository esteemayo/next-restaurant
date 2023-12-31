import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between uppercase'>
      <Link href='/' className='font-bold text-xl outline-red-100'>
        Massimo
      </Link>
      <span>&copy; All rights reserved</span>
    </footer>
  );
};

export default Footer;
