import { FC } from 'react';

import ClientOnly from './ClientOnly';
import Footer from './Footer';
import Notification from './Notification';

import { LayoutProps } from '@/types';
import AuthProvider from '@/app/providers/AuthProvider';

import Navbar from './navbar/Navbar';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ClientOnly>
      <AuthProvider>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </ClientOnly>
  );
};

export default Layout;
