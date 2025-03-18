import React from "react";
import AboutPage from "../../components/about/AboutPage";
import StarryBackground from "@/components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <StarryBackground>
        <AboutPage />
      </StarryBackground>
    </>
  );
};

export default Page;
