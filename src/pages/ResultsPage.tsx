import React from 'react';
import { useVoting } from '../hooks/useVoting';
import { BackButton } from '../components/BackButton';
import { PieChart } from 'lucide-react';

export function ResultsPage() {
  const { candidates } = useVoting();
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto relative">
        <BackButton />
        
        <div className="flex items-center justify-center mb-8">
          <PieChart className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Resultados da Votação</h1>
        </div>

        <div className="grid gap-6">
          {candidates.map((candidate) => {
            const percentage = totalVotes > 0 
              ? ((candidate.votes / totalVotes) * 100).toFixed(1)
              : '0.0';

            return (
              <div key={candidate.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={candidate.photoUrl}
                    alt={candidate.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{candidate.name}</h3>
                    <p className="text-gray-600">{candidate.information}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Progresso</span>
                    <span className="text-gray-700">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Total de votos: {candidate.votes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-gray-600">
          Total geral de votos: {totalVotes}
        </div>
      </div>
    </div>
  );
}