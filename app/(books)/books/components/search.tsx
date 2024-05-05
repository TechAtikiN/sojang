'use client'

// named imports
import { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

// default imports
import Image from 'next/image'
import Link from 'next/link'
import { getBooksByTitleAuthor } from '@/actions/books'

type SearchItem = {
  id: number
  title: string
  imageSrc: string | null
  author: string | null
  bookUrl: string
}

export default function Search() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState<SearchItem[]>([])

  // fetch books by title or author
  const handleSearch = async (search: string) => {
    setLoading(true)
    const data = await getBooksByTitleAuthor(search)
    setBooks(data)
    setLoading(false)
  }

  // debounce the search function
  const debouncedSearch = debounce(handleSearch, 500)

  // show popover if books are available and search is not empty
  const showPopover = books?.length > 0 && search?.length > 0

  // close popover if clicked outside
  useEffect(() => {
    const closePopover = (e: MouseEvent) => {
      if (!e.composedPath().includes(document?.getElementById('search-parent')!)) {
        setBooks([])
        setSearch('')
      }
    }
    document.addEventListener('click', closePopover)
  }, [])

  return (
    <div
      id='search-parent'
      className='w-1/2'>
      <Popover open={showPopover}>
        <PopoverTrigger asChild>
          <input
            id='search-book'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              debouncedSearch(e.target.value)
            }}
            // focus the input again if showPopover is true
            onBlur={() => showPopover && setTimeout(() => document?.getElementById('search-book')?.focus(), 0)}
            type='text'
            className={`py-3 absolute w-1/2 top-12 left-1/4 px-4 border border-gray-300 rounded-md text-sm focus:outline-none shadow-md ${loading ? 'cursor-wait border-accent animate-pulse' : 'cursor-text'
              }`}
            placeholder={loading ? 'Loading...' : 'Search for books by Title or Author'}
          />
        </PopoverTrigger>

        <PopoverContent
          align='start'
          side='bottom'
          sideOffset={10}
          className='bg-white border h-[240px] thin-scrollbar overflow-y-auto border-gray-300 rounded-xl font-medium text-sm w-fit lg:w-[32rem] shadow'
        >
          {books?.map((book) => (
            <Link
              target='_blank'
              href={`${book?.bookUrl}`}
              key={book?.id} className='flex items-center space-x-3 hover:bg-slate-200/60 p-2 last:rounded-b-xl first:rounded-t-xl'
            >
              {/* <Image height={10} width={10} src={book?.imageSrc} alt={book?.title} className='w-10 h-10 object-cover rounded-md' /> */}
              <div>
                <h3 className='text-sm font-semibold'>{book?.title}</h3>
                {
                  book?.author && (
                    <p className='text-xs text-slate-500'>By&nbsp;<span className='italic font-semibold'>{book?.author}</span></p>
                  )
                }
              </div>
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
