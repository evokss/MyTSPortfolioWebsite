"use client";

import React from "react";
import Image from "next/image";
import { ThemeToggleProps } from "../utils/types";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  theme, 
  toggleTheme,
  className = ""
}) => {
  return (
    <button
      onClick={toggleTheme}
      className={`focus:outline-none ${className}`}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <Image
          src="/icons/moon.png"
          width={24}
          height={24}
          className="transition ease-in-out delay-125 hover:scale-125 cursor-pointer"
          alt="Toggle Dark Mode"
        />
      ) : (
        <Image
          src="/icons/sun.png"
          width={24}
          height={24}
          className="transition ease-in-out delay-125 hover:scale-125 cursor-pointer"
          alt="Toggle Light Mode"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
