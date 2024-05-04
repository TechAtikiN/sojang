
import axios from 'axios'
import * as cheerio from 'cheerio'

const BASE_URL = 'https://www.yes24.com/'

interface Selectors {
  title: string
  price: string
  numOfSales: string
  memberReviews: string
  rating: string
  image: string
  description: string
  bookUrl: string
}

function transformData(data: {
  title: string[]
  price: string[]
  numOfSales: string[]
  memberReviews: string[]
  rating: string[]
  image: string[]
  description: string[]
  bookUrl: string[]
}) {
  const transformedData = data.title.map((_, index) => {
    return {
      title: data.title[index],
      price: data.price[index],
      numOfSales: data.numOfSales[index],
      memberReviews: data.memberReviews[index],
      rating: data.rating[index],
      image: data.image[index],
      description: data.description[index],
      bookUrl: data.bookUrl[index]
    }
  })

  return transformedData
}

async function scrapeData(
  url: string,
  selectors: Selectors
): Promise<
  {
    title: string
    price: string
    numOfSales: string
    memberReviews: string
    rating: string
    image: string
    description: string
    bookUrl: string
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

  const data: {
    title: string[]
    price: string[]
    numOfSales: string[]
    memberReviews: string[]
    rating: string[]
    image: string[]
    description: string[]
    bookUrl: string[]
  } = {
    title: [],
    price: [],
    numOfSales: [],
    memberReviews: [],
    rating: [],
    image: [],
    description: [],
    bookUrl: []
  }

  // Extract data using the provided selectors
  Object.keys(selectors).forEach(key => {
    switch (key) {
      case 'title':
      case 'price':
      case 'numOfSales':
      case 'memberReviews':
      case 'description':
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
      case 'bookUrl':
        const elements_bookUrl = $(selectors[key])

        elements_bookUrl.each((_, element) => {
          const bookUrl = $(element).attr('href')

          if (bookUrl) {
            data[key].push(`${BASE_URL}${bookUrl}`)
          }
        })

        break
      case 'rating':
        const elements_rating = $(selectors[key])

        elements_rating.each((_, element) => {
          const text = $(element)
            .text()
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .split('정보 더')[0] // for rating_grade only
            .trim()

          data[key].push(text)
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
    memberReviews: '.rating_rvCount .yes_b',
    rating: '.rating_grade .yes_b',
    image: '.img_bdr',
    description: '.gd_nameE',
    bookUrl: '.lnk_img'
  }

  const scrapedData = await scrapeData(targetUrl, productSelectors)

  return Response.json(scrapedData)
}

