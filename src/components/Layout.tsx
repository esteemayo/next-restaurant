import { FC } from 'react';

import Navbar from './Navbar';
import Notification from './Notification';
import Footer from './Footer';

import { LayoutProps } from '@/types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Notification />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
