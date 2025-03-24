import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return <h2 className="text-2xl font-bold mb-6 text-orange-400">{title}</h2>;
};

export default SectionHeading;
