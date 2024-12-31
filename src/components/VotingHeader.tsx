import React from 'react';
import { Vote } from 'lucide-react';

interface VotingHeaderProps {
  showForm: boolean;
  onToggleForm: () => void;
}

export function VotingHeader({ showForm, onToggleForm }: VotingHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center">
        <Vote className="w-8 h-8 mr-2" />
        Sistema de Votação
      </h1>
      <button
        onClick={onToggleForm}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        {showForm ? 'Fechar Formulário' : 'Adicionar Candidato'}
      </button>
    </div>
  );
}