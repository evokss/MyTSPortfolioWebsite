import React from "react";
import Navbar from "../../components/common/NavBar";
import ProjectsShowcase from "../../components/projects/ProjectsShowcase";
import StarryBackground from "@/components/background/StarryBackground";

const page = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <ProjectsShowcase />
      </StarryBackground>
    </>
  );
};

export default page;
