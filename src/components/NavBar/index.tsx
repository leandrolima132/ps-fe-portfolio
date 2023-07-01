'use client'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const NavBar = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden px-4 lg:bottom-4">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[66px] w-full max-w-[400px] items-center justify-between rounded-full bg-black/30 px-5 text-2xl text-white/50 backdrop-blur-2xl">
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="works"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
}
