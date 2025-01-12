import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouting } from '../hooks/useRouting';

export function BackButton() {
  const { navigate } = useRouting();
  
  const handleClick = () => {
    navigate('/');
  };

  return (
    <button 
      onClick={handleClick}
      className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
}