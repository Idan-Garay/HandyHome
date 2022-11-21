import Link from "next/link"
import Image from"next/image"


export default function IndexNavbar() {
    return <nav className="b">
        <div className="b">
            <Image alt="logo" width="100%" height="100%"/>
        </div>
        <ul>
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

        <div className="buttons ">
            <button>Sign up</button>
            <button>Login</button>
        </div>
    </nav>
}