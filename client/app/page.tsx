import { Inter } from '@next/font/google'
import Link from 'next/link'
import Hero from './hero'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="h-full bg-secondary">
        <Hero />
        <div className="min-h-[100vh] max-h-[100vh] w-full border bg-white md:bg-secondary flex flex-col items-center py-6 md:py-12  gap-y-8 md:gap-y-12">
          <h2 className='text-3xl font-semibold'>For Employers</h2>
          <div className='flex flex-col gap-5 md:flex-row justify-center'>
            <div className="bg-secondary md:bg-white px-5 pt-5 min-h-[5rem] md:min-h-[12rem] h-[40vh] w-[35vh] md:h-[55vh] md:w-[47vh] lg:w-[50vh] border-highlight border-2 rounded text-center">
              <strong className='block p-5 text-lg'>Browse Services and Portfolios</strong>
              <p className='md:mx-8 text-lg' >Choose people by their creativity and previous projects, not just resumes.</p>
            </div>
            {/* <div className="min-w-[5vh]"></div> */}
            <div className="bg-secondary md:bg-white px-5 pt-5 min-h-[5rem] md:min-h-[12rem] h-[40vh] w-[35vh] md:h-[55vh] md:w-[47vh] lg:w-[50vh] border-highlight border-2 rounded text-center">
              <strong className='block p-5 text-lg'>Get Best Matches for Your Jobs</strong>
              <p className='md:mx-8 text-lg'>Get the best candidates on top of your list of job applications.</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary md:bg-white min-h-[20vh] flex flex-col gap-y-5 justify-center items-center">
          <h1 className='text-lg font-semibold'>Hire talents or get hired for your dream job</h1>
          <div className="flex justify-center items-center gap-3">
            <button className='button min-h-[3rem] min-w-[8rem] rounded bg-primary text-white border hover:bg-black hover:ease-in-out hover:duration-300'>Post a Job</button>
            <p className='font-semibold'>or</p>
            <button className='button min-h-[3rem] min-w-[8rem] rounded bg-white text-primary border hover:bg-primary hover:text-white hover:ease-in-out hover:duration-300'>Hire a Client</button>
          </div>
        </div>

        <div className="min-h-[80vh] w-full border bg-white md:bg-secondary flex flex-col items-center py-6 md:py-12  gap-y-8 md:gap-y-12">
          <h2 className='text-3xl font-semibold'>For Freelancers</h2>
          <div className='bg-white md:bg-secondary flex flex-col gap-5 md:flex-row md:flex-wrap items justify-center'>
            <div className="bg-secondary md:bg-white px-5 pt-5 min-h-[8rem] md:min-h-[12rem] h-[30vh] w-[40vh] md:h-[45vh] md:w-[40vh] border-highlight border-2 rounded text-center">
              <strong className='block p-2 md:p-5 text-lg'>Post Jobs For Free</strong>
              <p className='md:mx-8 text-lg' >Choose people by their creativity and previous projects, not just resumes.</p>
            </div>
            <div className="bg-secondary md:bg-white px-5 py-5 min-h-[5rem] md:min-h-[12rem] h-[25vh] w-[40vh] md:h-[45vh] md:w-[40vh] border-highlight border-2 rounded text-center">
              <strong className='block p-2 md:p-5 text-lg'>Get Best Matches for Your Jobs</strong>
              <p className='md:mx-8 text-lg' >Get the best candidates on top of your list of job applications.</p>
            </div>
            <div className="bg-secondary md:bg-white px-5 py-5 min-h-[5rem] md:min-h-[12rem] h-[25vh] w-[40vh] md:h-[45vh] md:w-[40vh] border-highlight border-2 rounded text-center">
              <strong className='block p-2 md:p-5 text-lg'>Get Discovered For Free</strong>
              <p className='md:mx-8 text-lg' >More exposures means more chance to get employed and noticed by employers.</p>
            </div>
            <div className="bg-secondary md:bg-white px-5 pt-5 min-h-[5rem] md:min-h-[12rem] h-[25vh] w-[40vh] md:h-[45vh] md:w-[40vh] border-highlight border-2 rounded text-center">
              <strong className='block  p-2 md:p-5 text-lg'>Build Credibility as Freelancers</strong>
              <p className='md:mx-8 text-lg' >Get employers to testify you with reviews and stars.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className=' bg-secondary md:bg-white md:min-h-[20vh] flex gap-5 flex-col md:flex-row md:justify-between items-center w-full'>
            
        <Link href="/" className='self-start md:self-center'>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          // priority
          />
        </Link>
        <ul className='self-center h-1/4 w-fit text-lg md:pr-0 top-16 right-[1rem] md:border-none md:rounded-none md:h-auto md:static md:w-[50%] md:flex md:justify-evenly md:place-items-center'>
          <li className='w-fit md:pl-0 pt-2 md:pt-0 after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'><Link href="/jobs">Jobs</Link></li>
          <li className='w-fit md:pl-0 pt-2 md:pt-0 after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'><Link href="/faqs">FAQs</Link></li>
          <li className='w-fit md:pl-0 pt-2 md:pt-0 after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'><Link href="/about">About</Link></li>
        </ul>
        <p className=' self-end mt-[2rem] pr-5 pb-3 md:pr-auto md:pb-auto md:self-center md:mt-0 text-primary text-opacity-50'>© HandyHome, Inc. 2023. We love our users!</p>
      </footer>
    </>
  )
}
