import React from 'react';

export const GuiaBNCC: React.FC = () => {
  return (
    <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6 my-6 shadow-sm">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        💡 Guia Rápido: BNCC de Computação no PensaComp
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 text-slate-700">
        {/* O que é BNCC */}
        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-xs">
          <h3 className="font-semibold text-lg text-blue-800 mb-2">O que é a BNCC de Computação?</h3>
          <p className="text-sm leading-relaxed">
            É ensinar as crianças a pensarem com clareza e resolverem problemas do dia a dia. 
            Não é sobre formar programadores mirins, mas ensinar a quebrar desafios em partes menores, encontrar padrões e criar rotinas lógicas.
          </p>
        </div>

        {/* Atividade Desplugada */}
        <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-xs">
          <h3 className="font-semibold text-lg text-emerald-800 mb-2">🧩 Atividades Desplugadas</h3>
          <p className="text-sm leading-relaxed">
            <strong>Sem computador ou internet.</strong> Usam o próprio corpo, brincadeiras na quadra, papéis e jogos de tabuleiro.
          </p>
          <span className="inline-block mt-2 text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium">
            Exemplo: A brincadeira do "Robô Humano" na sala.
          </span>
        </div>

        {/* Atividade Plugada */}
        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-xs">
          <h3 className="font-semibold text-lg text-indigo-800 mb-2">💻 Atividades Plugadas</h3>
          <p className="text-sm leading-relaxed">
            <strong>Com telas e dispositivos.</strong> A lógica aprendida no papel é colocada em prática em softwares infantis como o ScratchJr ou jogos educativos.
          </p>
          <span className="inline-block mt-2 text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-medium">
            Exemplo: Montar blocos para mover o personagem na tela.
          </span>
        </div>
      </div>
    </div>
  );
};