import { FC } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
