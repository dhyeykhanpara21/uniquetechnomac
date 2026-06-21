export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  specifications: Record<string, string>;
  relatedProductIds: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
