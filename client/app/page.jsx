import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header className='border h-20'>
        <nav className='h-full  flex'>
          <div>photo</div>

          <ul>
            <li>Jobs</li>
            <li>FAQs</li>
            <li>About</li>
          </ul>

          <div className="buttons">
            <button>Login</button>
            <button>Signup</button>
          </div>
        </nav>
      </header>
      <main className='bg-white h-full'>
        <section className='hero h-screen bg-secondaryColor'>here</section>
      </main>
    </>
  )
}
