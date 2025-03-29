import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import SectionHeading from "@/components/ui/SectionHeading";
import { languages } from "../utils/experienceData";

const Languages: React.FC = () => {
  return (
    <section className="mb-16">
      <SectionHeading title="Languages" />
      <div className="grid md:grid-cols-3 gap-6 text-gray-800">
        {languages.map((language, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold">{language.name}</p>
                <p className="text-sm text-gray-400">{language.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
