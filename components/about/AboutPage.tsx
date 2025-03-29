"use client";

import React from "react";
import {
  PiGraduationCapLight,
  PiBookOpen,
} from "react-icons/pi";
import { education } from "./utils/experienceData";
import HeroSection from "./core/HeroSection";
import MyStory from "./core/MyStory";
import QuickFacts from "./core/QuickFacts";
import ExperienceTimeline from "./core/ExperienceTimeline"
import Skills from "./core/Skills";
import Languages from "./core/Languages";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section with Resume Download */}
      <HeroSection />

      {/* My Story Section */}
      <MyStory />

      {/* Quick Facts */}
      <QuickFacts />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Skills Section */}
      <Skills />

      {/* Languages */}
      <Languages />

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
