import React from "react";
import ContactPage from "../../components/contact/ContactPage";
import Navbar from "../../components/common/NavBar";
import StarryBackground from "@/components/background/StarryBackground";

const page = () => {
  return (
    <>
      <Navbar />
      <StarryBackground>
        <ContactPage />
      </StarryBackground>
    </>
  );
};

export default page;
