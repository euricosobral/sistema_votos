import React from 'react';
import { Image } from 'lucide-react';
import { useBackground } from '../hooks/useBackground';

export function BackgroundManager() {
  const { handleBackgroundChange } = useBackground();

  return (
    <div className="absolute top-4 left-4 z-10">
      <label 
        htmlFor="background-upload" 
        className="flex items-center gap-2 px-3 py-2 text-sm bg-white/80 hover:bg-white/90 rounded-md shadow-sm cursor-pointer transition-all"
        title="Alterar plano de fundo"
      >
        <Image size={16} />
        <span className="text-gray-700">Plano de fundo</span>
      </label>
      <input
        id="background-upload"
        type="file"
        accept="image/*"
        onChange={handleBackgroundChange}
        className="hidden"
      />
    </div>
  );
}