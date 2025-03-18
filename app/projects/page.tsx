import React from "react";
import ProjectsShowcase from "../../components/projects/ProjectsShowcase";
import StarryBackground from "@/components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <StarryBackground>
        <ProjectsShowcase />
      </StarryBackground>
    </>
  );
};

export default Page;
