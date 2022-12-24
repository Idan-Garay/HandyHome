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
    <div className="avatar-card h-96 w-[300px] relative flex flex-col items-center">
      <div className="rounded-full border bg-white border-highlightColor h-24 w-24 flex-none -mb-10 z-10"></div>
      <div className="px-3 border h-full bg-white border-highlightColor relative flex-auto flex flex-col space-y-5 text-center rounded-lg">
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
            className={`absolute rounded-md top-full right-[2%] ${
              toggleMenu ? "" : "hidden sm:flex"
            }  flex flex-col h-[29vh] w-[270px] bg-secondaryColor sm:relative sm:top-0 sm:bg-transparent sm:h-full sm:w-full sm:flex-row sm:justify-center `}
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
      <main className="h-full pt-20 bg-secondaryColor ">
        <div className="h-screen flex flex-col  ">
          <img
            className="absolute z-0"
            src="/images/hero_bg.svg"
            height="100%"
            width="100%"
          />
          <div className="left h-full absolute z-10 w-9/12 py-2 px-5">
            <h1 className="text-4xl">{Strings.handyHomeJobMarketplace}</h1>
            <div className="space h-2"></div>
            <h3 className="text-2xl">
              Find to employ or post to get employed.
            </h3>
            <div className="space h-5"></div>
            <button className="bg-primaryColor cursor-pointer text-secondaryColor rounded-md py-1 px-3 mr-2">
              Post a job
            </button>
          </div>
          {/* <div className="right w-full h-full absolute z-0 hidden md:block overflow-hidden">
            <img
              className=""
              src="/images/hero_bg.svg"
              height="100%"
              width="100%"
            />
          </div> */}
        </div>
        <div className="h-screen bg-red-100 relative z-50 border"></div>
      </main>
    </div>
  );
}
