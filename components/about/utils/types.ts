export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  type?: string;
  period: string;
  description?: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  link?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface QuickFactItem {
  icon: React.ReactNode;
  text: string;
}
