import { Montserrat } from '@next/font/google'
import { Header } from '@/components/Header'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  // To use with tailwind first you declare here and goes to tailwind.config
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} w-fill m-auto px-24`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
