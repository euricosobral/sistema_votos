import React, { ReactNode } from 'react';

interface NavButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

export function NavButton({ href, icon, label, isActive }: NavButtonProps) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
        isActive 
          ? 'text-blue-600' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </a>
  );
}