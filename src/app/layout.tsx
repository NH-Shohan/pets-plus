import Navbar from '@/components/layout/Navbar';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin'],
  weight: ['300', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pets&Plus',
  description: "Pets&Plus - Your pet's happiness starts here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${beVietnamPro.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
