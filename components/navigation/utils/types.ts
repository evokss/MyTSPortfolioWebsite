import { ReactNode } from "react";

export type Theme = "light" | "dark";

export interface NavItem {
  href: string;
  label: string;
}

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}

export interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}