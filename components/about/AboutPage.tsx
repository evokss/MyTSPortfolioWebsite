"use client";

import React from "react";
import HeroSection from "./core/HeroSection";
import MyStory from "./core/MyStory";
import QuickFacts from "./core/QuickFacts";
import ExperienceTimeline from "./core/ExperienceTimeline"
import Skills from "./core/Skills";
import Languages from "./core/Languages";
import Education from "./core/Education";

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
      <Education />
    </div>
  );
};

export default AboutPage;
