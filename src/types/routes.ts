export type PageRoute =
  | 'home'
  | 'about'
  | 'mission-vision'
  | 'leadership'
  | 'managing-committee'
  | 'advisory-committee'
  | 'events'
  | 'health-camps'
  | 'blood-donation'
  | 'sports-youth'
  | 'education-social'
  | 'gallery'
  | 'video-gallery'
  | 'donate'
  | 'volunteer'
  | 'news'
  | 'contact'
  | 'privacy-policy';

export interface RouteConfig {
  path: PageRoute;
  hash: string;
  titleEn: string;
  titleMr: string;
}

export const ROUTE_MAP: Record<PageRoute, string> = {
  home: '',
  about: 'about',
  'mission-vision': 'mission-vision',
  leadership: 'leadership',
  'managing-committee': 'managing-committee',
  'advisory-committee': 'advisory-committee',
  events: 'events',
  'health-camps': 'health-camps',
  'blood-donation': 'blood-donation',
  'sports-youth': 'sports-youth',
  'education-social': 'education-social',
  gallery: 'gallery',
  'video-gallery': 'video-gallery',
  donate: 'donate',
  volunteer: 'volunteer',
  news: 'news',
  contact: 'contact',
  'privacy-policy': 'privacy-policy'
};
