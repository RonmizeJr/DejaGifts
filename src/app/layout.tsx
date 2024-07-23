import type { Metadata } from 'next';
import './globals.css';
import { Poppins as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import React from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Dejagifts',
  description:
    'Dejagifts is an ecommerce giftshop where users can purchase a gift for any occasion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
