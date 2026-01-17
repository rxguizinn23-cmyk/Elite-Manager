
import React from 'react';
import { Club, Player } from '../types';
import { formatCurrency } from '../services/engine';

interface SquadProps {
  club: Club;
}

const Squad: React.FC<SquadProps> = ({ club }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Plantel</h2>
          <p className="text-slate-400">Total de {club.squad.length} jogadores sob contrato</p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-slate-400 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">Jogador</th>
              <th className="px-6 py-4">Posição</th>
              <th className="px-6 py-4 text-center">Idade</th>
              <th className="px-6 py-4 text-center">OVR</th>
              <th className="px-6 py-4 text-center">FIT</th>
              <th className="px-6 py-4">Valor de Mercado</th>
              <th className="px-6 py-4">Salário Anual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {club.squad.sort((a, b) => b.overall - a.overall).map((player) => (
              <tr key={player.id} className="hover:bg-slate-700/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="font-bold text-white group-hover:text-indigo-400">{player.name}</div>
                  <div className="text-[10px] text-slate-500">Potencial: {player.potential}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-black ${
                    player.role === 'GR' ? 'bg-yellow-900 text-yellow-200' :
                    player.role === 'DEF' ? 'bg-blue-900 text-blue-200' :
                    player.role === 'MÉD' ? 'bg-green-900 text-green-200' :
                    'bg-red-900 text-red-200'
                  }`}>
                    {player.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">{player.age}</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-lg font-mono font-bold text-indigo-400">{player.overall}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="w-12 bg-slate-900 h-1.5 rounded-full mx-auto">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${player.fitness}%` }}></div>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-slate-300">{formatCurrency(player.value)}</td>
                <td className="px-6 py-4 font-mono text-slate-400">{formatCurrency(player.salary)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Squad;
