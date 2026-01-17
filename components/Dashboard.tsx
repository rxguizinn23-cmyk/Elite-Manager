
import React from 'react';
import { Club, Player } from '../types';
import { formatCurrency } from '../services/engine';

interface DashboardProps {
  club: Club;
  onNextDay: () => void;
  date: string;
}

const Dashboard: React.FC<DashboardProps> = ({ club, onNextDay, date }) => {
  const avgOverall = Math.round(club.squad.reduce((acc, p) => acc + p.overall, 0) / (club.squad.length || 1));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
      {/* Club Summary */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">{club.name}</h2>
              <p className="text-slate-400">{club.stadium} | {club.leagueId === 'pt' ? 'Portugal' : 'Europa'}</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase text-slate-500 font-bold">Orçamento</p>
              <p className="text-2xl font-mono text-emerald-400">{formatCurrency(club.budget)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-center">
              <p className="text-xs text-slate-500 uppercase">Plantel</p>
              <p className="text-xl font-bold">{club.squad.length}</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-center">
              <p className="text-xs text-slate-500 uppercase">Média OVR</p>
              <p className="text-xl font-bold text-blue-400">{avgOverall}</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-center">
              <p className="text-xs text-slate-500 uppercase">Moral</p>
              <p className="text-xl font-bold text-yellow-500">88%</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-center">
              <p className="text-xs text-slate-500 uppercase">Posição</p>
              <p className="text-xl font-bold text-white">4º</p>
            </div>
          </div>
        </div>

        {/* Squad List Mini */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
          <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center">
            <h3 className="font-semibold">Jogadores em Destaque</h3>
            <button className="text-xs text-blue-400 hover:underline">Ver Plantel Completo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/50 text-slate-400">
                <tr>
                  <th className="px-4 py-2">Nome</th>
                  <th className="px-4 py-2">Pos</th>
                  <th className="px-4 py-2">OVR</th>
                  <th className="px-4 py-2">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {club.squad.slice(0, 5).map((player) => (
                  <tr key={player.id} className="hover:bg-slate-700/30">
                    <td className="px-4 py-3 font-medium">{player.name}</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-bold">{player.role}</span></td>
                    <td className="px-4 py-3 font-bold text-blue-400">{player.overall}</td>
                    <td className="px-4 py-3">{formatCurrency(player.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sidebar Controls */}
      <div className="space-y-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl text-center">
          <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Calendário</p>
          <p className="text-2xl font-bold mb-6">{date}</p>
          <button 
            onClick={onNextDay}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 mb-4"
          >
            Avançar Jornada
          </button>
          <p className="text-xs text-slate-500 italic">Próximo Jogo: vs FC Porto (Casa)</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Objetivos da Direção
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center text-slate-300">
              <span>Terminar no Top 3</span>
              <span className="text-emerald-400">●</span>
            </li>
            <li className="flex justify-between items-center text-slate-300">
              <span>Chegar às meias-finais da Taça</span>
              <span className="text-yellow-400">●</span>
            </li>
            <li className="flex justify-between items-center text-slate-300">
              <span>Reduzir folha salarial em 10%</span>
              <span className="text-red-400">●</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
