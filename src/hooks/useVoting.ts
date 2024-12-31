import { useState, useEffect } from 'react';
import { Candidate, VotingSettings } from '../types';
import { saveToLocalStorage, loadFromLocalStorage, saveSettings, loadSettings } from '../utils/storage';

const DEFAULT_SETTINGS: VotingSettings = {
  maxVotesPerUser: 1,
  electionName: 'Nova Eleição'
};

export function useVoting() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [votedCandidates, setVotedCandidates] = useState<string[]>([]);
  const [settings, setSettings] = useState<VotingSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const loadedCandidates = loadFromLocalStorage();
    const loadedSettings = loadSettings();
    setCandidates(loadedCandidates);
    setSettings(loadedSettings);
  }, []);

  const handleUpdateSettings = (newSettings: VotingSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const handleAddCandidate = (candidate: Candidate) => {
    const updatedCandidates = [...candidates, candidate];
    setCandidates(updatedCandidates);
    saveToLocalStorage(updatedCandidates);
  };

  const handleUpdateCandidate = (updatedCandidate: Candidate) => {
    const updatedCandidates = candidates.map(candidate => 
      candidate.id === updatedCandidate.id ? updatedCandidate : candidate
    );
    setCandidates(updatedCandidates);
    saveToLocalStorage(updatedCandidates);
  };

  const handleDeleteCandidate = (id: string) => {
    const updatedCandidates = candidates.filter((c) => c.id !== id);
    setCandidates(updatedCandidates);
    saveToLocalStorage(updatedCandidates);
    if (selectedCandidate === id) {
      setSelectedCandidate(null);
    }
  };

  const handleToggleVote = (id: string) => {
    if (!votedCandidates.includes(id) && votedCandidates.length < settings.maxVotesPerUser) {
      setSelectedCandidate(id);
    }
  };

  const handleSubmitVote = () => {
    if (!selectedCandidate) {
      alert('Por favor, selecione um candidato');
      return;
    }

    if (votedCandidates.length >= settings.maxVotesPerUser) {
      alert(`Você já atingiu o limite de ${settings.maxVotesPerUser} voto(s)`);
      return;
    }

    const updatedCandidates = candidates.map((candidate) => ({
      ...candidate,
      votes: candidate.id === selectedCandidate ? candidate.votes + 1 : candidate.votes,
    }));

    setCandidates(updatedCandidates);
    saveToLocalStorage(updatedCandidates);
    setVotedCandidates([...votedCandidates, selectedCandidate]);
    setSelectedCandidate(null);
    
    const remainingVotes = settings.maxVotesPerUser - (votedCandidates.length + 1);
    if (remainingVotes > 0) {
      alert(`Voto registrado com sucesso! Você ainda tem ${remainingVotes} voto(s) disponível(is).`);
    } else {
      alert('Voto registrado com sucesso! Você utilizou todos os seus votos.');
    }
  };

  const handleResetSystem = () => {
    if (window.confirm('Tem certeza que deseja resetar todo o sistema? Todos os dados serão perdidos.')) {
      localStorage.clear();
      setCandidates([]);
      setSelectedCandidate(null);
      setVotedCandidates([]);
      setSettings(DEFAULT_SETTINGS);
    }
  };

  return {
    candidates,
    selectedCandidate,
    votedCandidates,
    settings,
    handleAddCandidate,
    handleUpdateCandidate,
    handleDeleteCandidate,
    handleToggleVote,
    handleSubmitVote,
    handleUpdateSettings,
    handleResetSystem,
  };
}