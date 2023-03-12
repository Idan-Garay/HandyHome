import { Inter } from '@next/font/google'
import Hero from './hero'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-full bg-secondary">
      <Hero/>
      <div className="min-h-[100vh] max-h-[100vh] w-full border bg-white md:bg-secondary flex flex-col items-center py-6 md:py-12  gap-y-8 md:gap-y-12">
        <h2 className='text-3xl font-semibold'>For Employers</h2>
        <div className='flex flex-col gap-5 md:flex-row justify-center'>
          <div className="bg-secondary md:bg-white px-5 pt-5 min-h-[5rem] md:min-h-[12rem] h-[40vh] w-[35vh] md:h-[55vh] md:w-[50vh] border-highlight border-2 rounded text-center">
            <strong className='block p-5 text-lg'>Browse Services and Portfolios</strong>
            <p className='md:mx-8 text-lg' >Choose people by their creativity and previous projects, not just resumes.</p>
          </div>
          {/* <div className="min-w-[5vh]"></div> */}
          <div className="bg-secondary md:bg-white px-5 pt-5 min-h-[5rem] md:min-h-[12rem] h-[40vh] w-[35vh] md:h-[55vh] md:w-[50vh] border-highlight border-2 rounded text-center">
            <strong className='block p-5 text-lg'>Get Best Matches for Your Jobs</strong>
            <p className='md:mx-8 text-lg'>Get the best candidates on top of your list of job applications.</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary md:bg-white min-h-[10rem] flex flex-col gap-y-5 justify-center items-center">
        <h1 className='text-lg font-semibold'>Hire talents or get hired for your dream job</h1>
        <div className="flex justify-center items-center gap-3">
          <button className='button min-h-[3rem] min-w-[8rem] rounded bg-primary text-white border hover:bg-black hover:ease-in-out hover:duration-300'>Post a Job</button>
          <p className='font-semibold'>or</p>
          <button className='button min-h-[3rem] min-w-[8rem] rounded bg-white text-primary border hover:bg-primary hover:text-white hover:ease-in-out hover:duration-300'>Hire a Client</button>
        </div>
      </div>
    </main>
  )
}
