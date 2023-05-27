import Image from 'next/image'

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <Image src="/logo.svg" width={100} height={100} alt="" />
          </a>
          <button className="mt-8 rounded-full bg-black px-8 py-3 text-white">
            Download
          </button>
        </div>
      </div>
    </header>
  )
}
