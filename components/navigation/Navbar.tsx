"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import components
import NavLink from "./core/NavLink";
import ThemeToggle from "./core/ThemeToggle";
import MobileMenu from "./core/MobileMenu";

// Import hooks and utilities
import useTheme from "./hooks/useTheme";
import { NAV_ITEMS } from "./utils/constants";

const Navbar: React.FC = () => {
  const { theme, toggleTheme, isMounted } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeMenu]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Skip rendering before client-side hydration
  if (!isMounted) {
    return null; // Prevent flash of unstyled content
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-800 top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo Icon */}
          <div className="flex items-center z-50">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/rocket.png"
                width={24}
                height={24}
                className="transition ease-in-out delay-125 hover:scale-125"
                alt="Header Logo"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Theme Toggle */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Navigation Links */}
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            {/* Theme Toggle for Mobile */}
            <ThemeToggle 
              theme={theme} 
              toggleTheme={toggleTheme} 
              className="mr-4" 
            />

            {/* Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        navItems={NAV_ITEMS} 
        onClose={closeMenu} 
      />
    </nav>
  );
};

export default Navbar;
