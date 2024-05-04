// default imports
import CategoryItem from './category-item'

const categories = ['All', 'Fiction', 'Non-Fiction', 'Science', 'Technology', 'Business', 'Biography', 'Self-Help', 'Health', 'Cooking', 'Travel', 'History', 'Art', 'Religion', 'Philosophy', 'Sports', 'Music']

export default function Sidebar() {
  return (
    <div className='flex flex-col p-4 h-screen'>
      {/* LOGO */}
      <h2
        className='font-semibold lowercase text-center font-serif text-3xl text-slate-700'
      >
        Sojang
      </h2>

      {/* CATEGORY LISTING */}
      <div className='mt-8 px-6'>
        <h3 className='font-bold text-xl text-slate-700'>Explore Categories</h3>
        <ul className='mt-5 flex md:flex-col space-y-2 h-[480px] overflow-auto thin-scrollbar'>
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </ul>
      </div>
    </div>
  )
}
