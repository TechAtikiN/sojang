// named imports
import { MoveUpRight } from 'lucide-react'

// default imports
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='p-5 shadow-sm flex justify-between'>
      <Link href='/'
        className='font-semibold lowercase text-center font-serif text-3xl text-slate-700'
      >
        Sojang
      </Link>
      <Link
        href='/books'
        className='flex space-x-1 justify-center items-center bg-slate-900 p-2 sm:w-40 w-20 text-center rounded-full hover:bg-slate-950 text-white font-semibold sm:text-lg text-sm'
      >
        <span>Explore</span>
        <MoveUpRight className='inline-block w-4 h-4' />
      </Link>
    </nav>
  )
}
