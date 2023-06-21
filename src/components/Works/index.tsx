import { WorksCard } from './WorksCard'
import content from '../../utils/mock-json/Works.json'

export const Works = () => {
  return (
    <section id="works" className="section">
      <div className="container text-gray-600">
        <h1 className="font-poppins text-2xl font-bold">Trabalhos</h1>
        {/* Cartão */}
        <div className="mt-6 flex flex-col gap-y-10">
          {content.map((item) => (
            <WorksCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.path}
              isLeft={item.left}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
