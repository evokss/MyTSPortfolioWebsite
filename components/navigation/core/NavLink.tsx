"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "../utils/types";

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

export default NavLink;
