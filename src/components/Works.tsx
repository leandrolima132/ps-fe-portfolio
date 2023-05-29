export const Works = () => {
  return (
    <section id="works" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <div
            data-aos="fade-right"
            className="mb-10 flex flex-1 flex-col gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div className="h-[325px] w-full">
              <h2 className="font-alt leading-tight text-purple-500">
                My latest <br />
                Work
              </h2>
              <p className="mb-16 max-w-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quos voluptates
                voluptatibus voluptatem quod doloribus quas quidem repellendus?
                Quisquam voluptatum, quibusdam, quia, quos voluptates
                voluptatibus voluptatem quod doloribus quas quidem repellendus?
                Quisquam voluptatum, quibusdam, quia, quos voluptates
              </p>
              <button className="bg-gradient rounded-full bg-black px-8 py-3 font-alt font-bold text-white">
                View all project
              </button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              {/* overlay  */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={'./portfolio-img1.png'}
                alt=""
              />
              {/* prettier */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">Develop</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Name</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-1 flex-col gap-y-10 ">
            {/* image 1 */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              {/* overlay  */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={'./portfolio-img1.png'}
                alt=""
              />
              {/* prettier */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">Develop</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Name</span>
              </div>
            </div>
            {/* image 2 */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              {/* overlay  */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* img */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={'./portfolio-img1.png'}
                alt=""
              />
              {/* prettier */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">Develop</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
