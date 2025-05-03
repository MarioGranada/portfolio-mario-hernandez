import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/src/components/Layout';

export const metadata: Metadata = {
  title: 'Mario Hernandez Portfolio',
  description: 'Get to know Mario Hernandez dev world and projects!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
    </Layout>
  );
}
