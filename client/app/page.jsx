"use client"
import Image from 'next/image'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Navbar from './Navbar';
// import styles from './page.module.css'

const Logo = () => {
  return <img className="" src="/images/logo.svg" height="100%" />;
}

const AvatarCard = ({ img, title, description }) => {
  return <div className="avatar-card h-96 w-[300px] relative flex flex-col items-center">
    <div className="rounded-full border bg-white border-highlightColor h-24 w-24 flex-none -mb-10 z-10"></div>
    <div className="px-3 border h-full bg-white border-highlightColor relative flex-auto flex flex-col space-y-5 text-center rounded-lg">
      <div className="h-12 spacer"></div>
      <h3 className=' font-semibold'>{title}</h3>
      <p className='h-full'>{description}</p></div>
  </div>
}

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='w-full h-full'>
      <header className='h-20 w-full fixed '>
        {/* <Navbar />  */}
        <nav className='h-full min-w-full flex justify-between px-[2%] sm:px-[12%] bg-transparent transition-all z-50 top-0 right-0'>
          <div className="flex flex-0 min-w-fit justify-end ">
            <Logo /> 
          </div>

          <ul className={`absolute rounded-md top-full right-[2%] flex flex-col h-[29vh] w-[270px] bg-secondaryColor sm:relative sm:top-0 sm:bg-transparent sm:h-full sm:w-full sm:flex-row sm:justify-center `}>
            <li className="py-2 mx-2 sm:mx-4 sm:py-7">Jobs</li>
            <li className="py-2 mx-2 sm:mx-4 sm:py-7">FAQs</li>
            <li className="py-2 mx-2 sm:mx-4 sm:py-7">About</li>
          </ul> 

          <div className="buttons flex justify-evenly py-6">
              <button className='bg-primaryColor text-secondaryColor rounded-md py-1 px-3 mr-2'>Login</button>
              <button className='bg-secondaryColor text-primaryColor rounded-md py-1 px-3'>Signup</button>
              <GiHamburgerMenu size="30" className='m-auto block sm:hidden' color='bg-primaryColor'/>
          </div>
          {/* <div className="block  sm:hidden h-full w-full"/> */}
          {/* <div className={`sm:hidden w-40 h-full py-4 cursor-pointer`} onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu? <AiOutlineClose size="40" className='m-auto' color='bg-primaryColor'/>:<GiHamburgerMenu size="40" className='m-auto ' color='bg-primaryColor'/>}
          </div> */}
        </nav>
      </header>
      {/* <main className='bg-white h-full'>
        <section className='hero h-screen bg-secondaryColor md:bg-[url(/images/hero_bg.svg)] bg-right-bottom bg-cover bg-no-repeat'>
          <div className='flex flex-col w-full md:w-1/2 '>
            <h1>Handyhome: Job Marketplace</h1>
            <h3>Find to hire or post to get hired. </h3>
            <button className='border'>Post a Job </button>
          </div></section>
        <section className='hero h-screen bg-secondaryColor flex flex-col'>
          <h3 className="font-bold">For Employers</h3>
          <div className="h-full flex md:flex-row flex-col flex-wrap md:space-x-5 justify-center items-center ">
            <AvatarCard title="Browse Services and Portfolios" description="Choose people by their creativity and previous projects, not just resumes." />
            <AvatarCard title="Get Best Matches for Your Jobs" description="Get the best candidates on top of your list of job applciations." />
          </div>
        </section>
        <section className='strip h-32 border bg-white flex flex-col items-center justify-center'>
          <h4>Hire talents or get hired for your dream job</h4>
          <div className="flex space-x-5  ">
            <button className='button border'>Post a job</button>
            <p><strong>or</strong></p>
            <button className='button border'>Hire a client</button>
          </div>
        </section>
        <section className='hero h-screen bg-secondaryColor'>
          <h3 className="font-bold">For Employers</h3>
          <div className="h-full flex md:flex-row flex-col flex-wrap md:space-x-5 justify-center items-center ">
            <AvatarCard title="Post Jobs For Free" description="Choose people by their creativity and previous projects, not just resumes." />
            <AvatarCard title="Get Best Matches for Your Jobs" description="Get the best candidates on top of your list of job applciations." />
            <AvatarCard title="Get Exposures For Free" description="More exposures means more chance to get employed and noticed by employers." />
            <AvatarCard title="Build Credibility as Freelancers" description="Get employers to testify you with reviews and stars." />
          </div>
        </section>
      </main>
      <footer className="border h-32">
        <nav className='h-full flex'>
          <div>photo</div>

          <ul>
            <li>Jobs</li>
            <li>FAQs</li>
            <li>About</li>
          </ul>

          <p>© Photo, Inc. 2022. We love our users!</p>
        </nav>
      </footer> */}
    </div>
  )
}