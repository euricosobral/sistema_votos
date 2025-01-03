import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const basePath = '/sistema_votos';
  
  return (
    <a 
      href={`${basePath}/`}
      className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900"
    >
      <ArrowLeft className="w-6 h-6" />
    </a>
  );
}