import { FC } from 'react';

import ClientOnly from './ClientOnly';
import Footer from './Footer';
import Notification from './Notification';

import Navbar from './navbar/Navbar';
import { LayoutProps } from '@/types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ClientOnly>
      <Notification />
      <Navbar />
      {children}
      <Footer />
    </ClientOnly>
  );
};

export default Layout;
