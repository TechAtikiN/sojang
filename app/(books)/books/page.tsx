// named imports
import { formatString } from '@/lib/utils'
import { StarIcon } from 'lucide-react'
import { getBooks } from '@/actions/books'
import { Metadata } from 'next'

// default imports
import Image from 'next/image'
import Link from 'next/link'
import Search from './components/search'

// export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sojang | Books',
  description: 'Explore the latest books of the week. We have a collection of books that you can explore and read.',
}

export default async function BooksPage({ searchParams }: { searchParams: { category: string } }) {
  const { category } = searchParams
  const books = await getBooks(category)

  return (
    <div className='h-screen overflow-auto'>
      {/* SEARCH  */}
      <div className='w-full relative h-20 bg-gradient-to-r from-indigo-100 to-violet-200 via-red-100'>
        <Search />
      </div>

      <div className='max-w-screen-7xl mx-auto mt-14'>
        {/* HEADLINE  */}
        <div className='flex flex-col space-y-2 mx-auto justify-center'>
          <h3 className='text-center text-3xl font-bold text-slate-700'>
            Elevate your reading list
          </h3>
          <p className='text-center text-slate-400'>
            Explore this week&apos;s collection of bestseller books from various categories & authors.
          </p>
        </div>

        {/* SEARCH RESULTS LENGTH */}
        <div className='flex justify-start items-center mx-6 text-xl mt-2'>
          <p className='text-slate-600'>
            Found&nbsp;
            <span className='text-slate-700 font-semibold'>
              {books?.length}
            </span>&nbsp;results for&nbsp;{category ? category : 'all categories'}
          </p>
        </div>

        {/* LISTING  */}
        <div className='grid sm:grid-cols-2 sm:gap-7 gap-4 grid-cols-1 m-6'>
          {books && books?.map((book: any, index: number) => (
            <div
              key={index}
              className='sm:p-4 p-2 bg-slate-50/50 border rounded-md hover:shadow-md hover:bg-slate-200/20'
            >
              <div className='grid grid-cols-3 gap-5'>
                {/* book image */}
                <div className='relative h-44 sm:h-56 col-span-1'>
                  <Image
                    alt={book.title}
                    className='object-cover'
                    fill src={book.image ? book.image : '/book-placeholder.jpg'}
                  />
                </div>

                <div className='space-y-1 col-span-2'>
                  {/* book title */}
                  <h3 className='sm:text-xl text-sm font-bold text-slate-700'>{formatString(book.title)}</h3>

                  {/* book description */}
                  <p
                    className='text-xs text-slate-500'
                  >
                    {book.description ? formatString(book.description) : ''}
                  </p>

                  {/* book author */}
                  {/* <p className='text-xs text-slate-600'>{book.author}</p> */}

                  {/* book price */}
                  <p
                    className='text-sm text-slate-600'
                  >
                    <span className='sm:text-xl text-sm font-semibold'>
                      {book.price}
                    </span>&nbsp;원
                  </p>

                  {/* book sales */}
                  <div className='flex space-x-5 items-center mb-3'>
                    <p className='text-sm text-slate-600'>
                      판매지수&nbsp;
                      <span className='text-sm font-semibold'>
                        {book.numOfSales}
                      </span>
                    </p>
                    <div className='flex justify-start items-center space-x-1'>
                      <p className='text-sm text-slate-600'>{book.rating}</p>
                      <StarIcon className='w-4 h-4 text-sky-300 fill-sky-300' />
                    </div>
                  </div>

                  {/* Purchase book */}
                  <div className='py-3'>
                    <Link
                      href={book.bookUrl}
                      target='_blank'
                      className='sm:p-2 px-4 p-1 rounded-sm bg-slate-700 text-white text-center text-sm'
                    >
                      Buy Now
                    </Link>
                  </div>

                  {/* book tags */}
                  <div className='flex flex-wrap justify-start items-center space-x-2 space-y-1'>
                    {book.tags && book.tags.map((tag: string, index: number) => (
                      <span key={index} className='text-[10px] bg-zinc-100 rounded-full px-2 py-1 text-slate-700 border border-neutral-200'>
                        {tag !== '' && tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
