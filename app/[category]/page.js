import Card from 'components/Card'
import { notFound } from 'next/navigation'
import { CATEGORIES, SIX_HOURS } from 'utils/constants'

export default async function Category({ params }) {
  const category = params.category

  let URL = `${process.env.BASE_URL}/top-headlines?country=in&apiKey=${process.env.API_KEY}&pageSize=100`
  if (CATEGORIES.includes(category)) URL = URL.concat(`&category=${category}`)
  else notFound()

  const response = await fetch(URL, {
    next: { revalidate: SIX_HOURS },
  })
  const news = await response.json()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 my-4 w-full p-8 max-w-screen-2xl mx-auto">
      {news.articles.map((e, index) => (
        <Card
          key={index}
          title={e.title}
          content={e.content}
          urlToImage={e.urlToImage}
          url={e.url}
        />
      ))}
    </div>
  )
}
