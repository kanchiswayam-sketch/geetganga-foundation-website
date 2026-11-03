import { useState, useEffect } from 'react';
import { PageRoute, ROUTE_MAP } from '../types/routes';

export function getRouteFromHash(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  const found = Object.entries(ROUTE_MAP).find(([, val]) => val === hash);
  if (found) {
    return found[0] as PageRoute;
  }
  return 'home';
}

export function navigateTo(route: PageRoute) {
  const path = ROUTE_MAP[route];
  window.location.hash = path ? `#/${path}` : '#/';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useRouter() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      const route = getRouteFromHash();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return {
    currentRoute,
    navigate: navigateTo
  };
}
