"use client";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Strings from "../public/Strings";
// import styles from './page.module.css'

const Logo = () => {
  return <img className="" src="/images/logo.svg" height="100%" />;
};

const AvatarCard = ({ img, title, description }) => {
  return (
    <div className="avatar-card h-3/6 sm:h-96  w-[300px] relative flex flex-col items-center">
      <div className="rounded-full border bg-white border-highlightColor h-24 w-24 flex-none -mb-10 z-10"></div>
      <div className="w-full px-3 border h-full bg-white border-highlightColor relative flex-auto flex flex-col space-y-5 text-center rounded-lg">
        <div className="h-12 spacer"></div>
        <h3 className=" font-semibold">{title}</h3>
        <p className="h-full">{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full h-full">
      <header className="h-20 w-full fixed z-50 bg-white">
        {/* <Navbar />  */}
        <nav className="h-full min-w-full flex  justify-between px-[2%] sm:px-[12%] bg-transparent transition-all  top-0 right-0">
          <div className="flex flex-0 min-w-fit justify-end ">
            <Logo />
          </div>

          <ul
            className={`absolute rounded-md top-full right-[2%] ${toggleMenu ? "" : "hidden sm:flex"
              }  flex flex-col h-[29vh] w-[270px] bg-secondaryColor sm:relative sm:top-0 sm:bg-transparent sm:h-full sm:w-full sm:flex-row sm:justify-center `}
          >
            <li className="p-2 pr-5 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7 rounded-t-md">
              Jobs
            </li>
            <li className="p-2 pr-5 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7">
              FAQs
            </li>
            <li className="p-2 pr-5 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7">
              About
            </li>
          </ul>

          <div className="buttons flex justify-evenly py-5">
            <button className="bg-primaryColor cursor-pointer text-secondaryColor rounded-md py-1 px-3 mr-2">
              Login
            </button>
            <button className="bg-secondaryColor cursor-pointer text-primaryColor rounded-md py-1 px-3 mr-2">
              Signup
            </button>
            <GiHamburgerMenu
              onClick={() => setToggleMenu(!toggleMenu)}
              size="35"
              className="cursor-pointer m-auto block sm:hidden p-1  bg-highlightColor rounded-full"
              color="bg-primaryColor"
            />
          </div>
        </nav>
      </header>
      <main className="h-full  bg-secondaryColor ">
        {/* content 1 */}
        <div className="h-screen">
          <div className="format-spacer h-32" />

          <div className="left h-full absolute z-100 w-9/12 py-2 px-10">
            <h1 className="text-4xl font-bold">{Strings.handyHomeJobMarketplace}</h1>
            <div className="space h-2"></div>
            <h3 className="text-2xl font-extralight">
              Find to employ or post to get employed.
            </h3>
            <div className="space h-10"></div>
            <button className="bg-primaryColor cursor-pointer text-secondaryColor rounded-md py-1 px-3 mr-2">
              Post a job
            </button>
          </div>
          <img
            className="absolute z-0 bottom-0"
            src="/images/hero_bg.svg"
            height="100%"
            width="100%"
          />

        </div>

        {/* content 2 */}
        <div className="h-full sm:h-screen px-4  w-full bg-secondaryColor ">
          <div className="format-spacer h-16 sm:h-24" />
          <h1 className="text-4xl font-bold text-center">{Strings.forEmployers}</h1>
          <div className="format-spacer h-12" />
          <div className="flex flex-col sm:flex-row w-full gap-5 items-center sm:justify-center">
            <AvatarCard title="Browse Services and Portfolios" description="Choose people by their creativity and previous projects, not just resumes." />
            <AvatarCard title="Get Best Matches for Your Jobs" description="Get the best candidates on top of your list of job applciations." />
          </div>
          <div className="format-spacer h-16 sm:h-1/3" />
        </div>

        {/* content 3: strip */}
        <div className="h-40 w-full bg-white flex flex-col justify-center items-center p-3">
          <h2 className="text-2xl font-bold text-center">{Strings.hireTalents}</h2>

          <div className="buttons flex justify-evenly py-3 items-center gap-5">
            <button className="bg-primaryColor cursor-pointer text-secondaryColor rounded-md py-1 px-3 mr-2">
              {Strings.postAJob}
            </button>

            <h2 className="text-xl font-bold text-center mr-2 ">{Strings.or}</h2>

            <button className="bg-white cursor-pointer text-primaryColor border border-primaryColor rounded-md py-1 px-3 mr-2">
              {Strings.hireAClient}
            </button>
          </div>
        </div>

        {/* content 4 */}
        <div className="h-full sm:h-screen px-4  w-full bg-secondaryColor ">
          <div className="format-spacer h-16 sm:h-24" />
          <h1 className="text-4xl font-bold text-center">{Strings.forClients}</h1>
          <div className="format-spacer h-12" />
          <div className="flex flex-col sm:flex-row w-full gap-5 items-center sm:justify-center">
            <AvatarCard title="Post Jobs For Free" description="Choose people by their creativity and previous projects, not just resumes." />
            <AvatarCard title="Get Best Matches for Your Jobs" description="Get the best candidates on top of your list of job applications." />
            <AvatarCard title="Get Exposures For Free" description="More exposures means more chance to get employed and noticed by employers." />
            <AvatarCard title="Build Credibility as Freelancers" description="Get employers to testify you with reviews and stars." />
          </div>
          <div className="format-spacer h-16 sm:h-1/3" />
        </div>
      </main>

      <footer className="h-40 flex flex-col sm:flex-row px-[2%]">
        {/* logo, nav, tagline */}
        <Image src="/images/logo.svg" className="flex-none " height={100} width={100} />
        <ul
          className={`flex-auto w-full  py-5 sm:py-auto rounded-md flex flex-col items-center h-full  sm:relative sm:top-0 sm:bg-transparent sm:w-full sm:flex-row sm:justify-center `}
        >
          <li className="p-2 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7 rounded-t-md">
            Jobs
          </li>
          <li className="p-2 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7">
            FAQs
          </li>
          <li className="p-2 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7">
            About
          </li>
        </ul>
        <div className=" flex-auto flex  sm:w-5/12 justify-center items-center"><p className=" h-fit ">&#169; HandyHome, We love our users!</p></div>
      </footer>
    </div>
  );
}
