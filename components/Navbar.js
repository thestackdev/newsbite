import { Navbar } from 'flowbite-react'
import { currentCategory } from 'store/news'
import { useRouter } from 'next/router'
import { categories } from 'utils/constants'

export default function () {
  const router = useRouter()

  function handleRouter(e) {
    router.push(e)
  }

  return (
    <Navbar className="w-screen" fluid={false} rounded={false}>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          News Feed
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {categories.map((e, index) => (
          <Navbar.Link key={index} active={currentCategory.value === e}>
            <span
              className="capitalize cursor-pointer"
              onClick={() => handleRouter(`/${e}`)}
            >
              {e}
            </span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
