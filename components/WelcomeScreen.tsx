
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden p-6">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', size: '40px 40px' }}></div>

      <div className="max-w-3xl w-full relative z-10 text-center space-y-12">
        <div className="space-y-4 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
            <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.3em]">Temporada 24/25</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter leading-none">
            ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">MANAGER</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
            Assume o comando técnico, domina o mercado e escreve o teu nome na história do futebol europeu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          {[
            { title: 'Realismo Total', desc: 'Ligas licenciadas e plantéis atualizados.' },
            { title: 'Estratégia Pura', desc: 'Sistemas táticos dinâmicos e profundos.' },
            { title: 'Glória Eterna', desc: 'Ganha troféus e constrói o teu legado.' }
          ].map((feat, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-indigo-400 font-bold mb-2 uppercase text-xs tracking-widest">{feat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onStart}
            className="group relative px-12 py-5 bg-white text-slate-950 font-black text-xl rounded-2xl hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
          >
            <span className="relative z-10">INICIAR CARREIRA</span>
            <div className="absolute inset-0 bg-indigo-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          <p className="mt-6 text-slate-600 text-xs font-bold uppercase tracking-widest">Pressione para começar a sua jornada</p>
        </div>
      </div>

      {/* Tactic Board Decoration */}
      <div className="absolute bottom-10 left-10 opacity-10 hidden xl:block">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" stroke="white" strokeWidth="2">
          <circle cx="100" cy="75" r="20" />
          <path d="M0 75 H200 M100 0 V150" />
          <rect x="0" y="0" width="200" height="150" />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeScreen;
