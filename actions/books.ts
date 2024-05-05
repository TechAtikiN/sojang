'use server'

// named imports
import { Book, books } from '@/db/schema'
import { arrayContains, like, or } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

// default imports
import db from '@/db/drizzle'

export async function getBooks(category: string) {
  if (category) {
    return await db.select().from(books).where(arrayContains(books.tags, [category]))
  } else {
    return await db.select().from(books)
  }
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
