'use server'

// named imports
import { Book, books } from '@/db/schema'
import { like, or } from 'drizzle-orm'

// default imports
import db from '@/db/drizzle'
import { revalidatePath } from 'next/cache'

export async function getBooks(category?: string) {
  let booksData

  if (category !== undefined && category !== ('all' || '모두')) {
    const booksDetails = await db.select().from(books)

    // filter books by category
    booksData = booksDetails.filter((book: Book) => {
      if (book.tags && book.tags.includes(category)) {
        return book
      }
    })

  } else {
    booksData = await db.select().from(books)
  }

  if(!booksData) return null

  revalidatePath('/books')
  return booksData
}

export async function getBooksByTitleAuthor(search: string) {
  const filteredBooks = await db.select({
    id: books.id,
    title: books.title,
    imageSrc: books.image,
    author: books.author,
    bookUrl: books.bookUrl
  }).from(books).where(
    or(
      like(books.title, `%${search}%`),
      like(books.author, `%${search}%`)
    )
  )
  return filteredBooks
}

export async function getBookCategories() {
  let categories = await db.select({
    category: books.tags
  }).from(books)

  if(!categories) return null

  const categoriesArr = Array.from(categories).map((category) => {
    if (category.category && category.category.length > 0) {
      return category.category
    }
  }).flat().filter((category) => category !== null)

  const distinctCategories = Array.from(new Set(categoriesArr))

  return distinctCategories
}
