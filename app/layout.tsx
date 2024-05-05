// type imports
import type { Metadata } from 'next'

import { Nunito } from 'next/font/google'

import './globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sojang',
  description: 'Books that impact',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
