import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-full bg-secondary">
      <div className="hero border min-w-full flex justify-between min-h-[91.5vh] z-0 relative">
        <div className="absolute content z-20">
          <h1>HandyHome: Job Marketplace</h1>
          <p>Find to employ or post to get employed</p>
          <div className="empty_space"/>
          <button className='button min-h-[3rem] min-w-[8rem] rounded bg-primary text-white border hover:bg-black hover:ease-in-out hover:duration-300'>Post a Job</button>
        </div>
        
        <div className="hidden md:block absolute z-10 hero_icon h-full min-w-full "> 
          <Image src="/air_support.png" className=' h-full w-full max-w-full object-cover object-center' height={720} width={1920} alt="hero_icon"/>
        </div>
      </div>
    </main>
  )
}
