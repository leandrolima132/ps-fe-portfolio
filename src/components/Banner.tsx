'use client'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export const Banner = () => {
  return (
    <section
      id="home"
      className="flex min-h-[40vh] items-center lg:min-h-[78vh]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div
            data-aos="fade-right"
            className="flex-1 text-center font-alt lg:text-left"
          >
            <h1 className="text-[36px] font-bold leading-[1]">
              Leandro <span className="text-gray-200">Ferreira</span>
            </h1>
            <div className="mb-6 text-[32px] font-semibold uppercase leading-[1] lg:text-[60px]">
              <span className="mr-4 text-white">Developer</span>
              <TypeAnimation
                cursor={true}
                sequence={['FullStack', 2000, '', 2000]}
                speed={10}
                className="text-purple-500"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="mx-auto flex max-w-max gap-x-6 text-[20px] lg:mx-0">
              <a href="https://github.com/leandrolima132">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/leandro-ferreira-6bb23b1a2/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/__leandrolima/">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="hidden max-w-[320px] flex-1 lg:flex lg:max-w-[482px]">
            <Image src="/background.svg" width={500} height={400} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
