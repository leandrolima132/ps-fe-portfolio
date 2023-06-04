interface Props {
  title: string
  description: string
  image: string
  isLeft?: boolean
}
export const WorksCard = ({ title, description, image, isLeft }: Props) => {
  const isScreenLarge = isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
  const isEffect = isLeft ? 'fade-right' : 'fade-left'

  return (
    <div
      data-aos={isEffect}
      className={`flex flex-col items-start gap-x-10  ${isScreenLarge}`}
    >
      <div className="flex max-w-max flex-1">
        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
          {/* overlay  */}
          <div className="absolute z-40 h-full w-full transition-all duration-300"></div>
          {/* img */}
          <img
            className="transition-all duration-500 group-hover:scale-125"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="mt-8 flex flex-1 flex-col">
        <h1 className="font-poppins text-2xl">{title}</h1>
        <p className="font-poppins text-sm">{description}</p>
      </div>
    </div>
  )
}
