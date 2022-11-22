import './globals.css'
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
