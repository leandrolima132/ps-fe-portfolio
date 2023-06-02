import Image from 'next/image'

export const HeaderOLD = () => {
  return (
    <header className="mx-auto flex  px-6 py-8 lg:px-8">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <a href="/">
            <Image
              src="/pc-icon.png"
              width={50}
              height={100}
              alt="imagem de um notebook"
            />
          </a>
          <button className="bg-gradient rounded-full bg-black px-8 py-3 font-alt font-bold text-white">
            Download
          </button>
        </div>
      </div>
    </header>
  )
}
