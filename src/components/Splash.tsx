'use client'
import { setStorageItem } from '@/utils/localStorage'
import anime from 'animejs'
import React from 'react'

interface SplashProps {
  finishLoading: () => void
}

export const Splash = ({ finishLoading }: SplashProps) => {
  const animate = () => {
    anime({
      targets: '#splash',
      translateX: [-200, 0],
      opacity: [0, 1],
      duration: 4000,
      easing: 'easeInOutQuad',
      // delay: (el, i) => 400 * 70 * i,
      complete: () => finishLoading(),
    })
  }

  React.useEffect(() => {
    const splashText = document.getElementById('splash')
    splashText?.classList.add('opacity-100')
    animate()
    setStorageItem('splashRendered', true)
  }, [])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div
        id="splash"
        data-aos="fade-right"
        className="mr-6 flex flex-shrink-0 items-center text-white opacity-0"
      >
        <h1 className="font-poppins text-4xl font-bold text-gray-600">
          Bem vindo!!
        </h1>
      </div>
    </div>
  )
}
