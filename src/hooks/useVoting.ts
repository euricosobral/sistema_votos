import { useState, useEffect, useCallback } from 'react';
import { Candidate, VotingSettings } from '../types';
import { saveToLocalStorage, loadFromLocalStorage, saveSettings, loadSettings } from '../utils/storage';

const DEFAULT_SETTINGS: VotingSettings = {
  maxVotesPerUser: 1,
  electionName: 'Nova Eleição',
  adminPassword: '123456' // Senha padrão inicial
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
    setSettings((prevSettings) => ({
      ...DEFAULT_SETTINGS,
      ...loadedSettings,
      adminPassword: loadedSettings.adminPassword || prevSettings.adminPassword
    }));
  }, []);

  const validatePassword = useCallback((password: string): boolean => {
    return password === settings.adminPassword;
  }, [settings.adminPassword]);

  const handleUpdateSettings = useCallback((newSettings: VotingSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  }, []);

  const handleAddCandidate = useCallback((candidate: Candidate) => {
    setCandidates((prevCandidates) => {
      const updatedCandidates = [...prevCandidates, candidate];
      saveToLocalStorage(updatedCandidates);
      return updatedCandidates;
    });
  }, []);

  const handleUpdateCandidate = useCallback((updatedCandidate: Candidate) => {
    setCandidates((prevCandidates) => {
      const updatedCandidates = prevCandidates.map(candidate => 
        candidate.id === updatedCandidate.id ? updatedCandidate : candidate
      );
      saveToLocalStorage(updatedCandidates);
      return updatedCandidates;
    });
  }, []);

  const handleDeleteCandidate = useCallback((id: string) => {
    setCandidates((prevCandidates) => {
      const updatedCandidates = prevCandidates.filter((c) => c.id !== id);
      saveToLocalStorage(updatedCandidates);
      return updatedCandidates;
    });
    
    setSelectedCandidate((prevSelected) => 
      prevSelected === id ? null : prevSelected
    );
  }, []);

  const handleToggleVote = useCallback((id: string) => {
    if (!votedCandidates.includes(id) && votedCandidates.length < settings.maxVotesPerUser) {
      setSelectedCandidate(id);
    }
  }, [votedCandidates, settings.maxVotesPerUser]);

  const handleSubmitVote = useCallback(() => {
    if (!selectedCandidate) {
      alert('Por favor, selecione um candidato');
      return;
    }

    if (votedCandidates.length >= settings.maxVotesPerUser) {
      alert(`Você já atingiu o limite de ${settings.maxVotesPerUser} voto(s)`);
      return;
    }

    setCandidates((prevCandidates) => {
      const updatedCandidates = prevCandidates.map((candidate) => ({
        ...candidate,
        votes: candidate.id === selectedCandidate ? candidate.votes + 1 : candidate.votes,
      }));
      saveToLocalStorage(updatedCandidates);
      return updatedCandidates;
    });

    setVotedCandidates((prev) => [...prev, selectedCandidate]);
    setSelectedCandidate(null);
    
    const remainingVotes = settings.maxVotesPerUser - (votedCandidates.length + 1);
    if (remainingVotes > 0) {
      alert(`Voto registrado com sucesso! Você ainda tem ${remainingVotes} voto(s) disponível(is).`);
    } else {
      alert('Voto registrado com sucesso! Você utilizou todos os seus votos.');
    }
  }, [selectedCandidate, votedCandidates.length, settings.maxVotesPerUser]);

  const handleResetVotes = useCallback(() => {
    setSelectedCandidate(null);
    setVotedCandidates([]);
  }, []);

  const handleResetSystem = useCallback(() => {
    if (window.confirm('Tem certeza que deseja resetar todo o sistema? Todos os dados serão perdidos.')) {
      localStorage.clear();
      setCandidates([]);
      setSelectedCandidate(null);
      setVotedCandidates([]);
      setSettings(DEFAULT_SETTINGS);
    }
  }, []);

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
    handleResetVotes,
    validatePassword,
  };
}