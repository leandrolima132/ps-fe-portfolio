"use client"
import React from "react";

interface Props {
  company: string;
  position: string;
  description: string;
  date: string;
  activities: string[];
}

export const ExperienceCard = ({
  company,
  position,
  date,
  description,
  activities,
}: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isActivities = activities.length > 0

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

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
      <div>
        {activities.map((item, index) => (
          <p
            key={index}
            className={`${
              isExpanded ? "" : "h-0 opacity-0"
            } mt-2 overflow-hidden max-h-full opacity-100 transition-all duration-1000 ease-in-out lg:text-md font-poppins text-sm `}
          >
            {item}
          </p>
        ))}

        <div className={`flex justify-center ${isActivities ? "" : "h-0 opacity-0" }`}>
          <button
            onClick={toggleExpansion}
            className={`mt-2 hover:underline`}
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </button>
        </div>
      </div>
    </div>
  );
};
