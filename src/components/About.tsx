'use client'

import Image from 'next/image'

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <div
            data-aos="fade-right"
            className="mb-10 flex flex-1 flex-col items-center gap-y-12 lg:mb-0"
          >
            <Image
              src="/portfolio-img1.png"
              width={500}
              height={500}
              alt=""
              className="rounded-full"
            />
          </div>
          <div data-aos="fade-left" className=" flex flex-1 flex-col lg:mb-0">
            <div className="py-8">
              <h2 className="font-alt leading-tight text-purple-500">
                My latest Work
              </h2>
              <p className="max-w-sm  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quos voluptates
                voluptatibus voluptatem quod doloribus quas quidem repellendus?
                Quisquam voluptatum, quibusdam, quia, quos voluptates
                voluptatibus voluptatem quod doloribus quas quidem repellendus?
                Quisquam voluptatum, quibusdam, quia, quos voluptates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
