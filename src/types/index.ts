export interface Candidate {
  id: string;
  name: string;
  photoUrl: string;
  information: string;
  votes: number;
}

export interface VotingSettings {
  maxVotesPerUser: 1 | 2 | 3;
  electionName: string;
  adminPassword: string;
}