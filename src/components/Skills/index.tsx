import { SkillsCard } from './SkillsCard'
import content from '../../utils/mock-json/Skills.json'
export const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container text-gray-600">
        <h1 className="mb-6 font-poppins text-2xl font-bold">Skills</h1>
        <div className="flex flex-col gap-10 lg:flex-row ">
          {content.map((item) => (
            <SkillsCard
              key={item.id}
              title={item.title}
              linguages={item.linguages}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
