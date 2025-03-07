import React from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "./projectsData";

// Define props interface for the component
interface ProjectCardProps {
  project: Project;
}

//ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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

export default ProjectCard;
