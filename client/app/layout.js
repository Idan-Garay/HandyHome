import { Montserrat } from "@next/font/google"

const montserrat = Montserrat();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head/>
        
      <body>{children}</body>
    </html>
  )
}


// The app directory must include a root layout.
// The root layout must define <html>, and <body> tags since Next.js does not automatically create them.
// You can use the head.js special file to manage <head> HTML elements that change between route segments. For example, the <title> element.
// You can use route groups to create multiple root layouts. See an example here.
// The root layout is a Server Component by default and can not be set to a Client Component.