'use client'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[76px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/30 px-5 text-2xl text-white/50 backdrop-blur-2xl">
          <Link
            to="banner"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiHomeAlt className="text-4xl" />
          </Link>
          <Link
            to="/"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiUser className="text-4xl" />
          </Link>
          <Link
            to="/"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsClipboardData className="text-4xl" />
          </Link>
          <Link
            to="works"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsBriefcase className="text-4xl" />
          </Link>
          <Link
            to="/"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsChatSquare className="text-4xl" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
