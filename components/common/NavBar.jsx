"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // State to manage the theme, set the default theme
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Mark as mounted to enable client-side-only logic
    setIsMounted(true);

    // Access localStorage safely on the client side
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    // Apply the theme change
    if (isMounted) {
      theme === "dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    }
  }, [theme, isMounted]);

  const themeSwitchHandler = (newTheme) => {
    if (newTheme === "light" || newTheme === "dark") {
      setTheme(newTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if the link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo Icon */}
          <div className="flex items-center z-50">
            <Link href="/" className="flex items-center">
              <img
                src="/icons/rocket.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125"
                alt="Header Logo"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Theme Toggle */}
            {theme === "light" ? (
              <img
                src="/icons/moon.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 cursor-pointer"
                onClick={() => themeSwitchHandler("dark")}
                alt="Toggle Dark Mode"
              />
            ) : (
              <img
                src="/icons/sun.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 cursor-pointer"
                onClick={() => themeSwitchHandler("light")}
                alt="Toggle Light Mode"
              />
            )}

            {/* Navigation Links */}
            <Link
              href="/"
              className={`
            ${
              isActive("/")
                ? "text-rose-600"
                : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
            }
          `}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`
                ${
                  isActive("/about")
                    ? "text-rose-600"
                    : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
                }
              `}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`
            ${
              isActive("/projects")
                ? "text-rose-600"
                : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
            }
          `}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`
            ${
              isActive("/contact")
                ? "text-rose-600"
                : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
            }
          `}
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            {/* Theme Toggle for Mobile */}
            {theme === "light" ? (
              <img
                src="/icons/moon.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 mr-4 cursor-pointer"
                onClick={() => themeSwitchHandler("dark")}
                alt="Toggle Dark Mode"
              />
            ) : (
              <img
                src="/icons/sun.png"
                className="size-6 transition ease-in-out delay-125 hover:scale-125 mr-4 cursor-pointer"
                onClick={() => themeSwitchHandler("light")}
                alt="Toggle Light Mode"
              />
            )}

            {/* Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-6">
          <Link
            href="/"
            className={`
          text-2xl font-semibold
          ${
            isActive("/")
              ? "text-rose-600"
              : "text-gray-800 dark:text-white hover:text-rose-600"
          }
        `}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`
              text-2xl font-semibold
              ${
                isActive("/about")
                  ? "text-rose-600"
                  : "text-gray-800 dark:text-white hover:text-rose-600"
              }
            `}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`
          text-2xl font-semibold
          ${
            isActive("/projects")
              ? "text-rose-600"
              : "text-gray-800 dark:text-white hover:text-rose-600"
          }
        `}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`
          text-2xl font-semibold
          ${
            isActive("/contact")
              ? "text-rose-600"
              : "text-gray-800 dark:text-white hover:text-rose-600"
          }
        `}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
