import React from "react";

interface PageHeadingProps {
  title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl text-orange-400 mb-6">{title}</h1>;
};

export default PageHeading;
