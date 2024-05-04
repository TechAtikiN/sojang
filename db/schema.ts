import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
 

export const books = pgTable(
  'books',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    bookUrl: text('bookUrl').notNull(),
    price: text('price').notNull(),
    numOfSales: text('numOfSales'),
    description: text('description'),
    image: text('image'),
    rating: text('rating'),
    author: text('author'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
    tags: text('tags').array()
  },
  (books) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(books.id),
    }
  }
)

export type Book = InferSelectModel<typeof books>
export type NewBook = InferInsertModel<typeof books>