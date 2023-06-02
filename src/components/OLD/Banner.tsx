'use client'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export const BannerOLD = () => {
  return (
    <section id="home" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
          <div
            data-aos="fade-right"
            className="flex-1 py-8 text-center font-alt  lg:text-center"
          >
            <h1 className=" text-4xl font-bold leading-[1]">
              Leandro <span className="text-gray-200">Ferreira</span>
            </h1>
            <div className="mb-6 text-2xl font-semibold uppercase leading-[1] lg:text-5xl">
              <span className="mr-4 text-white">Developer</span>
              <TypeAnimation
                cursor={true}
                sequence={['FullStack', 2000, '', 500]}
                speed={10}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="mx-auto flex max-w-max gap-x-6 text-[20px]">
              <a
                href="https://github.com/leandrolima132"
                target={'_blank'}
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-ferreira-6bb23b1a2/"
                target={'_blank'}
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/__leandrolima/"
                target={'_blank'}
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* <div className="hidden max-w-[320px] flex-1 items-center lg:flex lg:max-w-[482px]">
            <Image src="/banner.png" width={200} height={300} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  )
}
