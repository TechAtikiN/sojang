// default imports
import Navbar from './components/navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-zinc-100 h-screen'>
      <Navbar />
      {children}
    </div>
  );
}
