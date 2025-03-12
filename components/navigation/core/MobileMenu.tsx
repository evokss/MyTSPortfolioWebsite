"use client";

import React from "react";
import { MobileMenuProps } from "../utils/types";
import NavLink from "./NavLink";

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-6"
      role="dialog"
      aria-modal="true"
    >
      {navItems.map((item) => (
        <NavLink 
          key={`mobile-${item.href}`} 
          href={item.href} 
          isMobile={true}
          onClick={onClose}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;
