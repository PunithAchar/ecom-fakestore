import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/store/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fake Store - Online Shopping Site',
  description: 'Shop Online for Electronics, Fashion, Home & More',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </Providers>
      </body>
    </html>
  );
}