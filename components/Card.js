export default function ({ title, content, urlToImage, url }) {
  return (
    <div className="cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href={url} target="_blank">
        <img className="rounded-t-lg" src={urlToImage} alt="article image" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </div>
  )
}
