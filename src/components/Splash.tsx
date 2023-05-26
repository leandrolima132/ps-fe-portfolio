import anime from 'animejs';
import React from 'react';

interface SplashProps {
  finishLoading: () => void
}

export const Splash = ({finishLoading}: SplashProps) => {

  const animate = () => {
    anime({
      targets: '#splash',
      translateX: [-200, 0],
      opacity: [0, 1],
      duration: 1700,
      easing: 'easeInOutQuad',
      delay: (el, i) => 400 * 70 * i,
      complete: () => finishLoading()
    })
  }

  React.useEffect(() => {
    const splashText = document.getElementById('splash')
    splashText?.classList.add('opacity-100')
    animate() 
  })

  return (
    <div 
      className="h-screen w-screen justify-center items-center flex ">
      <h1 id='splash' className='opacity-0'>React + TypeScript + Webpack</h1>
    </div>
  );
};