import React from 'react';
import { Check } from 'lucide-react';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  onDelete: (id: string) => void;
  onToggleVote: (id: string) => void;
  isSelected: boolean;
  isVoted: boolean;
}

export default function CandidateCard({
  candidate,
  onDelete,
  onToggleVote,
  isSelected,
  isVoted,
}: CandidateCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${
      isSelected ? 'ring-2 ring-green-500' : ''
    } ${isVoted ? 'opacity-75' : ''}`}>
      <div className="relative">
        <img
          src={candidate.photoUrl}
          alt={candidate.name}
          className={`w-full h-48 object-cover ${
            isVoted ? 'filter grayscale' : isSelected ? 'opacity-90' : ''
          }`}
        />
        {isSelected && (
          <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Candidato Selecionado
            </div>
          </div>
        )}
        {isVoted && !isSelected && (
          <div className="absolute inset-0 bg-gray-500 bg-opacity-20 flex items-center justify-center">
            <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Voto Registrado
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{candidate.name}</h3>
        <p className="text-gray-600 mt-2">{candidate.information}</p>
        <div className="mt-4">
          <button
            onClick={() => onToggleVote(candidate.id)}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-md transition-colors ${
              isVoted
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : isSelected
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            disabled={isVoted}
          >
            <Check className="w-5 h-5 mr-2" />
            {isVoted ? 'Voto Registrado' : isSelected ? 'Selecionado' : 'Selecionar'}
          </button>
        </div>
      </div>
    </div>
  );
}