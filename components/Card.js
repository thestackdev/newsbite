import { Card } from 'flowbite-react'

export default function ({ title, content, urlToImage, url }) {
  return (
    <div
      onClick={() => {
        window.open(url, '_blank')
      }}
      className="max-w-sm cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-105"
    >
      <Card imgSrc={urlToImage}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </Card>
    </div>
  )
}
