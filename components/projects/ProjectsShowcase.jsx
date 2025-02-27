"use client";

import React from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "./projects";

// ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:bg-orange-50 dark:hover:border-rose-600 dark:bg-gray-900 dark:hover:bg-gray-900 dark:text-white border-2 border-orange-400 group">
      <div className="flex justify-center pb-6">
        <img src={project.imageUrl} alt={project.name} className="h-28" />
      </div>
      <h3 className="text-xl font-bold text-orange-400 mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4 dark:group-hover:text-gray-400 transition-colors duration-300">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-orange-400 text-xs font-medium px-2.5 py-0.5 rounded dark:text-rose-600 dark:bg-blue-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <Link
          href={project.githubLink}
          target="_blank"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          <FiGithub className="mr-2 w-5 h-5" /> GitHub
        </Link>
        {project.deployLink ? (
          <Link
            href={project.deployLink}
            target="_blank"
            className="flex items-center bg-orange-400 hover:bg-orange-300 text-white px-4 py-2 rounded dark:bg-rose-600 dark:hover:bg-rose-500 transition-colors"
          >
            <FiExternalLink className="mr-2 w-5 h-5" /> Live Demo
          </Link>
        ) : (
          <button
            disabled
            className="flex items-center bg-gray-800 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
          >
            <FiExternalLink className="mr-2 w-5 h-5" /> Live Demo
          </button>
        )}
      </div>
    </div>
  );
};

// Main Projects Showcase Page
const ProjectsShowcase = () => {
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
          {projects.map((project) => (
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
