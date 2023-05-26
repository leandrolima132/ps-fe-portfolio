'use client';
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { Splash } from '@/components/Splash'
import { usePathname } from 'next/navigation'
import Aos from 'aos'
import 'aos/dist/aos.css'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [loading, setLoading] = React.useState(isHome)

  React.useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{
        loading && isHome ? <Splash finishLoading={() => setLoading(false)}/> : children
      }</body>
    </html>
  )
}


