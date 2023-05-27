import anime from 'animejs'
import React from 'react'
import Lottie from 'react-lottie'
import slashAnimated from './../../public/lottie/splash.json'

interface SplashProps {
  finishLoading: () => void
}

export const Splash = ({ finishLoading }: SplashProps) => {
  const animate = () => {
    anime({
      targets: '#splash',
      //     translateX: [-200, 0],
      //     opacity: [0, 1],
      duration: 1700,
      easing: 'easeInOutQuad',
      //     delay: (el, i) => 400 * 70 * i,
      complete: () => finishLoading(),
    })
  }

  React.useEffect(() => {
    const splashText = document.getElementById('splash')
    splashText?.classList.add('opacity-100')
    animate()
  })

  const lottieConfig = {
    loop: true,
    autoplay: true,
    animationData: slashAnimated,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div
        id="splash"
        className="mr-6 flex flex-shrink-0 items-center text-white opacity-0"
      >
        <Lottie options={lottieConfig} height={200} width={200} />
        {/* <svg
          className="mr-2 h-8 w-8 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">
          Tailwind CSS
        </span> */}
      </div>
    </div>
  )
}
