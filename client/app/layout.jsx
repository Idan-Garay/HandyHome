import './globals.css'
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className} text-black bg-SecondaryColor`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
