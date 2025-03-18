"use client";

import React from "react";
import HomePage from "../components/home/HomePage";
import StarryBackground from "../components/background/StarryBackground";

const Page: React.FC = () => {
  return (
    <>
      <StarryBackground>
        <HomePage />
      </StarryBackground>
    </>
  );
};

export default Page;
