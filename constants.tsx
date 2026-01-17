
import { Role, League, Tactics } from './types';

export const INITIAL_TACTICS: Tactics = {
  formation: '4-3-3',
  style: 'Equilibrado',
  intensity: 70
};

export const LEAGUES_DATA: League[] = [
  {
    id: 'pt',
    name: 'Liga Portugal Betclic',
    country: 'Portugal',
    clubs: [
      { id: 'ben', name: 'SL Benfica', leagueId: 'pt', reputation: 86, budget: 65000000, stadium: 'Estádio da Luz', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'fcp', name: 'FC Porto', leagueId: 'pt', reputation: 83, budget: 40000000, stadium: 'Estádio do Dragão', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'scp', name: 'Sporting CP', leagueId: 'pt', reputation: 86, budget: 55000000, stadium: 'Estádio Alvalade', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'scb', name: 'SC Braga', leagueId: 'pt', reputation: 79, budget: 20000000, stadium: 'Estádio de Braga', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'vsc', name: 'Vitória SC', leagueId: 'pt', reputation: 76, budget: 12000000, stadium: 'D. Afonso Henriques', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'fam', name: 'FC Famalicão', leagueId: 'pt', reputation: 72, budget: 8000000, stadium: 'Municipal de Famalicão', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'mor', name: 'Moreirense FC', leagueId: 'pt', reputation: 71, budget: 4500000, stadium: 'C. Joaquim de Almeida Freitas', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'rio', name: 'Rio Ave FC', leagueId: 'pt', reputation: 70, budget: 5500000, stadium: 'Estádio dos Arcos', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'gil', name: 'Gil Vicente FC', leagueId: 'pt', reputation: 69, budget: 4000000, stadium: 'Cidade de Barcelos', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'est', name: 'Estoril Praia', leagueId: 'pt', reputation: 68, budget: 3500000, stadium: 'António Coimbra da Mota', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'stc', name: 'Santa Clara', leagueId: 'pt', reputation: 69, budget: 4500000, stadium: 'São Miguel', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'aro', name: 'FC Arouca', leagueId: 'pt', reputation: 68, budget: 3500000, stadium: 'Municipal de Arouca', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    id: 'en',
    name: 'Premier League',
    country: 'Inglaterra',
    clubs: [
      { id: 'mci', name: 'Manchester City', leagueId: 'en', reputation: 96, budget: 300000000, stadium: 'Etihad Stadium', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'ars', name: 'Arsenal FC', leagueId: 'en', reputation: 94, budget: 180000000, stadium: 'Emirates Stadium', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'liv', name: 'Liverpool FC', leagueId: 'en', reputation: 93, budget: 150000000, stadium: 'Anfield', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'che', name: 'Chelsea FC', leagueId: 'en', reputation: 88, budget: 250000000, stadium: 'Stamford Bridge', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'avl', name: 'Aston Villa', leagueId: 'en', reputation: 87, budget: 100000000, stadium: 'Villa Park', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'mun', name: 'Manchester United', leagueId: 'en', reputation: 88, budget: 200000000, stadium: 'Old Trafford', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'tot', name: 'Tottenham Hotspur', leagueId: 'en', reputation: 87, budget: 120000000, stadium: 'Tottenham Stadium', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'new', name: 'Newcastle United', leagueId: 'en', reputation: 86, budget: 140000000, stadium: 'St. James Park', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    id: 'es',
    name: 'La Liga EA Sports',
    country: 'Espanha',
    clubs: [
      { id: 'rma', name: 'Real Madrid', leagueId: 'es', reputation: 98, budget: 400000000, stadium: 'Santiago Bernabéu', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'fcb', name: 'FC Barcelona', leagueId: 'es', reputation: 94, budget: 85000000, stadium: 'Camp Nou', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'atm', name: 'Atlético de Madrid', leagueId: 'es', reputation: 91, budget: 110000000, stadium: 'Metropolitano', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'ath', name: 'Athletic Club', leagueId: 'es', reputation: 86, budget: 60000000, stadium: 'San Mamés', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'rso', name: 'Real Sociedad', leagueId: 'es', reputation: 85, budget: 50000000, stadium: 'Reale Arena', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'gir', name: 'Girona FC', leagueId: 'es', reputation: 83, budget: 45000000, stadium: 'Montilivi', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    id: 'de',
    name: 'Bundesliga',
    country: 'Alemanha',
    clubs: [
      { id: 'lev', name: 'Bayer Leverkusen', leagueId: 'de', reputation: 91, budget: 90000000, stadium: 'BayArena', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'bay', name: 'Bayern München', leagueId: 'de', reputation: 95, budget: 220000000, stadium: 'Allianz Arena', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'rbl', name: 'RB Leipzig', leagueId: 'de', reputation: 88, budget: 100000000, stadium: 'Red Bull Arena', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'bvb', name: 'Borussia Dortmund', leagueId: 'de', reputation: 89, budget: 95000000, stadium: 'Signal Iduna Park', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'fra', name: 'Eintracht Frankfurt', leagueId: 'de', reputation: 84, budget: 55000000, stadium: 'Deutsche Bank Park', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    id: 'it',
    name: 'Serie A Enilive',
    country: 'Itália',
    clubs: [
      { id: 'int', name: 'Inter Milão', leagueId: 'it', reputation: 93, budget: 90000000, stadium: 'San Siro', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'mil', name: 'AC Milan', leagueId: 'it', reputation: 89, budget: 75000000, stadium: 'San Siro', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'juv', name: 'Juventus FC', leagueId: 'it', reputation: 91, budget: 110000000, stadium: 'Allianz Stadium', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'nap', name: 'SSC Napoli', leagueId: 'it', reputation: 88, budget: 85000000, stadium: 'Diego Maradona', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 },
      { id: 'ata', name: 'Atalanta BC', leagueId: 'it', reputation: 87, budget: 60000000, stadium: 'Gewiss Stadium', squad: [], tactics: INITIAL_TACTICS, points: 0, played: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  }
];

export const NAMES = [
  'João', 'Diogo', 'Gonçalo', 'Pedro', 'Tiago', 'Rafael', 'António', 'Bruno', 'Cristiano', 'Duarte', 
  'Bernardo', 'Rúben', 'Francisco', 'Matheus', 'Otávio', 'David', 'Manuel', 'Ricardo', 'Nuno', 'Vítor',
  'Erling', 'Kylian', 'Jude', 'Harry', 'Kevin', 'Mohamed', 'Bukayo', 'Virgil', 'Martin', 'Rodri',
  'Robert', 'Lamine', 'Vinícius', 'Federico', 'Antoine', 'Frenkie', 'Pedri', 'Gavi', 'Luka', 'Ilkay',
  'Lautaro', 'Victor', 'Rafael', 'Khvicha', 'Dusan', 'Nicolo', 'Theo', 'Alessandro', 'Mike', 'Hakan',
  'Cole', 'Florian', 'Jamal', 'Kobbie', 'Arda', 'Endrick', 'Viktor', 'Warren', 'Pau', 'Savinho'
];

export const SURNAMES = [
  'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Lopes', 'Gomes',
  'Haaland', 'Mbappé', 'Bellingham', 'Kane', 'De Bruyne', 'Salah', 'Saka', 'Van Dijk', 'Odegaard', 'Hernandez',
  'Lewandowski', 'Yamal', 'Júnior', 'Valverde', 'Griezmann', 'De Jong', 'González', 'Paez', 'Modric', 'Gündogan',
  'Martínez', 'Osimhen', 'Leão', 'Kvaratskhelia', 'Vlahovic', 'Barella', 'Theo', 'Bastoni', 'Maignan', 'Calhanoglu',
  'Neves', 'Palmeiras', 'Wirtz', 'Musiala', 'Mainoo', 'Güler', 'Gyökeres', 'Zaïre-Emery', 'Cubarsí', 'Palmer'
];
