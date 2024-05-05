// default imports
import Link from 'next/link'
import CategoryItem from './category-item'

type Props = {
  categories: string[]
}

export default function Sidebar({ categories }: Props) {
  return (
    <div className='flex flex-col p-4 sm:h-screen'>
      {/* LOGO */}
      <Link href='/'
        className='font-semibold lowercase text-center font-serif text-3xl text-slate-700'
      >
        Sojang
      </Link>

      {/* CATEGORY LISTING */}
      <div className='mt-8 px-6'>
        <h3 className='font-bold text-xl text-slate-700'>Explore Categories</h3>
        <ul className='flex items-center space-x-6 sm:space-x-0 overflow-x-auto py-2 thin-scrollbar mt-5 md:flex-col space-y-2 sm:h-[480px] overflow-auto thin-scrollbar sm:items-start'>
          {['모두', ...categories].map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </ul>
      </div>

    </div>
  )
}
