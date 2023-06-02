import { SkillsCard } from './SkillsCard'
import content from '../../utils/mock-json/Skills.json'
export const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container text-gray-600">
        <div className="mb-6 flex flex-col items-start lg:flex-row">
          <div className="flex-1">
            <h1 className="font-poppins text-2xl font-bold">Skills</h1>
          </div>
        </div>
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
