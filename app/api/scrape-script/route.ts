import { books } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import db from '@/db/drizzle'
import * as cheerio from 'cheerio'
import axios from 'axios'

const BASE_URL = 'https://www.yes24.com/'

// type Selectors is an object that conatins the selectors for each data field
interface Selectors {
  title: string
  price: string
  numOfSales: string
  rating: string
  image: string
  description: string
  bookUrl: string
  author: string
  tags: string
}

// transformData function is used to transform the data from the scraped data to the desired format
function transformData(data: {
  title: string[]
  price: string[]
  numOfSales: string[]
  rating: string[]
  image: string[]
  description: string[]
  bookUrl: string[]
  author: string[]
  tags: string[][]
}) {
  const transformedData = data.title.map((_, index) => {
    return {
      title: data.title[index],
      price: data.price[index],
      numOfSales: data.numOfSales[index],
      rating: data.rating[index],
      image: data.image[index],
      description: data.description[index],
      bookUrl: data.bookUrl[index],
      author: data.author[index],
      tags: data.tags[index]
    }
  })

  return transformedData
}

// scrapeData function is used to scrape the data from the provided URL using the provided selectors
async function scrapeData(
  url: string,
  selectors: Selectors
): Promise<
  {
    title: string
    price: string
    numOfSales: string
    rating: string
    image: string
    description: string
    bookUrl: string
    author: string
    tags: string[]
  }[]
> {
  // Fetch the HTML content
  const response = await axios.get(url)

  // Check for successful response
  if (response.status !== 200) {
    throw new Error('Failed to fetch website content')
  }

  // Parse the HTML using Cheerio
  const $ = cheerio.load(response.data)

  // Initialize the data object
  const data: {
    title: string[]
    price: string[]
    numOfSales: string[]
    memberReviews: string[]
    rating: string[]
    image: string[]
    description: string[]
    bookUrl: string[]
    author: string[]
    tags: string[][]
  } = {
    title: [],
    price: [],
    numOfSales: [],
    memberReviews: [],
    rating: [],
    image: [],
    description: [],
    bookUrl: [],
    author: [],
    tags: []
  }

  // Extract data using the provided selectors
  Object.keys(selectors).forEach(key => {
    switch (key) {
      case 'title':
      case 'price':
      case 'description':
      case 'rating':
      case 'author':
        const elements = $(selectors[key])

        elements.each((_, element) => {
          const text = $(element)
            .text()
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .trim()

          data[key].push(text)
        })

        break
      case 'tags':
        const elements_tags = $(selectors[key])

        elements_tags.each((_, element) => {
          const tags = $(element)
            .text()
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .split(' ')
            .map(
            tag => tag.trim()
            )

          data[key].push(tags)
        })

        break
      case 'numOfSales':
        const elements_numOfSales = $(selectors[key])

        elements_numOfSales.each((_, element) => {
          const text = $(element)
            .text()
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .split(' ')[2]
            .trim()

          data[key].push(text)
        })

        break
      case 'bookUrl':
        const elements_bookUrl = $(selectors[key])
        elements_bookUrl.each((_, element) => {
          const bookUrl = $(element).attr('href')

          if (bookUrl) {
            data[key].push(`${BASE_URL}${bookUrl}`)
          }
        })

        break
      case 'image':
        const elements_image = $(selectors[key])

        elements_image.each((_, element) => {
          const image = $(element).find('img').attr('data-original')

          if (image) {
            data[key].push(image)
          }
        })

        break
      default:
        break
    }
  })

  return transformData(data)
}

export async function GET() {
  const targetUrl =
    `${BASE_URL}Product/Category/MonthWeekBestSeller?categoryNumber=001&pageNumber=1&pageSize=24&type=week`

  const productSelectors = {
    title: '.gd_name',
    price: '.info_price .yes_b',
    numOfSales: '.saleNum',
    rating: '.rating_grade .yes_b',
    image: '.img_bdr',
    description: '.gd_nameE',
    bookUrl: '.lnk_img',
    author: '.info_auth',
    tags: '.info_tag'
  }

  // Scrape the data from the target URL using the provided selectors
  const scrapedData = await scrapeData(targetUrl, productSelectors)

  // remove the existing data from the database
  try {
    await db.delete(books)
  } catch (error) {
    return Response.json({ error: "Something went wrong" })
  }

  // insert the scraped data into the database
  try {
    if (scrapedData.length > 0) {
     await db.insert(books).values(scrapedData)
    }
  } catch (error) {
      return Response.json({ error: "Something went wrong" })
  }

  revalidatePath('/books')

  return Response.json({ status: scrapedData})
}

