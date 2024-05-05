// default imports
import Link from 'next/link'
import CategoryItem from './category-item'

type Props = {
  categories: string[]
}

export default function Sidebar({ categories }: Props) {
  return (
    <div className='flex flex-col p-4 h-screen'>
      {/* LOGO */}
      <Link href='/'
        className='font-semibold lowercase text-center font-serif text-3xl text-slate-700'
      >
        Sojang
      </Link>

      {/* CATEGORY LISTING */}
      <div className='mt-8 px-6'>
        <h3 className='font-bold text-xl text-slate-700'>Explore Categories</h3>
        <ul className='mt-5 flex md:flex-col space-y-2 h-[480px] overflow-auto thin-scrollbar'>
          {['모두', ...categories].map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </ul>
      </div>
    </div>
  )
}
