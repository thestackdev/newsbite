import { BASE_URL, API_KEY, SIX_HOURS } from 'utils/constants'
import Card from 'components/Card'

export default async function Page({ searchParams }) {
  let URL = `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}&pageSize=100`

  const query = searchParams.q

  if (query) URL = `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`

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
