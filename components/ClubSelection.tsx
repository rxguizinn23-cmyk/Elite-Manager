
import React, { useState } from 'react';
import { League, Club } from '../types';
import { LEAGUES_DATA } from '../constants';

interface ClubSelectionProps {
  onSelect: (clubId: string, managerName: string) => void;
}

const ClubSelection: React.FC<ClubSelectionProps> = ({ onSelect }) => {
  const [selectedLeagueId, setSelectedLeagueId] = useState(LEAGUES_DATA[0].id);
  const [managerName, setManagerName] = useState('');
  const [error, setError] = useState('');

  const selectedLeague = LEAGUES_DATA.find(l => l.id === selectedLeagueId)!;

  const handleStart = (clubId: string) => {
    if (!managerName.trim()) {
      setError('Por favor, insere o teu nome de treinador.');
      return;
    }
    onSelect(clubId, managerName);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 py-12">
      <div className="max-w-5xl w-full space-y-8 animate-fadeIn">
        <div className="text-center">
          <h1 className="text-5xl font-black text-white mb-2 tracking-tighter italic uppercase">
            ELITE <span className="text-indigo-500">MANAGER</span>
          </h1>
          <p className="text-slate-400 uppercase tracking-[0.3em] text-xs font-bold">Configuração da Carreira</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10 mb-10">
            <label className="block text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">Identidade do Treinador</label>
            <input 
              type="text" 
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
              placeholder="Nome do Treinador..."
              className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
            />
            {error && <p className="text-red-500 text-xs mt-2 font-bold">{error}</p>}
          </div>

          <div className="relative z-10 mb-8">
            <label className="block text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">Selecionar Liga</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {LEAGUES_DATA.map(league => (
                <button
                  key={league.id}
                  onClick={() => setSelectedLeagueId(league.id)}
                  className={`py-3 px-2 rounded-xl text-xs font-black transition-all border ${
                    selectedLeagueId === league.id 
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 scale-105' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:border-slate-600'
                  }`}
                >
                  {league.name.split(' ')[0]}
                  <span className="block opacity-50 font-normal text-[9px] mt-0.5">{league.country}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <label className="block text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">Escolher Clube em {selectedLeague.name}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {selectedLeague.clubs.map(club => (
                <button
                  key={club.id}
                  onClick={() => handleStart(club.id)}
                  className="group bg-slate-800/40 hover:bg-indigo-600/10 border border-slate-700 hover:border-indigo-500/50 p-5 rounded-2xl text-left transition-all flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors uppercase italic">{club.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold group-hover:text-slate-400">{club.stadium}</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[9px] text-slate-500 font-black uppercase mb-1">Reputação</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${i < Math.round(club.reputation/20) ? 'bg-indigo-500' : 'bg-slate-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
          Todas as marcas e nomes de clubes são propriedade dos respetivos detentores.
        </p>
      </div>
    </div>
  );
};

export default ClubSelection;
