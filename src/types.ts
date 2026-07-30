export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  link?: string;
  github?: string;
  stats?: { label: string; value: string }[];
  accentColor?: string;
  isFeatured?: boolean;

  role: string;
  tools: string[];
  result: string;
  challenge: string;
  solution: string;
  impactDetails: string[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education" | "internship" | "freelance" | "certification";
  title: string;
  organization: string;
  subtitle?: string;
  duration: string;
  score?: string;
  scoreLabel?: string;
  description: string;
  skillsAcquired?: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}
