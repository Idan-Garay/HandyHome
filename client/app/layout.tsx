import './globals.css'
import Navbar from './navbar'
import {Montserrat} from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body className='text-primaryColor'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
