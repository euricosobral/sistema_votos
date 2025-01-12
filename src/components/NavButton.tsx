import React from 'react';
import { useRouting } from '../hooks/useRouting';

interface NavButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

export function NavButton({ href, icon, label, isActive }: NavButtonProps) {
  const { navigate } = useRouting();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
        isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}