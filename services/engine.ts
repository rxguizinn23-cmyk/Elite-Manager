
import { Club, Player, Role } from '../types';
import { NAMES, SURNAMES } from '../constants';

export const generatePlayer = (minOverall: number, maxOverall: number, roleHint?: Role): Player => {
  const roles = [Role.GK, Role.DEF, Role.MID, Role.FWD];
  const role = roleHint || roles[Math.floor(Math.random() * roles.length)];
  
  // Random weighted name selection
  const name = `${NAMES[Math.floor(Math.random() * NAMES.length)]} ${SURNAMES[Math.floor(Math.random() * SURNAMES.length)]}`;
  
  // Overall logic
  const overall = Math.floor(Math.random() * (maxOverall - minOverall + 1)) + minOverall;
  
  // Market value reflects the 25/26 season valuation standards
  const age = Math.floor(Math.random() * (35 - 17 + 1)) + 17;
  const potential = Math.min(99, overall + Math.floor(Math.random() * (age < 23 ? 15 : 5)));
  
  const marketValue = Math.floor((Math.pow(overall, 4) / 150) * (age < 23 ? 1.5 : 1));
  const salary = Math.floor((marketValue / 120) + (overall * 800));
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    age,
    role,
    overall,
    value: Math.max(500000, marketValue),
    salary: Math.max(100000, salary),
    fitness: 100,
    morale: 85,
    potential,
    contractYears: Math.floor(Math.random() * 5) + 1
  };
};

export const generateSquadForClub = (clubReputation: number): Player[] => {
  const squad: Player[] = [];
  
  const distribution = [
    { role: Role.GK, count: 3 },
    { role: Role.DEF, count: 8 },
    { role: Role.MID, count: 7 },
    { role: Role.FWD, count: 5 }
  ];

  distribution.forEach(({ role, count }) => {
    for (let i = 0; i < count; i++) {
      // Variance in player quality within the squad
      const qualityOffset = Math.floor(Math.random() * 12) - 6; 
      const minOvr = Math.max(50, clubReputation + qualityOffset - 4);
      const maxOvr = Math.min(99, clubReputation + qualityOffset + 4);
      squad.push(generatePlayer(minOvr, maxOvr, role));
    }
  });

  return squad;
};

export const simulateMatch = (home: Club, away: Club) => {
  const homeStrength = home.squad.reduce((acc, p) => acc + p.overall, 0) / (home.squad.length || 1) + (home.reputation / 10) + 3;
  const awayStrength = away.squad.reduce((acc, p) => acc + p.overall, 0) / (away.squad.length || 1) + (away.reputation / 10);
  
  const diff = homeStrength - awayStrength;
  const homeGoals = Math.max(0, Math.floor(Math.random() * 4) + (diff > 4 ? 1 : 0));
  const awayGoals = Math.max(0, Math.floor(Math.random() * 3) + (diff < -4 ? 1 : 0));

  return { homeGoals, awayGoals };
};

export const formatCurrency = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M€`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}m€`;
  return `${value}€`;
};
