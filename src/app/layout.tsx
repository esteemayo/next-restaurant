import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import Layout from '@/components/Layout';

import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Best food in town!',
  keywords: 'pizzas, burgers, pastas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} overflow-x-hidden`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
