
import React, { useState, useEffect, useCallback } from 'react';
import { GameState, Club, League, Role } from './types';
import { LEAGUES_DATA, INITIAL_TACTICS } from './constants';
import { generateSquadForClub } from './services/engine';
import Dashboard from './components/Dashboard';
import Squad from './components/Squad';
import ClubSelection from './components/ClubSelection';
import WelcomeScreen from './components/WelcomeScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'squad' | 'transfers' | 'tactics'>('dashboard');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<'welcome' | 'setup' | 'game'>('welcome');

  const handleStartSetup = () => {
    setCurrentStep('setup');
  };

  const startNewGame = (clubId: string, managerName: string) => {
    setLoading(true);
    // Simulate generation of the football world for 25/26
    setTimeout(() => {
      const seededLeagues = LEAGUES_DATA.map(league => ({
        ...league,
        clubs: league.clubs.map(club => {
          return { ...club, squad: generateSquadForClub(club.reputation) };
        })
      }));

      setGameState({
        currentDate: '1 de Julho, 2025',
        season: 2025,
        userClubId: clubId,
        managerName,
        leagues: seededLeagues,
        history: []
      });
      setCurrentStep('game');
      setLoading(false);
    }, 2000);
  };

  const handleNextDay = useCallback(() => {
    setGameState(prev => {
      if (!prev) return null;
      const parts = prev.currentDate.split(' ');
      const day = parseInt(parts[0]);
      const month = parts[2];
      return {
        ...prev,
        currentDate: `${day + 1} de ${month} 2025`
      };
    });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-10 text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-indigo-500/20 rounded-full"></div>
          <div className="w-24 h-24 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
          <div className="absolute inset-0 flex items-center justify-center font-black italic text-indigo-500">25/26</div>
        </div>
        <h1 className="text-3xl font-black tracking-tighter uppercase italic animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
          Gerando o Mundo do Futebol
        </h1>
        <p className="text-slate-400 text-sm mt-4 max-w-xs font-medium uppercase tracking-widest leading-relaxed">
          Atualizando plantéis, orçamentos e contratos para a nova temporada.
        </p>
      </div>
    );
  }

  if (currentStep === 'welcome') {
    return <WelcomeScreen onStart={handleStartSetup} />;
  }

  if (currentStep === 'setup') {
    return <ClubSelection onSelect={startNewGame} />;
  }

  if (!gameState) return null;

  const userClub = gameState.leagues
    .flatMap(l => l.clubs)
    .find(c => c.id === gameState.userClubId) as Club;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20">
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-xl font-black hidden sm:block tracking-tighter italic uppercase">
            ELITE MANAGER <span className="text-indigo-500">26</span>
          </h1>
        </div>

        <div className="flex gap-2 sm:gap-6">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Escritório
          </button>
          <button 
            onClick={() => setActiveTab('squad')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === 'squad' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Plantel
          </button>
          <button 
            onClick={() => setActiveTab('tactics')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === 'tactics' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Tática
          </button>
          <button 
            onClick={() => setActiveTab('transfers')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === 'transfers' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Mercado
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-slate-800/50 px-4 py-1.5 rounded-2xl border border-slate-700">
          <div className="text-right">
            <p className="text-[9px] text-indigo-400 font-black uppercase tracking-tighter leading-none">{gameState.managerName}</p>
            <p className="text-xs font-bold text-white leading-tight uppercase italic">{userClub.name}</p>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border border-slate-600 shadow-inner"></div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'dashboard' && (
          <Dashboard 
            club={userClub} 
            onNextDay={handleNextDay} 
            date={gameState.currentDate} 
          />
        )}
        
        {activeTab === 'squad' && <Squad club={userClub} />}

        {(activeTab === 'tactics' || activeTab === 'transfers') && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
            <div className="bg-slate-900 p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl max-w-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-xl border border-slate-700">
                 <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">Em Desenvolvimento</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                As funcionalidades avançadas de <strong>{activeTab === 'tactics' ? 'Estratégia Dinâmica' : 'Negociações de Mercado'}</strong> estarão disponíveis em breve nesta versão experimental.
              </p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="mt-10 bg-white text-slate-950 font-black uppercase tracking-widest px-10 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
              >
                Voltar ao Dashboard
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-6 py-3 flex justify-between text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">
        <div className="flex items-center gap-4">
          <span className="text-indigo-400">Temporada {gameState.season}/{gameState.season + 1}</span>
          <span className="h-3 w-px bg-slate-800"></span>
          <span>{gameState.leagues.find(l => l.clubs.some(c => c.id === userClub.id))?.name}</span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
            Simulação Live 26
          </span>
          <span className="text-slate-600">v2.0.0 ELITE</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
