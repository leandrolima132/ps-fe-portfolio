import { BiBadgeCheck } from 'react-icons/bi'
interface Props {
  title: string
  linguages?: string[]
}
export const SkillsCard = ({ title, linguages }: Props) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-10 rounded-2xl bg-white/60 p-8">
      {/* Title */}
      <h1 className="font-poppins text-xl font-bold lg:text-2xl">{title}</h1>
      {/* Skills */}
      <div className="grid w-full grid-cols-2 gap-10">
        {linguages?.map((item, index) => (
          <div key={index} className="flex flex-row items-center gap-x-2">
            <BiBadgeCheck className="text-2xl" />{' '}
            <h1 className="font-poppins text-lg lg:text-xl">{item}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
