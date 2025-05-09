import { FC } from 'react';
import { cookies } from 'next/headers';
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

const Layout: FC<Props> = async ({ children }) => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';

  return (
    <html lang="en" data-theme={theme}>
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
