import Image from 'next/image'
// import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
export const Banner = () => {
  return (
    <section id="banner" className="section">
      <div className="container mx-auto">
        <div>
          <div>
            <h1>
              Dev <span>FullStack</span>
            </h1>
          </div>
          <div>
            <Image src="/background.svg" width={100} height={100} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
