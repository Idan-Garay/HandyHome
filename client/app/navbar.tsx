'use client';

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const checkboxRef = useRef<HTMLInputElement>(null)

    return <nav className='flex justify-between md:justify-between px-[5%] w-full'>
        <Link href="/">
            <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
            // priority
            />
        </Link>


        <div className='flex justify-center place-items-center space-x-1 w-[50%] md:w-[100%]'>
            <input ref={checkboxRef} type="checkbox" id='nav-menu' className={styles.nav_checkbox} defaultChecked={toggle} onChange={() => setToggle(!toggle)} />
            <ul className='hidden absolute h-1/4 w-48 pr-28 md:pr-0 top-16 right-[1rem] border rounded border-primary md:border-none md:rounded-none md:h-auto md:static md:w-[50%] md:flex md:justify-evenly md:place-items-center'>
                <li className='pl-8 md:pl-0 pt-2 md:pt-0 after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>Jobs</li>
                <li className='pl-8 md:pl-0 pt-2 md:pt-0 after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>FAQs</li>
                <li className='pl-8 md:pl-0 pt-2 md:pt-0 after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>About</li>
            </ul>
            <button className='min-h-[3rem] min-w-[4rem] after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>Signup</button>
            <div className="w-5"></div>
            <button className='min-h-[3rem] min-w-[8rem]  rounded bg-primary text-white border hover:bg-black hover:ease-in-out hover:duration-300'>Login</button>
            <div className="md:hidden min-w-[3rem] min-h-[3rem] flex justify-center place-items-center rounded-full">
                <label htmlFor="nav-menu" className={`${styles.nav_menu}`} >
                    <span className={styles.nav_menu_bar}></span>
                    <span className={styles.nav_menu_bar}></span>
                    <span className={styles.nav_menu_bar}></span>
                </label>
            </div>

            {/* <ul className={`${styles.nav_unchecked} absolute h-1/4 w-48 pr-28 top-16 right-[5%] border rounded border-green-900`}>
                <li className="pl-8 pt-2">
                    <a href="#" className={`after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default`}>Jobs</a>
                </li>
                <li className="pl-8 pt-2 ">
                    <a href="#" className={`after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default`}>FAQs</a>
                </li>
                <li className="pl-8 pt-2 ">
                    <a href="#" className={`after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default`}>About</a>
                </li>
            </ul> */}
        </div>
    </nav>
}