import ClientOnly from './ClientOnly';
import Footer from './Footer';
import Notification from './Notification';

import Navbar from './navbar/Navbar';
import AuthProvider from '@/providers/AuthProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
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
