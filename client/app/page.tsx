import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="hero">
        <div className="content">
          <h1>HandyHome: Job Marketplace</h1>
          <p>Find to employ or post to get employed</p>
          <div className="empty_space"/>
          <button className='button '>Post a Job</button>
        </div>

        <div className="hero_icon"></div>
      </div>
    </main>
  )
}
