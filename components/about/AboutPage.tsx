"use client";

import React, { useState } from "react";
import { IoLanguageOutline, IoChevronDownOutline } from "react-icons/io5";
import {
  PiGraduationCapLight,
  PiBookOpen,
} from "react-icons/pi";
import { experiences, education, languages, skills } from "./utils/experienceData";
import { quickFacts } from "./utils/quickFactsData";
import HeroSection from "./core/HeroSection";
import MyStory from "./core/MyStory";
import QuickFacts from "./core/QuickFacts";

const AboutPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionId: number): void => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section with Resume Download */}
      <HeroSection />

      {/* My Story Section */}
      <MyStory />

      {/* Quick Facts */}
      <QuickFacts />

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Professional Journey
        </h2>
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
                    <span>{experience.period}</span>
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

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Skills & Technologies
        </h2>
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

      {/* Languages */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Languages</h2>
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

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Education & Certifications
        </h2>
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
    </div>
  );
};

export default AboutPage;
