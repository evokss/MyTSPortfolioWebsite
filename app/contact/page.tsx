import React from "react";
import ContactPage from "../../components/contact/ContactPage";
import Navbar from "../../components/navigation/NavBar";
import StarryBackground from "@/components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <ContactPage />
      </StarryBackground>
    </>
  );
};

export default Page;
