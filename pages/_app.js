import 'styles/globals.css'
import { Inter } from '@next/font/google'
import Navbar from 'components/Navbar'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
