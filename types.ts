
export enum Role {
  GK = 'GR',
  DEF = 'DEF',
  MID = 'MÉD',
  FWD = 'AVA'
}

export interface Player {
  id: string;
  name: string;
  age: number;
  role: Role;
  overall: number;
  value: number;
  salary: number;
  fitness: number; // 0-100
  morale: number; // 0-100
  potential: number;
  contractYears: number;
}

export interface Club {
  id: string;
  name: string;
  leagueId: string;
  reputation: number; // 0-100
  budget: number;
  stadium: string;
  squad: Player[];
  tactics: Tactics;
  points: number;
  played: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface Tactics {
  formation: string;
  style: 'Posse' | 'Contra-Ataque' | 'Pressão Alta' | 'Equilibrado';
  intensity: number; // 0-100
}

export interface League {
  id: string;
  name: string;
  country: string;
  clubs: Club[];
}

export interface GameState {
  currentDate: string;
  season: number;
  userClubId: string;
  managerName: string;
  leagues: League[];
  history: any[];
}
