import { ExperienceItem, EducationItem, LanguageItem } from "./types";

// Skills data
export const skills: string[] = [
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
export const languages: LanguageItem[] = [
  { name: "English", level: "C1 (fluent)" },
  { name: "Russian", level: "Native" },
  { name: "Ukrainian", level: "Native" },
];

// Education data
export const education: EducationItem[] = [
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
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Frontend Engineer (React / Next.js)",
    company: "Independent Contractor",
    period: "Jul 2023 - Present",
    description:
      "Frontend Engineer specializing in scalable React and Next.js applications, with a strong focus on clean architecture, performance optimization, and responsive, user-centered interfaces.",
    responsibilities: [
      "Led end-to-end development of scalable React applications using TypeScript and Next.js, delivering performant, mobile-first user interfaces for production environments.",
      "Designed and maintained frontend architecture using Redux, custom hooks, and modular component patterns, improving code maintainability and long-term scalability.",
      "Optimized application performance through code splitting, memoization, and build configuration tuning, contributing to faster load times and smoother user interactions.",
      "Collaborated closely with designers and product stakeholders to translate Figma designs into pixel-accurate, accessible, and responsive interfaces.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "Redux",
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
    title: "Frontend Developer",
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
    title: "Frontend Developer",
    company: "Personal projects",
    type: "Self-employed",
    period: "Jul 2021 - Feb 2023 • 1 yr 8 mos",
    description:
      "This intensive learning period transformed my capabilities from markup-focused development to creating sophisticated interactive web applications, backed by solid understanding of modern frontend technologies and principles.",
    responsibilities: [
      "Transitioned from classical HTML/CSS specialist to modern frontend developer through dedicated self-learning and project work",
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
