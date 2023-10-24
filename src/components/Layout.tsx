import { FC } from 'react';

import Navbar from './Navbar';
import Notification from './Notification';
import Footer from './Footer';

import ClientOnly from './ClientOnly';
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
