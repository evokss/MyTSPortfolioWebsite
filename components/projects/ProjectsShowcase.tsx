import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { projects, Project } from "./projectsData";
import ProjectCard from "@/components/projects/ProjectCard";

// Main Projects Showcase Page
const ProjectsShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 dark:bg-transparent dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl text-orange-400 mb-6">
            Welcome to My Project Gallery
          </h1>

          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Here you&apos;ll find a collection of personal projects born from
            curiosity and creativity. While my professional work showcases
            technical expertise, these projects represent my experimental side -
            where I tackle unique challenges and explore technologies just for
            the joy of building. Each one tells a story of growth and
            innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Footer */}
        <div className="text-center mt-16 px-7 md:p-0">
          <div className="inline-flex flex-col sm:flex-row items-center text-gray-600 dark:text-gray-400">
            <span className="text-center sm:text-left">
              Dive deeper into my coding journey - explore more projects on:
            </span>
            <Link
              href="https://github.com/evokss"
              target="_blank"
              className="inline-flex items-center text-orange-400 hover:text-orange-500 dark:text-rose-500 dark:hover:text-rose-400 font-medium transition-colors mt-2 sm:mt-0 sm:ml-2"
            >
              <FiGithub className="w-5 h-5 mr-1" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
