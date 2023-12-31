import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { MobileNav } from '@/components/MobileNav'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-norse bg-neutral-950 text-white'>
        <Navbar/>
        <div className="md:hidden block">
        <MobileNav/>
      </div>
        {children}
        </body>
    </html>
  )
}
