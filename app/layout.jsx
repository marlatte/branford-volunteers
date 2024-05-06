import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/header/header';
import Footer from './ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Branford Volunteers',
  description: 'Connecting volunteers to opportunity in their community',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex min-h-svh flex-col bg-volunteer-600`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
