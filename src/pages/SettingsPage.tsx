import React, { useState } from 'react';
import { Trash2, Settings } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import CandidateForm from '../components/CandidateForm';
import { CandidateList } from '../components/CandidateList';
import { VotingSettings } from '../components/VotingSettings';
import { useVoting } from '../hooks/useVoting';
import { Candidate } from '../types';

export function SettingsPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState<Candidate | null>(null);
  const { 
    candidates, 
    settings,
    handleAddCandidate, 
    handleDeleteCandidate, 
    handleUpdateCandidate,
    handleUpdateSettings,
    handleResetSystem
  } = useVoting();

  const handleAddOrUpdateCandidate = (candidate: Candidate) => {
    if (editingCandidate) {
      handleUpdateCandidate(candidate);
    } else {
      handleAddCandidate(candidate);
    }
    setShowForm(false);
    setEditingCandidate(null);
  };

  const handleEdit = (candidate: Candidate) => {
    setEditingCandidate(candidate);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto relative">
        <BackButton />
        
        <div className="flex items-center justify-center mb-12">
          <Settings className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Configurações do Sistema</h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Gerenciar Candidatos</h2>
              <button
                onClick={() => {
                  setShowForm(!showForm);
                  if (!showForm) setEditingCandidate(null);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {showForm ? 'Fechar Formulário' : 'Adicionar Candidato'}
              </button>
            </div>

            {showForm && (
              <div className="mb-8">
                <CandidateForm 
                  onAddCandidate={handleAddOrUpdateCandidate}
                  initialData={editingCandidate}
                />
              </div>
            )}

            {candidates.length > 0 ? (
              <CandidateList
                candidates={candidates}
                onEdit={handleEdit}
                onDelete={handleDeleteCandidate}
              />
            ) : (
              <div className="text-center text-gray-500 mt-8">
                Nenhum candidato cadastrado. Use o botão acima para adicionar novos candidatos.
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Configurações de Votação</h2>
            <VotingSettings 
              settings={settings}
              onUpdateSettings={handleUpdateSettings}
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleResetSystem}
              className="flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <Trash2 className="w-5 h-5 mr-2" />
              Resetar Sistema
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}