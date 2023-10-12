'use client'
import './globals.css'
import React from 'react'
import { Splash } from '@/components/Splash'
import { usePathname } from 'next/navigation'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { Bai_Jamjuree as BaiJamjuree, Poppins } from 'next/font/google'
import { checkIfSplashRendered } from '@/functions/check-if-splash-rendered'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

const metadata = {
  title: 'Leandro Ferreira',
  description: 'Desenvolvedor FullStack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [loading, setLoading] = React.useState(isHome)

  const SplashRendered = checkIfSplashRendered()

  React.useEffect(() => {
    Aos.init({
      duration: 1700,
    })
  }, [])

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${baiJamjuree.variable} ${poppins.variable} font-sans text-gray-100`}
      >
        {/* {loading && isHome && !SplashRendered ? (
          <Splash finishLoading={() => setLoading(false)} />
        ) : ( */}
          <>{children}</>
         {/* )} */}
      </body>
    </html>
  )
}
