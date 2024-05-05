'use client'

// named imports
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  category: string
}

export default function CategoryItem({ category }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const isActiveCategory = categoryParam ? categoryParam === category : category === '모두'

  const onClick = () => {
    const url = category === '모두' ? '/books' : `/books?category=${category}`
    router.replace(url)
  }

  return (
    <button
      onClick={onClick}
      className={`${isActiveCategory ? 'text-slate-700 font-bold underline' : 'text-slate-400'} sm:text-left text-base whitespace-nowrap sm:text-lg font-semibold hover:text-slate-950 cursor-pointer`}
    >
      {category}
    </button>
  )
}
