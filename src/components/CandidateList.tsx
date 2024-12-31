import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Candidate } from '../types';

interface CandidateListProps {
  candidates: Candidate[];
  onEdit: (candidate: Candidate) => void;
  onDelete: (id: string) => void;
}

export function CandidateList({ candidates, onEdit, onDelete }: CandidateListProps) {
  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <div key={candidate.id} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <img
              src={candidate.photoUrl}
              alt={candidate.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold">{candidate.name}</h3>
              <p className="text-gray-600 text-sm">{candidate.information}</p>
              <p className="text-sm text-gray-500 mt-1">Votos: {candidate.votes}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(candidate)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                title="Editar candidato"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(candidate.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                title="Excluir candidato"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}