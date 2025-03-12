import React from "react";
import { Navbar } from "@/components/navigation";
import AboutPage from "../../components/about/AboutPage";
import StarryBackground from "@/components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <AboutPage />
      </StarryBackground>
    </>
  );
};

export default Page;
