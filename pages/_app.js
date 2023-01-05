import 'styles/globals.css'
import { Inter } from '@next/font/google'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Search from 'components/Search'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.className} flex flex-col h-full`}>
      <Navbar />
      <div className="flex flex-col items-center flex-grow mt-8 w-full">
        <Search />
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  )
}

export default MyApp
