import { useEffect } from 'react'
import { useRouter } from 'next/router'
import SkeletonCard from 'components/SkeletonCard'
import { currentCategory } from 'store/news'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/general')
    currentCategory.value = 'general'
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 my-4">
      {Array(8)
        .fill()
        .map((e, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  )
}
