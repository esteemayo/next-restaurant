import ClientOnly from './ClientOnly';
import Footer from './Footer';
import Notification from './Notification';

import AuthProvider from '@/providers/AuthProvider';
import ToastProvider from '@/providers/ToastProvider';
import QueryProvider from '@/providers/QueryProvider';

import Navbar from './navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <AuthProvider>
        <QueryProvider>
          <Notification />
          <Navbar />
          {children}
          <Footer />
          <ToastProvider />
        </QueryProvider>
      </AuthProvider>
    </ClientOnly>
  );
};

export default Layout;
