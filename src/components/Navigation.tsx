import React from 'react';
import { Home as HomeIcon, Vote, Settings, PieChart } from 'lucide-react';
import { NavButton } from './NavButton';
import { useRouting } from '../hooks/useRouting';
import { ROUTES } from '../utils/routes';

export function Navigation() {
  const { currentPath } = useRouting();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-2">
      <div className="max-w-md mx-auto flex justify-around">
        <NavButton 
          href={ROUTES.HOME}
          icon={<HomeIcon className="w-6 h-6" />} 
          label="Início"
          isActive={currentPath === ROUTES.HOME} 
        />
        <NavButton 
          href={ROUTES.VOTING}
          icon={<Vote className="w-6 h-6" />} 
          label="Votar"
          isActive={currentPath === ROUTES.VOTING} 
        />
        <NavButton 
          href={ROUTES.RESULTS}
          icon={<PieChart className="w-6 h-6" />} 
          label="Resultados"
          isActive={currentPath === ROUTES.RESULTS} 
        />
        <NavButton 
          href={ROUTES.SETTINGS}
          icon={<Settings className="w-6 h-6" />} 
          label="Configurações"
          isActive={currentPath === ROUTES.SETTINGS} 
        />
      </div>
    </nav>
  );
}