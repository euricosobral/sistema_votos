import React from 'react';
import { Home } from './pages/Home';
import { VotingPage } from './pages/VotingPage';
import { SettingsPage } from './pages/SettingsPage';
import { ResultsPage } from './pages/ResultsPage';
import { Navigation } from './components/Navigation';
import { useRouting } from './hooks/useRouting';

function App() {
  const { currentPath } = useRouting();

  return (
    <>
      <div className="pb-16">
        {currentPath === '/' && <Home />}
        {currentPath === '/votar' && <VotingPage />}
        {currentPath === '/configuracoes' && <SettingsPage />}
        {currentPath === '/resultados' && <ResultsPage />}
      </div>
      <Navigation />
    </>
  );
}

export default App;