import React from "react";
import { PiGraduationCapLight, PiBookOpen } from "react-icons/pi";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "../utils/experienceData";

const Education: React.FC = () => {
  return (
    <section>
      <SectionHeading title="Education & Certifications" />
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg text-gray-800 bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              {index === 0 ? (
                <PiGraduationCapLight className="w-5 h-5 mt-1" />
              ) : (
                <PiBookOpen className="w-5 h-5 mt-1" />
              )}
              <div>
                {item.link ? (
                  <a href={item.link} className="font-semibold">
                    {item.title}
                  </a>
                ) : (
                  <h3 className="font-semibold">{item.title}</h3>
                )}
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-sm text-gray-400">{item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
