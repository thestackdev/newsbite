import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from 'components/Card'
import SkeletonCard from 'components/SkeletonCard'
import { currentCategory, isFetching, newsResponse } from 'store/news'
import { categories } from 'utils/constants'
import axios from 'axios'

export default function Home() {
  const router = useRouter()
  const category = router.query.category

  useEffect(() => {
    if (categories.indexOf(category) === -1) return
    currentCategory.value = category
    fetchCategory()
  }, [category])

  async function fetchCategory() {
    try {
      isFetching.value = true
      const response = await axios.get(`/api/?category=${category}`)
      newsResponse.value = response.data?.articles
    } catch (error) {
      console.log(error)
    } finally {
      isFetching.value = false
    }
  }

  if (isFetching.value)
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 my-4">
        {Array(8)
          .fill()
          .map((e, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    )

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 my-4">
      {newsResponse.value.map((e, index) => (
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
