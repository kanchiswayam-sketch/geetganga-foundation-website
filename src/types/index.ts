export type Language = 'mr' | 'en';

export type GalleryCategory = 'all' | 'health' | 'blood' | 'community';

export interface ActivityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageSrc: string;
  alt: string;
  description: string;
  date?: string;
}

export interface StatItem {
  label: string;
  description: string;
  icon: string;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
}
