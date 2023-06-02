import { WorksCard } from './WorksCard'

export const Works = () => {
  return (
    <section id="works" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <WorksCard
            data-aos="fade-right"
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            image={'./vb.png'}
            imgDirection="left"
          />
          <WorksCard
            data-aos="fade-left"
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            image={'./vaibem-app.png'}
            imgDirection="right"
          />

          <WorksCard
            data-aos="fade-right"
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            image={'./growatt.png'}
            imgDirection="left"
          />
          <WorksCard
            data-aos="fade-left"
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            image={'./feitosa.png'}
            imgDirection="right"
          />
        </div>
      </div>
    </section>
  )
}
