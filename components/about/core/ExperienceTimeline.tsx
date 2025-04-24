import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { experiences } from "../utils/experienceData"
import { calculateDuration, extractStartDate } from "../utils/dateFormatter"
import SectionHeading from "@/components/ui/SectionHeading";

const ExperienceTimeline: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionId: number): void => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <section className="mb-16">
      <SectionHeading title="Professional Journey" />
      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  {experience.title}
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>{experience.company}</span>
                  {experience.type && (
                    <>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span>{experience.type}</span>
                    </>
                  )}
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>
                    {experience.period}
                    {experience.period.includes("Present") && (
                      <>
                        {" • "}
                        {calculateDuration(extractStartDate(experience.period))}
                      </>
                    )}
                  </span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(experience.id)}
                aria-expanded={openSection === experience.id}
                aria-controls={`section-${experience.id}`}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === experience.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === experience.id && (
              <div id={`section-${experience.id}`}>
                <p className="mb-4">{experience.description}</p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceTimeline;
