import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "../utils/experienceData";

const Skills: React.FC = () => {
  return (
    <section className="mb-16">
      <SectionHeading title="Skills & Technologies" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-gray-800 text-center bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
