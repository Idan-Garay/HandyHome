"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import Strings from "../public/Strings";
// import styles from './page.module.css'
import { Subtitle, Title } from "./components/format";
import Button from "./components/Button";
import { MenuListItemSkin } from "./skins/skins";

const Logo = () => {
  return <img className="" src="/images/logo.svg" height="100%" />;
};

const AvatarCard = ({ img, title, description }) => {
  return (
    <div className="avatar-card h-3/6 sm:h-96  w-[300px] relative flex_col items-center">
      <div className="rounded-full border bg-white border-highlightColor h-24 w-24 flex-none -mb-10 z-10"></div>
      <div className="w-full px-3 border h-full bg-white border-highlightColor relative flex-auto flex_col space-y-5 text-center rounded-lg">
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
        <nav className="h-full min-w-full flex justify-between px-[2%] sm:px-[12%] bg-transparent transition-all  top-0 right-0">
          <div className="flex flex-0 min-w-fit justify-end ">
            <Logo />
          </div>
          <ul
            className={`border-2 sm:border-none border-primaryColor absolute rounded-md top-full right-[2%] ${toggleMenu ? "" : "hidden sm:flex"
              }  flex_col h-[29vh] w-[270px] bg-secondaryColor sm:relative sm:top-0 sm:bg-transparent sm:h-full sm:w-full sm:flex-row sm:justify-center `}
          >
            <MenuListItemSkin otherCssClasses="rounded-t-md sm:rounded-none">
              <Link href="#jobs">Jobs</Link>
            </MenuListItemSkin>
            <MenuListItemSkin><Link href="#faqs">FAQs</Link></MenuListItemSkin>
            <MenuListItemSkin><Link href="#about">About</Link></MenuListItemSkin>
          </ul>

          <div className="buttons flex justify-evenly py-5">
            <Button>Login</Button>
            <Button isPrimary={false}>Signup</Button>
            <GiHamburgerMenu
              onClick={() => setToggleMenu(!toggleMenu)}
              size="35"
              className="cursor-pointer m-auto block sm:hidden p-1  bg-highlightColor rounded-full"
              color="bg-primaryColor"
            />
          </div>
        </nav>
      </header>
      <main className="h-full bg-secondaryColor ">
        {/* content 1 */}
        <div className="h-screen">
          <div className="format-spacer h-32" />

          <div className="left h-full absolute z-100 w-9/12 py-2 px-10">
            <Title align="start">{Strings.handyHomeJobMarketplace}</Title>
            <div className="space h-2"></div>
            <Subtitle>Find to employ or post to get employed.</Subtitle>
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
          <Title>{Strings.forEmployers}</Title>
          <div className="format-spacer h-12" />
          <div className="flex_col sm:flex-row w-full gap-5 items-center sm:justify-center">
            <AvatarCard title="Browse Services and Portfolios" description="Choose people by their creativity and previous projects, not just resumes." />
            <AvatarCard title="Get Best Matches for Your Jobs" description="Get the best candidates on top of your list of job applciations." />
          </div>
          <div className="format-spacer h-16 sm:h-1/3" />
        </div>

        {/* content 3: strip */}
        <div className="h-40 w-full bg-white flex_col justify-center items-center p-3">
          <Subtitle weight="bold">{Strings.hireTalents}</Subtitle>
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
          <Title>{Strings.forClients}</Title>
          <div className="format-spacer h-12" />
          <div className="flex_col sm:flex-row w-full gap-5 items-center sm:justify-center">
            {[
              ['avatar-x1x', 'Post Jobs For Free', 'Choose people by their creativity and previous projects, not just resumes.'],
              ['avatar-x2x', 'Get Best Matches for Your Jobs', 'Get the best candidates on top of your list of job applications.'],
              ['avatar-x3x', 'Get Exposures For Free', 'More exposures means more chance to get employed and noticed by employers.'],
              ['avatar-x4x', 'Build Credibility as Freelancers', 'Get employers to testify you with reviews and stars.'],
            ].map(([key, title, description]) => <AvatarCard key={key} title={title} description={description} />)}
          </div>
          <div className="format-spacer h-16 sm:h-1/3" />
        </div>
      </main>

      <footer className="h-40 flex_col sm:flex-row px-[2%]">
        {/* logo, nav, tagline */}
        <Image src="/images/logo.svg" alt="logo" className="flex-none " height={100} width={100} />
        <ul
          className={`flex-auto w-full  py-5 sm:py-auto rounded-md flex_col items-center h-full  sm:relative sm:top-0 sm:bg-transparent sm:w-full sm:flex-row sm:justify-center `}
        >
          <MenuListItemSkin otherCssClasses=" sm:rounded-none">
            <Link href={`#jobs`}>Jobs</Link>
          </MenuListItemSkin>

          <MenuListItemSkin><Link href={`#faqs`}>FAQs</Link></MenuListItemSkin>
          <MenuListItemSkin><Link href={`#about`}>About</Link></MenuListItemSkin>
        </ul>
        <div className=" flex-auto flex  sm:w-5/12 justify-center items-center"><p className=" h-fit ">&#169; HandyHome, We love our users!</p></div>
      </footer>
    </div>
  );
}
