interface Props {
  company: string
  position: string
  description: string
  date: string
}
export const ExperienceCard = ({
  company,
  position,
  date,
  description,
}: Props) => {
  return (
    <div className="flex w-full flex-1 flex-col gap-y-4 rounded-2xl bg-white/60 p-8">
      {/* Title */}
      <h2 className="font-poppins text-lg font-bold lg:text-xl">{company}</h2>
      <div className="grid w-full grid-cols-2">
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="text-md font-poppins lg:text-lg">{position}</h1>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="text-md font-poppins lg:text-lg">{date}</h1>
        </div>
      </div>
      <p className="lg:text-md font-poppins text-sm">{description}</p>
    </div>
  )
}
