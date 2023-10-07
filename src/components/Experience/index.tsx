import { ExperienceCard } from './ExperienceCard'
import content from '../../utils/mock-json/Experience.json'

export const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container text-gray-600">
        <h1 className="mb-6 font-poppins text-2xl font-bold">Experiências</h1>
        <div data-aos={'fade-left'} className="flex flex-col gap-10">
          {content.map((item) => (
            <ExperienceCard
              key={item.id}
              company={item.company}
              position={item.position}
              description={item.description}
              date={item.date}
              activities={item.activities}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
