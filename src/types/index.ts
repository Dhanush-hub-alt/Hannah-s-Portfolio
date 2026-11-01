export interface Project {
  id: string;
  number: string;
  title: string;
  year: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  technologies: string[];
  keyFeatures: string[];
  architecturePoints: string[];
  category: "Embedded & AI" | "Data & Analytics" | "Scientific Computing";
  status: "Completed Prototype" | "Completed System" | "Research Study";
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    categoryTag: string;
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  location: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  name: string;
  level?: string;
  category: "Cloud & AI" | "Programming & Problem Solving" | "Computer Science & Engineering" | "Learning Platform";
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  focus: string;
  tags: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  year?: string;
  category: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: "Native" | "Professional" | "Intermediate" | "Basic";
  percentage: number;
}
