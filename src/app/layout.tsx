'use client';
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { Splash } from '@/components/splash'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [loading, setLoading] = React.useState(isHome)

  React.useEffect(() => {
    if(loading) return
  }, [loading])

  return (
    <html lang="en">
      <body className={inter.className}>{
        loading && isHome ? <Splash finishLoading={() => setLoading(false)}/> : children
      }</body>
    </html>
  )
}
