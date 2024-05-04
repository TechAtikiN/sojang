'use client'

// named imports
import { useRouter } from 'next/navigation'

interface Props {
  category: string
}

export default function CategoryItem({ category }: Props) {
  const router = useRouter()

  const onClick = () => {
    const url = category === 'All' ? '/books' : `/books?category=${category.toLowerCase()}`
    router.replace(url)
  }

  return (
    <button
      onClick={onClick}
      className='text-slate-600 text-left rounded-full text-lg font-semibold hover:text-slate-950 cursor-pointer'
    >
      {category}
    </button>
  )
}
