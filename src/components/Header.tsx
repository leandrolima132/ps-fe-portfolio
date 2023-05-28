import Image from 'next/image'

export const Header = () => {
  return (
    <header className="mx-auto flex px-6 py-8 lg:px-8">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <a href="#">
            <Image src="/logo.svg" width={100} height={100} alt="" />
          </a>
          <button className="rounded-full bg-black px-8 py-3 text-white">
            Download
          </button>
        </div>
      </div>
    </header>
  )
}
