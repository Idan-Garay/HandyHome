import Image from 'next/image'
import Link from 'next/link'
// import styles from './page.module.css'

export default function Navbar() {
    return <nav className='flex justify-between px-[2%] w-full'>
        <Link href="/">
            <Image
                // className={styles.logo}
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
            // priority
            />
        </Link>
        <ul className='w-[50%] flex justify-evenly  place-items-center'>
            <li className='after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>Jobs</li>
            <li className='after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>FAQs</li>
            <li className='after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>About</li>
        </ul>

        <div className='flex justify-center place-items-center space-x-1 w-[20%]'>
            <button className='min-h-[3rem] min-w-[2rem]  after:block after:content-[""] after:scale-x-0 after:duration-300 ease-in-out after:border-b-2 after:border-primary after:hover:scale-x-100 after:origin-left cursor-pointer active:cursor-default'>Signup</button>
            <div className="w-5"></div>
            <button className='min-h-[3rem] min-w-[8rem] rounded bg-primary text-white border hover:bg-black hover:ease-in-out hover:duration-300'>Login</button>
        </div>
    </nav>
}