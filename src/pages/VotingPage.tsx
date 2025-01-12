import React from 'react';
import { useVoting } from '../hooks/useVoting';
import { BackButton } from '../components/BackButton';
import { StatusMessage } from '../components/StatusMessage';
import { ConfirmVoteButton } from '../components/ConfirmVoteButton';
import CandidateCard from '../components/CandidateCard';
import { Vote } from 'lucide-react';

export function VotingPage() {
  const {
    candidates,
    selectedCandidate,
    votedCandidates,
    settings,
    handleToggleVote,
    handleSubmitVote,
  } = useVoting();

  const handleNewVote = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto relative">
        <BackButton />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Votação</h1>
          <h2 className="text-xl text-gray-600 mt-2">{settings.electionName}</h2>
        </div>

        {selectedCandidate && <StatusMessage type="selected" />}
        {votedCandidates.length > 0 && !selectedCandidate && (
          <div className="flex flex-col items-center gap-4 mb-8">
            <StatusMessage type="voted" />
            <button
              onClick={handleNewVote}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Vote className="w-5 h-5" />
              Novo Voto
            </button>
          </div>
        )}

        {candidates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {candidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onDelete={() => {}}
                  onToggleVote={handleToggleVote}
                  isSelected={selectedCandidate === candidate.id}
                  isVoted={votedCandidates.includes(candidate.id)}
                />
              ))}
            </div>

            <ConfirmVoteButton 
              onConfirm={handleSubmitVote}
              disabled={!selectedCandidate}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            Nenhum candidato disponível. Configure os candidatos nas configurações.
          </div>
        )}
      </div>
    </div>
  );
}