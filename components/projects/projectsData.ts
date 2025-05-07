export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
  deployLink?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description:
      "A sleek, minimalistic personal portfolio showcasing my projects and skills as a developer. Built with TypeScript and React for a fast, type-safe frontend. Features responsive design and optimized loading times to deliver a smooth user experience.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind"],
    githubLink: "https://github.com/evokss/MyTSPortfolioWebsite",
    deployLink: "https://ekoss-ts-portfolio.vercel.app/",
    imageUrl: "/icons/rocket.png",
  },
  {
    id: 2,
    name: "My Fav Videos",
    description:
      "A dynamic and user-friendly web application designed to curate and display a personal collection of favorite YouTube videos in an elegant grid layout. Built with React, Next.js and Tailwind CSS for a fully responsive, visually appealing design that adapts effortlessly across devices.",
    technologies: ["JavaScript" ,"React", "Next.js", "HTML", "CSS", "Tailwind"],
    githubLink: "https://github.com/evokss/MyFavVideos",
    deployLink: "https://my-fav-videos.vercel.app/",
    imageUrl: "/icons/movie.png",
  },
  {
    id: 3,
    name: "React Online Market",
    description:
      "A modern e-commerce web application built with React, featuring a catalog of articles/products, user authentication, shopping basket functionality, and user profiles. The application implements a robust state management system combining Redux and custom hooks, with support for internationalization.",
    technologies: ["JavaScript", "React", "React Router", "Redux", "HTML", "CSS"],
    githubLink: "https://github.com/evokss/ReactOnlineMarket",
    deployLink: "https://react-products-market.vercel.app/",
    imageUrl: "/icons/shop.png",
  },
  {
    id: 4,
    name: "Meme Factory",
    description:
      "Generates random meme images from a preloaded dataset, and view the resulting meme on the screen. The app dynamically updates the displayed meme with each click, providing an interactive experience.",
    technologies: ["TypeScript", "React", "HTML", "CSS"],
    githubLink: "https://github.com/evokss/MemeFactory",
    deployLink: "https://memes-factory.vercel.app/",
    imageUrl: "/icons/troll-face.png",
  },
  {
    id: 5,
    name: "Classic Rock Paper Scissors",
    description:
      "The game dynamically updates the interface with real-time results, tracks player scores persistently using localStorage, and employs logic to simulate computer moves and outcomes.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/evokss/MyRockPaperScissors",
    deployLink: "https://evokss.github.io/MyRockPaperScissors.github.io/",
    imageUrl: "/icons/rock-paper-scissors.png",
  },
  {
    id: 6,
    name: "RetroTube",
    description:
      "The project replicates the core design of YouTube's interface, featuring a structured video grid, navigation bar, and user-friendly design elements, all built without the use of JavaScript.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    githubLink: "https://github.com/evokss/RetroTube.github.io",
    deployLink: "https://evokss.github.io/RetroTube.github.io/",
    imageUrl: "/icons/youtube.png",
  },
  {
    id: 7,
    name: "Airbnb Experiences Mobile Clone",
    description:
      "A mobile-first app showcasing online experiences with badges for availability and location. It employs reusable components, mapping techniques, and conditional rendering for scalable, responsive design.",
    technologies: ["TypeScript", "React", "HTML", "CSS"],
    githubLink:
      "https://github.com/evokss/ReactProjects/tree/main/airbnb-clone",
    deployLink: "https://my-air-clone.vercel.app/",
    imageUrl: "/icons/airbnb.png",
  },
  {
    id: 8,
    name: "ReactTS Insights",
    description:
      "A mobile-first application presenting essential React and TypeScript facts in a responsive and user-friendly interface. It features a structured design with a reusable Navbar and Main components.",
    technologies: ["TypeScript", "React", "HTML", "CSS"],
    githubLink: "https://github.com/evokss/React-TS-Facts-Project",
    deployLink: "https://react-ts-facts-project.vercel.app/",
    imageUrl: "/icons/react.png",
  },
];
