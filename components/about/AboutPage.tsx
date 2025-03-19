"use client";

import React, { useState } from "react";
import { IoLanguageOutline, IoChevronDownOutline } from "react-icons/io5";
import {
  PiGraduationCapLight,
  PiHeartLight,
  PiBookOpen,
  PiBriefcaseLight,
  PiFileCodeLight,
  PiDownloadSimple,
} from "react-icons/pi";

// Define interfaces for our data structures
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  type?: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  link?: string;
}

interface LanguageItem {
  name: string;
  level: string;
}

interface QuickFactItem {
  icon: React.ReactNode;
  text: string;
}

const AboutPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionId: number): void => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  // Skills data
  const skills: string[] = [
    "React/ Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Git/ GitHub/ GitLab",
    "MongoDB",
    "HTML5 & CSS3",
    "Node.js/ NPM/ PNPM",
    "Bootstrap/ Tailwind CSS",
  ];

  // Languages data
  const languages: LanguageItem[] = [
    { name: "English", level: "C1 (fluent)" },
    { name: "Russian", level: "Native" },
    { name: "Ukrainian", level: "Native" },
  ];

  // Education data
  const education: EducationItem[] = [
    {
      title: "Bachelor's degree - Computer Science",
      institution: "D. Mendeleev State University",
      period: "Sep 2017 - Jul 2021",
    },
    {
      title: "EF SET English level Certificate 67/100 (C1 Advanced)",
      institution: "EF Standard English Test (EF SET)",
      period: "May 2023",
      link: "https://www.efset.org/cert/6SzxAn",
    },
    {
      title: "React Developer Course",
      institution: "Scrimba",
      period: "Jul 2024 - Sep 2024",
    },
    {
      title: "JavaScript Full Course",
      institution: "SuperSimpleDev",
      period: "Feb 2023 - Jul 2023",
    },
  ];

  // Experience data
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Freelance",
      period: "Jul 2023 - Present • 1 yr 8 mos",
      description:
        "Specializing in building modern React applications and responsive interfaces for diverse clients, delivering high-performance solutions with a focus on clean code and user experience.",
      responsibilities: [
        "Led development of responsive React applications with TypeScript and Next.js, focusing on performance optimization and mobile-first design.",
        "Built scalable frontend architecture using Redux state management and custom React hooks, reducing codebase complexity.",
        "Implemented comprehensive UI component libraries with Tailwind CSS and established unit testing practices using Jest.",
        "Collaborated with design teams using Figma to deliver pixel-perfect interfaces while maintaining clean, maintainable code standards.",
      ],
      skills: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Next.js",
        "Tailwind CSS",
        "Git&GitHub",
      ],
    },
    {
      id: 2,
      title: "React Frontend Developer",
      company: "Y_LAB",
      type: "Internship",
      period: "Aug 2024 - Nov 2024 • 4 mos",
      description:
        "Y_LAB is a digital transformation company specializing in fintech, e-commerce, and enterprise solutions. Focused on implementing advanced IT projects and business process automation across multiple industries including logistics, telecom, and blockchain.",
      responsibilities: [
        "Built responsive React applications using TypeScript during intensive internship program, focusing on modern development practices.",
        "Developed feature-rich components implementing Redux state management and REST API integration in training projects.",
        "Created UI component library with Tailwind CSS following design system principles and best practices.",
        "Applied modern frontend tooling including Webpack and Babel while learning unit testing and version control workflows in team environment.",
      ],
      skills: [
        "React",
        "Redux",
        "TypeScript",
        "JavaScript (ES6+)",
        "Babel",
        "Webpack",
        "Figma",
        "Git&GitHub",
      ],
    },
    {
      id: 3,
      title: "Frontend Web Developer",
      company: "Itransition Group",
      type: "Internship",
      period: "Mar 2023 - Jun 2023 • 4 mos",
      description:
        "Itransition is a global software development company delivering enterprise-grade solutions with deep technological expertise and market-specific knowledge. Specializes in creating sophisticated corporate and consumer applications tailored to specific business contexts.",
      responsibilities: [
        "Developed dynamic, responsive web interfaces using HTML5, CSS3, JavaScript ES6, and Bootstrap to deliver seamless user experiences across devices.",
        "Leveraged advanced DOM manipulation along with Flexbox and Grid to optimize layouts and enhance interactive performance.",
        "Collaborated effectively using Git and GitHub, integrating Node.js and MongoDB to support scalable, full-stack solutions.",
      ],
      skills: [
        "JavaScript (ES6+)",
        "Node.js",
        "Bootstrap",
        "HTML5 & CSS3",
        "MongoDB",
        "Git&GitHub",
      ],
    },
    {
      id: 4,
      title: "Professional development",
      company: "Career Break",
      period: "Jul 2021 - Feb 2023 • 1 yr 8 mos",
      description:
        "Emigrated from Russia to Georgia while evolving from HTML/CSS specialist to modern frontend developer.",
      responsibilities: [
        "Advanced from static webpage development to building dynamic web applications using JavaScript, modern frameworks, and state management",
        "Deepened technical expertise in frontend architecture, component-based development, and API integration",
        "Strengthened understanding of web fundamentals including browser rendering, performance optimization, and security best practices",
      ],
      skills: [
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Web Development",
        "React",
        "API",
        "Node.js",
        "Git&GitHub",
      ],
    },
    {
      id: 5,
      title: "HTML/CSS Developer",
      company: "Scientific-Production Center MAX",
      type: "Contract",
      period: "Feb 2020 - Jul 2021 • 1 yr 6 mos",
      description:
        "Scientific-Production Center MAX is a leading developer and integrator of secure cloud computing infrastructure solutions. Provides scalable hardware-software complexes for virtual environments, focusing on protected data storage and deployment of intelligent workspaces for office and development activities.",
      responsibilities: [
        "Engineered dynamic single-page applications (SPAs) using advanced HTML/CSS techniques to deliver seamless, user-friendly interfaces.",
        "Collaborated with cross-functional teams to align design and functionality with project goals.",
      ],
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "Bootstrap",
        "SPA",
        "Responsive Web Design",
        "Git&GitHub",
      ],
    },
    {
      id: 6,
      title: "Microsoft Student Partner",
      company: "Microsoft",
      type: "Apprenticeship",
      period: "Apr 2019 - Mar 2020 • 1 yr",
      description:
        "Microsoft is a global technology leader pioneering personal computing software, cloud services, and enterprise solutions since 1975. World's largest software manufacturer, driving innovation across cloud computing, AI, and productivity tools while shaping the future of digital transformation.",
      responsibilities: [
        "Developed full-stack web applications with JavaScript, React, Python, and Node.js, emphasizing high-quality code.",
        "Rapidly learned and showcased new Microsoft technologies, leveraging documentation and best practices.",
        "Contributed to tech lectures, coding challenges, and unit testing to enhance technical skills.",
      ],
      skills: [
        "Web Development",
        "JavaScript ES6",
        "HTML5 & CSS3",
        "Responsive Web Design",
        "Visual Studio",
        "Python",
        "Git&GitHub",
      ],
    },
  ];

  // Quick facts data
  const quickFacts: QuickFactItem[] = [
    {
      icon: <PiBriefcaseLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
      text: "Owner of a drive to continuously build and deliver captivating and user-friendly web applications",
    },
    {
      icon: <PiGraduationCapLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
      text: "A results-driven Computer Science graduate specializing in software development and problem-solving",
    },
    {
      icon: <PiFileCodeLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
      text: "Love working with React, Node.js, and TypeScript as my go-to tech stack",
    },
    {
      icon: <PiHeartLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
      text: "Outside of IT: enthusiast of sports and an active lifestyle, strategic board gamer, avid multilingual reader",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section with Resume Download */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl text-orange-400 mb-6 ">
          About Me
        </h1>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Frontend Developer with 6 years of development experience,
            passionate about creating robust, visually appealing, and impactful
            web applications.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="/Resume_Frontend-React-Developer_Eva-Koss.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white dark:text-gray-100 px-6 py-3 rounded-lg transition-colors duration-200 bg-rose-600 hover:bg-rose-400 dark:hover:bg-rose-700"
          >
            Download Resume (PDF)
            <PiDownloadSimple className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* My Story Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">My Story</h2>
        <div className="space-y-4">
          <div className="bg-white border-2 border-orange-300 dark:bg-white/5 dark:border-rose-600 py-8 px-8 rounded-lg">
            <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-2 space-y-4 text-gray-600 dark:text-gray-400">
              <li>
                Throughout my academic journey and early career, I successfully
                complete my first higher education in Computer Science, serve as
                a Microsoft Student Partner, and participate in and win many
                coding challenges (hackathons).
              </li>
              <li>
                I consistently develop my own projects and contribute my skills
                and knowledge to various projects with exceptional teams.
              </li>
              <li>
                In my free time, I engage in open-source and freelance web
                development projects, further fueling my love for crafting
                exceptional web experiences and expanding my practical
                knowledge.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-400">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
              <div className="flex items-center gap-3 mb-2">
                {fact.icon}
                <p>{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
