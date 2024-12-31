import React from 'react';
import StatusMessage from '../components/StatusMessage';
import ConfirmVoteButton from '../components/ConfirmVoteButton';
import CandidateForm from '../components/CandidateForm';
import CandidateCard from '../components/CandidateCard';
import useVoting from '../hooks/useVoting';
import { Settings } from 'lucide-react';

export default function AdminPage() {
  const [showForm, setShowForm] = React.useState(false);
  const {
    candidates,
    selectedCandidate,
    votedCandidates,
    handleAddCandidate,
    handleEditCandidate,
    handleDeleteCandidate,
    handleToggleVote,
    handleSubmitVote,
  } = useVoting();

  const handleAddAndCloseForm = (candidate: any) => {
    handleAddCandidate(candidate);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Settings className="w-8 h-8 mr-2" />
            Configurações do Sistema
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {showForm ? 'Fechar Formulário' : 'Adicionar Candidato'}
          </button>
        </div>

        {showForm && (
          <div className="mb-8">
            <CandidateForm onAddCandidate={handleAddAndCloseForm} />
          </div>
        )}

        <StatusMessage 
          selectedCandidate={selectedCandidate}
          votedCandidates={votedCandidates}
        />

        {candidates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {candidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onDelete={handleDeleteCandidate}
                  onEdit={handleEditCandidate}
                  onToggleVote={handleToggleVote}
                  isSelected={selectedCandidate === candidate.id}
                  isVoted={votedCandidates.includes(candidate.id)}
                />
              ))}
            </div>

            <ConfirmVoteButton 
              onSubmitVote={handleSubmitVote}
              selectedCandidate={selectedCandidate}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            Nenhum candidato disponível. Adicione candidatos para começar a votação!
          </div>
        )}
      </div>
    </div>
  );
}
