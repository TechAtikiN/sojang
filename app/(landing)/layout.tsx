import Navbar from './components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-zinc-100 sm:h-screen'>
      <Navbar />
      {children}
    </div>
  );
}
