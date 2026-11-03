export type Language = 'mr' | 'en';

export type GalleryCategory = 'all' | 'health' | 'blood' | 'community' | 'news';

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

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
  date: string;
  description: string;
  highlights?: string[];
}

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  roleCategory: 'managing' | 'advisory';
  department?: string;
  bio?: string;
  photoUrl?: string;
  initials: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'health' | 'blood' | 'sports' | 'education' | 'social';
  categoryLabel: string;
  status: 'upcoming' | 'past';
  date: string;
  time?: string;
  location: string;
  description: string;
  imageSrc?: string;
  galleryImages?: string[];
  beneficiaries?: string;
  partnerOrgs?: string;
  highlights?: string[];
  isVerified: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  categoryKey?: 'foundation' | 'health' | 'blood' | 'education' | 'sports' | 'community';
  summary: string;
  content: string;
  isImportant?: boolean;
  imageSrc?: string;
  source?: string;
  tags?: string[];
  fullDetails?: string[];
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
}
