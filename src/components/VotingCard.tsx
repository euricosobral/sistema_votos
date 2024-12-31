import React from 'react';
import { Candidate } from '../types';

interface VotingCardProps {
  candidate: Candidate;
  isSelected: boolean;
  isVoted: boolean;
  onSelect: (id: string) => void;
}

export default function VotingCard({
  candidate,
  isSelected,
  isVoted,
  onSelect,
}: VotingCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      } ${isVoted ? 'opacity-50' : ''}`}
    >
      <button
        onClick={() => onSelect(candidate.id)}
        disabled={isVoted}
        className="w-full text-left p-4 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {candidate.photoUrl && (
          <img
            src={candidate.photoUrl}
            alt={candidate.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{candidate.name}</h3>
        <p className="text-gray-600 mb-4">{candidate.information}</p>
        
        <div className={`mt-4 w-full py-2 px-4 rounded-md text-center ${
          isSelected
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}>
          {isSelected ? 'Selecionado' : 'Clique para selecionar'}
        </div>
      </button>
    </div>
  );
}
