"use client";

import { useState, useEffect, useCallback } from "react";
import { Theme } from "../utils/types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme || "dark";
      setTheme(savedTheme);
      
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      theme === "dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    }
  }, [theme, isMounted]);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  }, [theme]);

  return { theme, toggleTheme, isMounted };
};

export default useTheme;
