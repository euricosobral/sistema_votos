import React from 'react';
import { Home } from './pages/Home';
import { VotingPage } from './pages/VotingPage';
import { SettingsPage } from './pages/SettingsPage';
import { ResultsPage } from './pages/ResultsPage';
import { Navigation } from './components/Navigation';

function App() {
  const path = window.location.pathname;

  return (
    <>
      <div className="pb-16">
        {path === '/' && <Home />}
        {path === '/votar' && <VotingPage />}
        {path === '/configuracoes' && <SettingsPage />}
        {path === '/resultados' && <ResultsPage />}
      </div>
      <Navigation />
    </>
  );
}

export default App;