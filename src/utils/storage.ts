import { Candidate, VotingSettings } from '../types';

export const saveToLocalStorage = (candidates: Candidate[]) => {
  localStorage.setItem('candidates', JSON.stringify(candidates));
};

export const loadFromLocalStorage = (): Candidate[] => {
  const data = localStorage.getItem('candidates');
  return data ? JSON.parse(data) : [];
};

export const saveSettings = (settings: VotingSettings) => {
  localStorage.setItem('votingSettings', JSON.stringify(settings));
};

export const loadSettings = (): VotingSettings => {
  const data = localStorage.getItem('votingSettings');
  return data ? JSON.parse(data) : { 
    maxVotesPerUser: 1,
    electionName: 'Nova Eleição'
  };
};