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
        <section className='hero h-screen bg-secondaryColor bg-[url(/images/hero_bg.svg)] bg-right-bottom bg-cover bg-no-repeat'>here</section>
        <section className='hero h-screen bg-white'>For Employers</section>
        <section className='strip h-20 border bg-white flex flex-col'>
          <h4>Hire talents or get hired for your dream job</h4>
          <div className="flex space-x-5  ">
            <button className='button border'>Post a job</button>
            <p><strong>or</strong></p>
            <button className='button border'>Hire a client</button>
          </div>
        </section>
        <section className='hero h-screen bg-secondaryColor'>For Freelancers</section>
      </main>
    </>
  )
}
