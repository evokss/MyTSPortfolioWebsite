import React from "react";
import ContactPage from "../../components/contact/ContactPage";
import StarryBackground from "@/components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <StarryBackground>
        <ContactPage />
      </StarryBackground>
    </>
  );
};

export default Page;
