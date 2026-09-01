export interface Project {
  name: string;
  description: string;
  image: string;
  screenshots?: string[];
  tags: string[];
  badges: { text: string; colorScheme: string }[];
  buttons: { text: string; href: string }[];
}

export interface Experience {
  image: string;
  company: string;
  position: string;
  duration: string;
  badges: { name: string; colorScheme: string }[];
  listItems: string[];
  tags: string;
}

export interface ContactLink {
  icon: React.ComponentType;
  label: string;
  value: string;
  href: string;
}
