import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar } from './navbar'
import Home   from './home';
const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
    </main>
  )
}
