/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface Props {
  title: string
  description: string
  image: string
  imgDirection: 'left' | 'right'
}

export const WorksCard = ({
  title,
  description,
  image,
  imgDirection,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`mb-10 flex flex-1 flex-col-reverse gap-y-12 lg:mb-0 lg:flex-row ${
        imgDirection === 'left' ? 'lg:flex-row-reverse ' : ''
      }`}
    >
      {/* text */}
      <div
        className={`
        flex h-full w-full flex-col justify-center lg:mt-8 ${
          imgDirection === 'left' ? 'lg:pl-20' : 'lg:pr-20'
        }
      `}
      >
        <h2 className="font-alt leading-tight text-purple-500">{title}</h2>
        <p className="mb-16 max-w-sm ">{description}</p>
      </div>
      {/* image */}
      <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
        {/* overlay  */}
        <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
        {/* img */}
        <img
          className="transition-all duration-500 group-hover:scale-125"
          src={image}
          alt=""
        />
        {/* prettier */}
        {/* <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
          <span className="text-gradient">Develop</span>
        </div> */}
        {/* title */}
        {/* <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
          <span className="text-3xl text-white">Project Name</span>
        </div> */}
      </div>
    </div>
  )
}
