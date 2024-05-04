import Sidebar from './components/sidebar'

type Props = {
  children: React.ReactNode
}

export default function BooksLayout({ children }: Props) {
  return (
    <div className='md:grid md:grid-cols-9 flex flex-col'>
      {/* SIDEBAR  */}
      <aside className='md:col-span-2 bg-zinc-50 h-full'>
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <div className='col-span-7'>
        {children}
      </div>
    </div>
  )
}
