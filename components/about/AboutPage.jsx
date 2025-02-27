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

const AboutPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

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
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiBriefcaseLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />
              <p>
                Owner of a drive to continuously build and deliver captivating
                and user-friendly web applications
              </p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiGraduationCapLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />
              <p>
                A results-driven Computer Science graduate specializing in
                software development and problem-solving
              </p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiFileCodeLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />
              <p>
                Love working with React, Node.js, and TypeScript as my go-to
                tech stack
              </p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="flex items-center gap-3 mb-2">
              <PiHeartLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />
              <p>
                Outside of IT: enthusiast of sports and an active lifestyle,
                strategic board gamer, avid multilingual reader
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Professional Journey
        </h2>
        <div className="space-y-8 text-gray-600 dark:text-gray-400">
          {/* Current Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  Frontend Developer
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>Freelance</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Jul 2023 - Present • 1 yr 8 mos</span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(1)}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === 1 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === 1 && (
              <div>
                <p className="mb-4">
                  Specializing in building modern React applications and
                  responsive interfaces for diverse clients, delivering
                  high-performance solutions with a focus on clean code and user
                  experience.
                </p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>
                    Led development of responsive React applications with
                    TypeScript and Next.js, focusing on performance optimization
                    and mobile-first design.
                  </li>
                  <li>
                    Built scalable frontend architecture using Redux state
                    management and custom React hooks, reducing codebase
                    complexity.
                  </li>
                  <li>
                    Implemented comprehensive UI component libraries with
                    Tailwind CSS and established unit testing practices using
                    Jest.
                  </li>
                  <li>
                    Collaborated with design teams using Figma to deliver
                    pixel-perfect interfaces while maintaining clean,
                    maintainable code standards.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    JavaScript (ES6+)
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Git&GitHub
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  React Frontend Developer
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>Y_LAB</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Internship</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Aug 2024 - Nov 2024 • 4 mos</span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(2)}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === 2 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === 2 && (
              <div>
                <p className="mb-4">
                  Y_LAB is a digital transformation company specializing in
                  fintech, e-commerce, and enterprise solutions. Focused on
                  implementing advanced IT projects and business process
                  automation across multiple industries including logistics,
                  telecom, and blockchain.
                </p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>
                    Built responsive React applications using TypeScript during
                    intensive internship program, focusing on modern development
                    practices.
                  </li>
                  <li>
                    Developed feature-rich components implementing Redux state
                    management and REST API integration in training projects.
                  </li>
                  <li>
                    Created UI component library with Tailwind CSS following
                    design system principles and best practices.
                  </li>
                  <li>
                    Applied modern frontend tooling including Webpack and Babel
                    while learning unit testing and version control workflows in
                    team environment.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Redux
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    JavaScript (ES6+)
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Babel
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Webpack
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Git&GitHub
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  Frontend Web Developer
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>Itransition Group</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Internship</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Mar 2023 - Jun 2023 • 4 mos</span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(3)}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === 3 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === 3 && (
              <div>
                <p className="mb-4">
                  Itransition is a global software development company
                  delivering enterprise-grade solutions with deep technological
                  expertise and market-specific knowledge. Specializes in
                  creating sophisticated corporate and consumer applications
                  tailored to specific business contexts.
                </p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>
                    Developed dynamic, responsive web interfaces using HTML5,
                    CSS3, JavaScript ES6, and Bootstrap to deliver seamless user
                    experiences across devices.
                  </li>
                  <li>
                    Leveraged advanced DOM manipulation along with Flexbox and
                    Grid to optimize layouts and enhance interactive
                    performance.
                  </li>
                  <li>
                    Collaborated effectively using Git and GitHub, integrating
                    Node.js and MongoDB to support scalable, full-stack
                    solutions.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    JavaScript (ES6+)
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Bootstrap
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    HTML5 & CSS3
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Git&GitHub
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  Professional development
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>Career Break</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Jul 2021 - Feb 2023 • 1 yr 8 mos</span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(4)}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === 4 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === 4 && (
              <div>
                <p className="mb-4">
                  Emigrated from Russia to Georgia while evolving from HTML/CSS
                  specialist to modern frontend developer.
                </p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>
                    Advanced from static webpage development to building dynamic
                    web applications using JavaScript, modern frameworks, and
                    state management
                  </li>
                  <li>
                    Deepened technical expertise in frontend architecture,
                    component-based development, and API integration
                  </li>
                  <li>
                    Strengthened understanding of web fundamentals including
                    browser rendering, performance optimization, and security
                    best practices
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    JavaScript (ES6+)
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Web Development
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    API
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Git&GitHub
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  HTML/CSS Developer
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>Scientific-Production Center MAX</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Contract</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Feb 2020 - Jul 2021 • 1 yr 6 mos</span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(5)}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === 5 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === 5 && (
              <div>
                <p className="mb-4">
                  Scientific-Production Center MAX is a leading developer and
                  integrator of secure cloud computing infrastructure solutions.
                  Provides scalable hardware-software complexes for virtual
                  environments, focusing on protected data storage and
                  deployment of intelligent workspaces for office and
                  development activities.
                </p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>
                    Engineered dynamic single-page applications (SPAs) using
                    advanced HTML/CSS techniques to deliver seamless,
                    user-friendly interfaces.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to align design and
                    functionality with project goals.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    HTML5 & CSS3
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    JavaScript (ES6+)
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Bootstrap
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    SPA
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Responsive Web Design
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Git&GitHub
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Previous Role */}
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600">
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  Microsoft Student Partner
                </h3>
                <p className="dark:text-gray-500 flex flex-col sm:flex-row sm:items-center">
                  <span>Microsoft</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Apprenticeship</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>Apr 2019 - Mar 2020 • 1 yr</span>
                </p>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleSection(6)}
              >
                <IoChevronDownOutline
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    openSection === 6 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {openSection === 6 && (
              <div>
                <p className="mb-4">
                  Microsoft is a global technology leader pioneering personal
                  computing software, cloud services, and enterprise solutions
                  since 1975. World&apos;s largest software manufacturer,
                  driving innovation across cloud computing, AI, and
                  productivity tools while shaping the future of digital
                  transformation.
                </p>
                <ul className="list-disc marker:dark:text-rose-600 marker:text-orange-400 m-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>
                    Developed full-stack web applications with JavaScript,
                    React, Python, and Node.js, emphasizing high-quality code.
                  </li>
                  <li>
                    Rapidly learned and showcased new Microsoft technologies,
                    leveraging documentation and best practices.
                  </li>
                  <li>
                    Contributed to tech lectures, coding challenges, and unit
                    testing to enhance technical skills.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Web Development
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    JavaScript ES6
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    HTML5 & CSS3
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Responsive Web Design
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Visual Studio
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 text-gray-800 bg-orange-100 dark:bg-rose-600/60 dark:text-gray-100 rounded-full text-sm">
                    Git&GitHub
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React/ Next.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "Git/ GitHub/ GitLab",
            "MongoDB",
            "HTML5 & CSS3",
            "Node.js/ NPM/ PNPM",
            "Bootstrap/ Tailwind CSS",
          ].map((skill, index) => (
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
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold">English</p>
                <p className="text-sm text-gray-400">C1 (fluent)</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold ">Russian</p>
                <p className="text-sm text-gray-400">Native</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-center gap-3">
              <IoLanguageOutline className="w-5 h-5" />
              <div>
                <p className="font-semibold">Ukrainian</p>
                <p className="text-sm text-gray-400">Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Education & Certifications
        </h2>
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-lg text-gray-800 bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              <PiGraduationCapLight className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">
                  Bachelor&apos;s degree - Computer Science
                </h3>
                <p className="text-gray-400">D. Mendeleev State University</p>
                <p className="text-sm text-gray-400">Sep 2017 - Jul 2021</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg text-gray-800 bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              <PiBookOpen className="w-5 h-5 mt-1" />
              <div>
                <a
                  href="https://www.efset.org/cert/6SzxAn"
                  className="font-semibold"
                >
                  EF SET English level Certificate 67/100 (C1 Advanced)
                </a>
                <p className="text-gray-400">
                  EF Standard English Test (EF SET)
                </p>
                <p className="text-sm text-gray-400">May 2023</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              <PiBookOpen className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">React Developer Course</h3>
                <p className="text-gray-400">Scrimba</p>
                <p className="text-sm text-gray-400">Jul 2024 - Sep 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-lg bg-white border-2 border-orange-300 dark:border-rose-600 dark:text-orange-400">
            <div className="flex items-start gap-3">
              <PiBookOpen className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">JavaScript Full Course</h3>
                <p className="text-gray-400">SuperSimpleDev</p>
                <p className="text-sm text-gray-400">Feb 2023 - Jul 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
