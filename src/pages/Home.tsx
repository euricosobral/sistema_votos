import React, { useEffect } from 'react';
import { Settings, Vote, PieChart } from 'lucide-react';
import { NavigationButton } from '../components/NavigationButton';
import { BackgroundManager } from '../components/BackgroundManager';
import { useBackground } from '../hooks/useBackground';
import { ROUTES } from '../utils/routes';

export function Home() {
  const { initBackground } = useBackground();

  useEffect(() => {
    initBackground();
  }, [initBackground]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/90 to-blue-100/90 backdrop-blur-sm flex items-center justify-center">
      <BackgroundManager />
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Votação</h1>
          <p className="text-gray-600">Bem-vindo ao sistema de votação. Escolha uma opção para continuar.</p>
        </div>
        
        <div className="space-y-4">
          <NavigationButton
            to={ROUTES.VOTING}
            icon={<Vote className="w-6 h-6" />}
            title="Votar"
            description="Acesse o sistema de votação"
          />
          
          <NavigationButton
            to={ROUTES.RESULTS}
            icon={<PieChart className="w-6 h-6" />}
            title="Resultados"
            description="Visualize os resultados da votação"
          />
          
          <NavigationButton
            to={ROUTES.SETTINGS}
            icon={<Settings className="w-6 h-6" />}
            title="Configurações"
            description="Gerencie candidatos e configurações"
          />
        </div>
      </div>
    </div>
  );
}