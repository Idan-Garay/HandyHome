import { Inter } from '@next/font/google'
import Hero from './hero'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-full bg-secondary">
      <Hero/>
    </main>
  )
}
