import { useEffect, useState } from 'react';

const BASE_PATH = '/sistema_votos';

export function useRouting() {
  const [currentPath, setCurrentPath] = useState(getInitialPath());

  function getInitialPath() {
    // Para GitHub Pages
    const search = window.location.search;
    const queryPath = search.match(/\?\/([^&]*)/)?.[1];
    if (queryPath) {
      return `/${queryPath}`;
    }

    // Para desenvolvimento local
    const path = window.location.pathname;
    return path.replace(BASE_PATH, '') || '/';
  }

  function createPath(path: string) {
    // Força o uso do formato GitHub Pages em produção
    if (process.env.NODE_ENV === 'production') {
      return `${BASE_PATH}/?${path === '/' ? '' : path.slice(1)}`;
    }
    // Em desenvolvimento, usa paths normais
    return path;
  }

  function navigate(path: string) {
    const fullPath = createPath(path);
    window.history.pushState({}, '', fullPath);
    setCurrentPath(path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  useEffect(() => {
    function handleLocation() {
      const newPath = getInitialPath();
      setCurrentPath(newPath);
    }

    window.addEventListener('popstate', handleLocation);
    handleLocation(); // Força a atualização inicial

    return () => {
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  return { currentPath, createPath, navigate };
}