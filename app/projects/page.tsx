import React from "react";
import Navbar from "../../components/common/NavBar";
import ProjectsShowcase from "../../components/projects/ProjectsShowcase";
import StarryBackground from "@/components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <ProjectsShowcase />
      </StarryBackground>
    </>
  );
};

export default Page;
