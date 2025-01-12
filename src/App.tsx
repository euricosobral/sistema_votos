import React from 'react';
import { Home } from './pages/Home';
import { VotingPage } from './pages/VotingPage';
import { SettingsPage } from './pages/SettingsPage';
import { ResultsPage } from './pages/ResultsPage';
import { Navigation } from './components/Navigation';
import { useRouting } from './hooks/useRouting';

function App() {
  const { currentPath } = useRouting();

  // Função para determinar qual componente renderizar
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/votar':
        return <VotingPage />;
      case '/configuracoes':
        return <SettingsPage />;
      case '/resultados':
        return <ResultsPage />;
      default:
        return <Home />; // Fallback para a página inicial
    }
  };

  return (
    <>
      <div className="pb-16">
        {renderPage()}
      </div>
      <Navigation />
    </>
  );
}

export default App;