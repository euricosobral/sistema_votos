import React from 'react';
import { Home as HomeIcon, Vote, Settings, PieChart } from 'lucide-react';
import { NavButton } from './NavButton';
import { useRouting } from '../hooks/useRouting';

export function Navigation() {
  const { currentPath, createPath } = useRouting();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-2">
      <div className="max-w-md mx-auto flex justify-around">
        <NavButton 
          href={createPath('/')}
          icon={<HomeIcon className="w-6 h-6" />} 
          label="Início"
          isActive={currentPath === '/'} 
        />
        <NavButton 
          href={createPath('/votar')}
          icon={<Vote className="w-6 h-6" />} 
          label="Votar"
          isActive={currentPath === '/votar'} 
        />
        <NavButton 
          href={createPath('/resultados')}
          icon={<PieChart className="w-6 h-6" />} 
          label="Resultados"
          isActive={currentPath === '/resultados'} 
        />
        <NavButton 
          href={createPath('/configuracoes')}
          icon={<Settings className="w-6 h-6" />} 
          label="Configurações"
          isActive={currentPath === '/configuracoes'} 
        />
      </div>
    </div>
  );
}