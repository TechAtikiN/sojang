// named imports
import { formatString } from '@/lib/utils'
import { StarIcon } from 'lucide-react'
// default imports
import Image from 'next/image'
import Link from 'next/link'
import Search from './components/search'

const books = [
  {
    "title": "4~7세 보고 만지는 수학은 이렇게 가르칩니다",
    "price": "22,500",
    "numOfSales": "162,666",
    "rating": "9.4",
    "image": "https://image.yes24.com/goods/126110769/L",
    "description": "수 감각, 도형 감각, 사고력을 키우는 체계적 유아수학 로드맵",
    "bookUrl": "https://www.yes24.com//Product/Goods/126110769",
    "author": "최경희 저",
    "tags": [
      "#얼리리더",
      "#홈스쿨링",
      "#엄마표학습",
      "#처음시작하는수학",
      "#유아수학",
    ]
  },
  {
    "title": "흔한남매 16",
    "price": "13,050",
    "numOfSales": "228,795",
    "rating": "9.7",
    "image": "https://image.yes24.com/goods/126029503/L",
    "description": "손웅정의 말",
    "bookUrl": "https://www.yes24.com//Product/Goods/126029503",
    "author": "흔한남매 원저/백난도 글/유난희 그림/흔한컴퍼니 감수",
    "tags": [
      "#이달의굿즈",
      "#유튜브크리에이터",
      "#유튜브",
      "#유튜브셀러",
    ]
  },
  {
    "title": "나는 읽고 쓰고 버린다",
    "price": "15,300",
    "numOfSales": "250,455",
    "rating": "9.1",
    "image": "https://image.yes24.com/goods/126010792/L",
    "description": "절대 변하지 않는 것들에 대한 23가지 이야기",
    "bookUrl": "https://www.yes24.com//Product/Goods/126010792",
    "author": "손웅정 저",
    "tags": [
      "#얼리리더",
      "#부자되는법",
      "#부자만들기",
      "#돈좀벌어보자",
      "#돈모으고싶을때",
    ]
  },
  {
    "title": "불변의 법칙",
    "price": "22,500",
    "numOfSales": "515,544",
    "rating": "9.6",
    "image": "https://image.yes24.com/goods/124999476/L",
    "description": "피보다 진하게 살아라",
    "bookUrl": "https://www.yes24.com//Product/Goods/124999476",
    "author": "모건 하우절 저/이수경 역",
    "tags": [
      "#얼리리더",
      "#이달의굿즈",
      "#나를바라보다",
      "#인간관계에대하여",
    ]
  },
  {
    "title": "나를 소모하지 않는 현명한 태도에 관하여",
    "price": "16,020",
    "numOfSales": "346,134",
    "rating": "9.3",
    "image": "https://image.yes24.com/goods/125295101/L",
    "description": "우리의 마음과 행동을 결정하는 두뇌 법칙 25",
    "bookUrl": "https://www.yes24.com//Product/Goods/125295101",
    "author": "마티아스 뇔케 저/이미옥 역",
    "tags": [
      "#올해의책",
      "#성공신화",
      "#성공하고싶다면",
      "#삶이고민될때",
      "#인생지침서",
    ]
  },
  {
    "title": "세이노의 가르침",
    "price": "6,480",
    "numOfSales": "1,569,639",
    "rating": "9.0",
    "image": "https://image.yes24.com/goods/117014613/L",
    "description": "검은 사제들/사바하/파묘",
    "bookUrl": "https://www.yes24.com//Product/Goods/117014613",
    "author": "세이노(SayNo) 저",
    "tags": [
      "#이달의굿즈",
      "#실용심리학",
      "#심리학처방전",
      "#뇌과학",
      "#뇌과학심리학활용",
    ]
  },
  {
    "title": "삶이 흔들릴 때 뇌과학을 읽습니다",
    "price": "16,200",
    "numOfSales": "165,534",
    "rating": "9.8",
    "image": "https://image.yes24.com/goods/125651056/L",
    "description": "인생 후반을 따스하게 감싸줄 햇볕 같은 문장들 65",
    "bookUrl": "https://www.yes24.com//Product/Goods/125651056",
    "author": "이케가야 유지 글/김성기 역",
    "tags": [
      "#오컬트",
      "#각본집",
    ]
  },
  {
    "title": "오컬트 3부작 : 장재현 각본집",
    "price": "44,550",
    "numOfSales": "51,240",
    "rating": "10.0",
    "image": "https://image.yes24.com/goods/126112069/L",
    "description": "할 말은 많지만 쓸 만한 말이 없는 어른들의 숨은 어휘력 찾기",
    "bookUrl": "https://www.yes24.com//Product/Goods/126112069",
    "author": "장재현 저",
    "tags": [
      "#한정판",
      "#내이름은코난탐정이죠",
    ]
  },
  {
    "title": "명탐정 코난 104 특장판",
    "price": "9,000",
    "numOfSales": "51,270",
    "rating": "9.9",
    "image": "https://image.yes24.com/goods/126123023/L",
    "description": "국외독립운동 이야기-러시아, 네덜란드 편",
    "bookUrl": "https://www.yes24.com//Product/Goods/126123023",
    "author": "아오야마 고쇼 글그림",
    "tags": [
      "#분철",
    ]
  },
  {
    "title": "빨모쌤의 라이브 영어회화",
    "price": "19,800",
    "numOfSales": "179,196",
    "rating": "9.6",
    "image": "https://image.yes24.com/goods/125992096/L",
    "description": "마음의 위기를 다스리는 철학 수업",
    "bookUrl": "https://www.yes24.com//Product/Goods/125992096",
    "author": "신용하 저",
    "tags": [
      "#얼리리더",
    ]
  },
  {
    "title": "일류의 조건",
    "price": "17,820",
    "numOfSales": "261,276",
    "rating": "9.8",
    "image": "https://image.yes24.com/goods/125491624/L",
    "description": "당신은 왜 부자가 되지 못했는가",
    "bookUrl": "https://www.yes24.com//Product/Goods/125491624",
    "author": "사이토 다카시 저/정현 역",
    "tags": [
      "#이달의굿즈",
      "#삶의자세",
      "#인생2막대비",
      "#인생후반전",
      "#나이듦",
    ]
  },
  {
    "title": "꽃길이 따로 있나, 내 삶이 꽃인 것을",
    "price": "15,120",
    "numOfSales": "199,296",
    "rating": "9.1",
    "image": "https://image.yes24.com/goods/125576919/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/125576919",
    "author": "오평선 저",
    "tags": [
      "#나를돌아보는시간",
      "#독특한직업",
      "#이동진의올해의책",
      "#크레마클럽에있어요",
    ]
  },
  {
    "title": "나는 메트로폴리탄 미술관의 경비원입니다",
    "price": "15,750",
    "numOfSales": "421,341",
    "rating": "9.9",
    "image": "https://image.yes24.com/goods/123675187/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/123675187",
    "author": "패트릭 브링리 저/김희정, 조현주 역",
    "tags": [
      "#쓰는맛",
    ]
  },
  {
    "title": "하루 한 장 나의 어휘력을 위한 필사 노트",
    "price": "21,420",
    "numOfSales": "123,069",
    "rating": "10.0",
    "image": "https://image.yes24.com/goods/125557465/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/125557465",
    "author": "유선경 저",
    "tags": [
      "#독립운동",
      "#독립운동가",
    ]
  },
  {
    "title": "169층 나무 집",
    "price": "13,500",
    "numOfSales": "58,845",
    "rating": "9.6",
    "image": "https://image.yes24.com/goods/126189777/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/126189777",
    "author": "앤디 그리피스 글/테리 덴톤 그림/신수진 역",
    "tags": [
      "#아포리즘",
      "#팩트폭행인생조언",
      "#나이인문학",
      "#철학자의인생론",
    ]
  },
  {
    "title": "뭉우리돌의 들녘",
    "price": "19,800",
    "numOfSales": "39,702",
    "rating": "8.7",
    "image": "https://image.yes24.com/goods/124515978/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/124515978",
    "author": "김동우 저",
    "tags": [
      "#한능검",
      "#한국사대표강사",
      "#모두의별별한국사",
      "#분철",
    ]
  },
  {
    "title": "마흔에 읽는 쇼펜하우어",
    "price": "15,300",
    "numOfSales": "844,806",
    "rating": "9.8",
    "image": "https://image.yes24.com/goods/122120495/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/122120495",
    "author": "강용수 저",
    "tags": [
      "#한능검",
      "#한국사대표강사",
      "#모두의별별한국사",
      "#분철",
    ]
  },
  {
    "title": "2024 큰별쌤 최태성의 별별한국사 한국사능력검정시험 심화(1,2,3급) 상",
    "price": "14,400",
    "numOfSales": "282,804",
    "rating": "9.9",
    "image": "https://image.yes24.com/goods/123930880/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/123930880",
    "author": "최태성 저",
    "tags": [
      "#내이름은코난탐정이죠",
    ]
  },
  {
    "title": "2024 큰별쌤 최태성의 별별한국사 한국사능력검정시험 심화(1,2,3급) 하",
    "price": "13,950",
    "numOfSales": "270,417",
    "rating": "9.9",
    "image": "https://image.yes24.com/goods/123930891/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/123930891",
    "author": "최태성 저",
    "tags": [
      "#이달의굿즈",
      "#선물하기좋은책",
      "#나를사랑하는나에게",
      "#나를돌아보는시간",
      "#사소한행복",
    ]
  },
  {
    "title": "명탐정 코난 104 일반판",
    "price": "5,400",
    "numOfSales": "32,592",
    "rating": "10.0",
    "image": "https://image.yes24.com/goods/126123006/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/126123006",
    "author": "아오야마 고쇼 글그림",
    "tags": [
      "#북클러버의선택",
      "#2021우량투자서35선",
      "#주식투자입문",
      "#돈며들다",
      "#주식투자",
    ]
  },
  {
    "title": "마이크로 리추얼 : 사소한 것들의 힘",
    "price": "16,200",
    "numOfSales": "61,956",
    "rating": "9.3",
    "image": "https://image.yes24.com/goods/125973831/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/125973831",
    "author": "장재열 저",
    "tags": [
      "#분철",
      "#신유형반영",
      "#연습을실전처럼",
      "#단기간고득점",
      "#너만알려줄게고득점비법",
    ]
  },
  {
    "title": "돈의 심리학 (30만 부 기념 스페셜 에디션)",
    "price": "17,820",
    "numOfSales": "222,768",
    "rating": "9.8",
    "image": "https://image.yes24.com/goods/96547408/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/96547408",
    "author": "모건 하우절 저/이지연 역",
    "tags": [
      "#영화드라마원작",
      "#문학뉴스레터에소개된책",
      "#사랑의의미",
      "#인간이란무엇인가",
      "#부커상후보작",
    ]
  },
  {
    "title": "ETS 토익 정기시험 기출문제집 1000 Vol. 4 RC",
    "price": "17,820",
    "numOfSales": "296,499",
    "rating": "9.6",
    "image": "https://image.yes24.com/goods/124043812/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/124043812",
    "author": "ETS 저"
  },
  {
    "title": "이처럼 사소한 것들",
    "price": "12,420",
    "numOfSales": "287,127",
    "image": "https://image.yes24.com/goods/123400303/L",
    "bookUrl": "https://www.yes24.com//Product/Goods/123400303",
    "author": "클레어 키건 저/홍한별 역"
  }
]

export default async function BooksPage({ searchParams }: { searchParams: { category: string } }) {
  const { category } = searchParams
  // const books = await getBooks(category)

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
        <div className='grid sm:grid-cols-2 gap-7 grid-cols-1 m-6'>
          {books && books?.map((book: any, index: number) => (
            <div
              key={index}
              className='p-4 bg-slate-50/50 border rounded-md hover:shadow-md hover:bg-slate-200/20'
            >
              <div className='grid grid-cols-3 gap-5'>
                {/* book image */}
                <div className='relative h-56 col-span-1'>
                  <Image className='object-cover' fill src={book.image ? book.image : '/book-placeholder.jpg'} alt={book.title} />
                </div>

                <div className='space-y-1 col-span-2'>
                  {/* book title */}
                  <h3 className='text-xl font-bold text-slate-700'>{formatString(book.title)}</h3>

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
                    <span className='text-xl font-semibold'>
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
                      className='p-2 px-4 rounded-sm bg-slate-700 text-white text-center text-sm'
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
