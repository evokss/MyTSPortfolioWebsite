"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Define types for our component props and state
type Theme = "light" | "dark";
type NavItem = {
  href: string;
  label: string;
};

// Navigation items configuration
const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Me" },
];

// Custom hook for theme management
const useTheme = (): {
  theme: Theme;
  toggleTheme: () => void;
  isMounted: boolean;
} => {
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

// NavLink component for consistent styling
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  isMobile = false,
  onClick 
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        ${isMobile ? "text-2xl font-semibold" : ""}
        ${
          isActive 
            ? "text-rose-600" 
            : "text-gray-800 dark:text-white hover:text-rose-600 transition duration-300"
        }
      `}
    >
      {children}
    </Link>
  );
};

// ThemeToggle component
interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
  className?: string;
}

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

// Main Navbar component
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
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-800 sticky top-0 z-40">
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

      {/* Mobile Links */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-6"
          role="dialog"
          aria-modal="true"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={`mobile-${item.href}`} 
              href={item.href} 
              isMobile={true}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
