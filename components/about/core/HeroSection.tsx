import React from "react";
import { PiDownloadSimple } from "react-icons/pi";
import PageHeading from "@/components/ui/PageHeading";

const HeroSection: React.FC = () => {
  return (
    <div className="mb-16 text-center">
      <PageHeading title="About Me" />
      <div className="max-w-3xl mx-auto mb-8">
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Frontend Developer with 6 years of development experience,
          passionate about creating robust, visually appealing, and impactful
          web applications.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="/Resume_Frontend-React-Engineer_Eva-Koss.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white dark:text-gray-100 px-6 py-3 rounded-lg transition-colors duration-200 bg-rose-600 hover:bg-rose-400 dark:hover:bg-rose-700"
        >
          Download Resume (PDF)
          <PiDownloadSimple className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
