'use client'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div>
          <div className="h-[640px] flex-1 bg-[url(/background.svg)] bg-top bg-no-repeat mix-blend-lighten ">
            img
          </div>
          <div className="flex-1">
            <h2 className="text-purple-500">Sobre me</h2>
            <h3>blablalba</h3>
            <p className="mb-6">askdlkaçslkdça</p>
            <div className="flex">
              <div>
                <div className="text-gradient mb-2 text-[40px]">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  years of <br /> Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
