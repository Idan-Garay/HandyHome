import Link from "next/link"
import Image from"next/image"

export default function IndexNavbar() {
    return <nav className="b flex justify-evenly h-20 place-items-center">
        <div className="b flex-none w-14 min-h-full">
            <Image alt="logo" width="100%" height="100%"/>
        </div>
        <ul className="flex space-x-32">
            <li>
                <Link href="/jobs">Jobs</Link>
            </li>
            <li>
                <Link href="/faqs">FAQs</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>

        <div className="buttons space-x-5 ">
            <button>Sign up</button>
            <button>Login</button>
        </div>
    </nav>
}