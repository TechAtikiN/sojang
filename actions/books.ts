'use server'

import { books } from "@/db/schema"
import { like, or } from "drizzle-orm"
import db from "@/db/drizzle"

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
  console.log(filteredBooks)
  return filteredBooks
}