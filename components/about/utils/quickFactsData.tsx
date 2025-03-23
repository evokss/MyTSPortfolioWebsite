import { 
  PiGraduationCapLight, 
  PiHeartLight, 
  PiBriefcaseLight, 
  PiFileCodeLight 
} from "react-icons/pi";
import { QuickFactItem } from "./types";

export const quickFacts: QuickFactItem[] = [
  {
    icon: <PiBriefcaseLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
    text: "Owner of a drive to continuously build and deliver captivating and user-friendly web applications",
  },
  {
    icon: <PiGraduationCapLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
    text: "A results-driven Computer Science graduate specializing in software development and problem-solving",
  },
  {
    icon: <PiFileCodeLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
    text: "Love working with React, Node.js, and TypeScript as my go-to tech stack",
  },
  {
    icon: <PiHeartLight className="w-6 h-6 flex-shrink-0 dark:text-orange-400 text-rose-600" />,
    text: "Outside of IT: enthusiast of sports and an active lifestyle, strategic board gamer, avid multilingual reader",
  },
];
