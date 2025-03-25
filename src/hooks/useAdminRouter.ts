import { useState, useEffect } from 'react';

interface RouterState {
  currentView: string;
  params: Record<string, string>;
}

export function useAdminRouter() {
  const [state, setState] = useState<RouterState>({
    currentView: 'home',
    params: {}
  });

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      
      if (path === '/admin/posts') {
        setState({ currentView: 'posts', params: {} });
      } else if (path === '/admin/posts/new') {
        setState({ currentView: 'new-post', params: {} });
      } else if (path.match(/\/admin\/posts\/edit\/\d+/)) {
        const id = path.split('/').pop() || '';
        setState({ currentView: 'edit-post', params: { id } });
      } else {
        setState({ currentView: 'home', params: {} });
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
  };

  return { ...state, navigate };
}