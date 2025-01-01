import React from 'react';
import { useRouting } from '../hooks/useRouting';

interface NavigationButtonProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function NavigationButton({ to, icon, title, description }: NavigationButtonProps) {
  const { createPath } = useRouting();
  
  return (
    <a
      href={createPath(to)}
      className="block w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
          {icon}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}