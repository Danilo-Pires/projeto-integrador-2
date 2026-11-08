import React, { useState } from "react";
import { Monitor, BookOpen, Layers, Zap, ArrowRight, GraduationCap, Wifi, WifiOff, Globe, Sparkles, X, CheckCircle2, Clock, Target, Package } from "lucide-react";

// ─── Componente do Guia BNCC ───────────────────────────────────────────────

function GuiaBNCC() {
  return (
    <div className="w-full max-w-[960px] bg-blue-50/70 border border-blue-200 rounded-2xl p-6 mb-8 text-left shadow-xs">
      <h2 className="text-xl font-extrabold text-blue-900 mb-4 flex items-center gap-2">
        💡 Guia Rápido: BNCC de Computação no PensaComp
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-700">
        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-xs">
          <h3 className="font-bold text-[15px] text-blue-800 mb-1.5">O que é a BNCC de Computação?</h3>
          <p className="text-[13px] leading-relaxed text-slate-600">
            É ensinar as crianças a pensarem com clareza e resolverem problemas do dia a dia. Não é formar programadores mirins, mas ensinar a quebrar desafios em partes menores, encontrar padrões e criar rotinas lógicas.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-xs">
          <h3 className="font-bold text-[15px] text-amber-800 mb-1.5">🧩 Atividades Desplugadas</h3>
          <p className="text-[13px] leading-relaxed text-slate-600">
            <strong>Sem computador ou internet.</strong> Usam o próprio corpo, brincadeiras na quadra, papéis e materiais concretos do cotidiano.
          </p>
          <span className="inline-block mt-2 text-xs bg-amber-50 text-amber-800 px-2.5 py-1 rounded-md font-bold text-[11px]">
            Exemplo: A brincadeira do "Robô Humano".
          </span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-xs">
          <h3 className="font-bold text-[15px] text-blue-800 mb-1.5">💻 Atividades Plugadas</h3>
          <p className="text-[13px] leading-relaxed text-slate-600">
            <strong>Com telas e dispositivos.</strong> A lógica aprendida no papel é colocada em prática em softwares infantis como o ScratchJr ou jogos pedagógicos.
          </p>
          <span className="inline-block mt-2 text-xs bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md font-bold text-[11px]">
            Exemplo: Mover personagens com blocos visuais.
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Tipos e Dados de Atividades ───────────────────────────────────────────

type Tag = "plugada" | "desplugada";
type Ano = "Todos os Anos" | "1º Ano" | "2º Ano" | "3º Ano" | "4º Ano" | "5º Ano";

interface CardData {
  id: number;
  ano: "1º Ano" | "2º Ano" | "3º Ano" | "4º Ano" | "5º Ano";
  title: string;
  tag: Tag;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const ALL_CARDS: CardData[] = [
  // ─── 1º ANO ─────────────────────────────────────────────────────────────
  { id: 101, ano: "1º Ano", tag: "desplugada", title: "Robô Humano na Sala", Icon: Layers, description: "Um aluno finge ser um robô e obedece aos comandos verbais diretos dos colegas para atravessar a sala com segurança." },
  { id: 102, ano: "1º Ano", tag: "desplugada", title: "Trilha de Bambolês", Icon: BookOpen, description: "Atravessar o circuito pisando nos bambolês conforme as setas desenhadas no chão, trabalhando direção e sequência." },
  { id: 103, ano: "1º Ano", tag: "desplugada", title: "Classificação de Blocos Lógicos", Icon: Layers, description: "Separar peças geométricas por tamanho, cor e espessura em caixas físicas organizadas." },
  { id: 104, ano: "1º Ano", tag: "desplugada", title: "Dança dos Comandos", Icon: BookOpen, description: "Realizar sequências gestuais gravadas em cartões visuais (palma, pulo, giro) em ordem exata." },
  { id: 105, ano: "1º Ano", tag: "desplugada", title: "Caça aos Padrões na Escola", Icon: Layers, description: "Identificar e registrar repetições de formas e cores encontradas pelo pátio escolar." },
  { id: 106, ano: "1º Ano", tag: "desplugada", title: "Caminho do Tesouro", Icon: BookOpen, description: "Colocar setas de papel no chão para guiar o ursinho até a colmeia sem cair em armadilhas." },
  { id: 107, ano: "1º Ano", tag: "desplugada", title: "Cartões Condicionais (Se/Senão)", Icon: Layers, description: "Brincadeira: 'SE a carta for vermelha, bata palma; SENÃO, levante a mão'." },
  { id: 108, ano: "1º Ano", tag: "desplugada", title: "Ordenação por Tamanho", Icon: BookOpen, description: "Organizar brinquedos e objetos reais do menor para o maior formando uma fila lógica." },
  { id: 109, ano: "1º Ano", tag: "desplugada", title: "Torres com Cartões", Icon: Layers, description: "Montar estruturas físicas de blocos seguindo uma receita passo a passo apresentada em imagens." },
  { id: 110, ano: "1º Ano", tag: "desplugada", title: "Origami Dobra a Dobra", Icon: BookOpen, description: "Seguir o algoritmo visual de dobras no papel para criar um copo ou animal de dobradura." },
  { id: 111, ano: "1º Ano", tag: "plugada", title: "Desenho em Pixels no Paint", Icon: Monitor, description: "Criar figuras simples preenchendo malhas quadriculadas no computador para entender imagens digitais." },
  { id: 112, ano: "1º Ano", tag: "plugada", title: "Trilha Lógica no Code.org", Icon: Zap, description: "Mover o personagem com setas direcionais para frente, esquerda e direita no curso infantil." },
  { id: 113, ano: "1º Ano", tag: "plugada", title: "Histórias no ScratchJr", Icon: Monitor, description: "Programar um personagem para andar e emitir som ao ser tocado na tela do tablet/computador." },
  { id: 114, ano: "1º Ano", tag: "plugada", title: "Identificação de Formas no Tablet", Icon: Zap, description: "Agrupar e arrastar objetos digitais por cor e forma geométrica correspondente." },
  { id: 115, ano: "1º Ano", tag: "plugada", title: "Quebra-Cabeça de Sequência", Icon: Monitor, description: "Ordenar cenas da rotina diária em um jogo interativo no computador." },
  { id: 116, ano: "1º Ano", tag: "plugada", title: "Labirinto das Vogais", Icon: Zap, description: "Comandar a seta do teclado até a vogal correta que completa a palavra na tela." },
  { id: 117, ano: "1º Ano", tag: "plugada", title: "Primeiros Passos com o Mouse", Icon: Monitor, description: "Treinar cliques e arrasto montando figuras simples diretamente no navegador." },
  { id: 118, ano: "1º Ano", tag: "plugada", title: "Contagem Gamificada", Icon: Zap, description: "Associar o número exibido na tela à quantidade exata de elementos interativos." },
  { id: 119, ano: "1º Ano", tag: "plugada", title: "Sons e Comandos", Icon: Monitor, description: "Associar teclas do teclado do computador a efeitos sonoros e animações divertidas." },
  { id: 120, ano: "1º Ano", tag: "plugada", title: "Direção e Sentido Virtual", Icon: Zap, description: "Guiar um mascote virtual por uma grelha digital usando comandos diretos de setas." },

  // ─── 2º ANO ─────────────────────────────────────────────────────────────
  { id: 201, ano: "2º Ano", tag: "desplugada", title: "Algoritmo da Escovação", Icon: BookOpen, description: "A turma desenha o passo a passo exato para escovar os dentes e analisa o que acontece se mudar a ordem." },
  { id: 202, ano: "2º Ano", tag: "desplugada", title: "Jogo da Velha de Variáveis", Icon: Layers, description: "Jogar jogo da velha tradicional com regras dinâmicas modificadas por cartões sorteados." },
  { id: 203, ano: "2º Ano", tag: "desplugada", title: "Matriz no Chão com Fita", Icon: BookOpen, description: "Caminhar em uma malha quadriculada gigante no chão desviando de obstáculos físicos." },
  { id: 204, ano: "2º Ano", tag: "desplugada", title: "Decodificação de Mensagens", Icon: Layers, description: "Substituir números por letras específicas para ler uma frase secreta impressa." },
  { id: 205, ano: "2º Ano", tag: "desplugada", title: "Batalha Naval de Coordenadas", Icon: BookOpen, description: "Localizar objetos na grade do papel usando coordenadas simples de linhas e colunas (ex: A3, B2)." },
  { id: 206, ano: "2º Ano", tag: "desplugada", title: "Instruções de Montagem LEGO", Icon: Layers, description: "Um aluno dita o passo a passo de montagem sem que o colega veja a figura final." },
  { id: 207, ano: "2º Ano", tag: "desplugada", title: "Filtro Humano de Dados", Icon: BookOpen, description: "Classificar cartões físicos de animais por categorias (mamíferos, aves, aquáticos)." },
  { id: 208, ano: "2º Ano", tag: "desplugada", title: "Música e Algoritmo", Icon: Layers, description: "Tocar instrumentos de percussão da sala seguindo uma partitura feita de símbolos e formas." },
  { id: 209, ano: "2º Ano", tag: "desplugada", title: "Detetive de Erros (Bug Físico)", Icon: BookOpen, description: "Encontrar a etapa errada em uma receita de bolo impressa antes do resultado ser estragado." },
  { id: 210, ano: "2º Ano", tag: "desplugada", title: "Rede de Transmissão de Papel", Icon: Layers, description: "Simular o envio de mensagens entre 'computadores humanos' na fila da sala." },
  { id: 211, ano: "2º Ano", tag: "plugada", title: "Sanduíche no ScratchJr", Icon: Monitor, description: "Programar uma sequência de blocos visuais para montar um lanche virtual na tela." },
  { id: 212, ano: "2º Ano", tag: "plugada", title: "Blocos de Repetição no Code", Icon: Zap, description: "Usar loops simples no Code.org para evitar a repetição desnecessária de comandos." },
  { id: 213, ano: "2º Ano", tag: "plugada", title: "Lógica das Adições", Icon: Monitor, description: "Resolver pequenos desafios matemáticos no computador para liberar o pulo do personagem." },
  { id: 214, ano: "2º Ano", tag: "plugada", title: "Animação de Diálogo Simples", Icon: Zap, description: "Programar dois personagens no ScratchJr para trocarem falas balão por balão." },
  { id: 215, ano: "2º Ano", tag: "plugada", title: "Pixel Art Numerado", Icon: Monitor, description: "Pintar uma grade digital conforme a legenda de números para revelar uma imagem oculta." },
  { id: 216, ano: "2º Ano", tag: "plugada", title: "Caça aos Bugs Digitais", Icon: Zap, description: "Encontrar o bloco de código errado que impede o personagem de chegar ao objetivo final." },
  { id: 217, ano: "2º Ano", tag: "plugada", title: "História Interativa de Escolhas", Icon: Monitor, description: "Criar botões na tela que levam a caminhos e finais diferentes dentro da narrativa." },
  { id: 218, ano: "2º Ano", tag: "plugada", title: "Exploração no Google Earth", Icon: Zap, description: "Navegar digitalmente partindo da localização da escola até pontos famosos do município." },
  { id: 219, ano: "2º Ano", tag: "plugada", title: "Digitação Lógica", Icon: Monitor, description: "Digitar palavras em ordem alfabética rápida no teclado para avançar de fase." },
  { id: 220, ano: "2º Ano", tag: "plugada", title: "Comando de Loops no Scratch", Icon: Zap, description: "Programar uma estrela digital para piscar 5 vezes seguidas utilizando o bloco de repetição." },

  // ─── 3º ANO ─────────────────────────────────────────────────────────────
  { id: 301, ano: "3º Ano", tag: "desplugada", title: "Decompondo Problemas", Icon: Layers, description: "Os alunos aprendem a dividir situações do cotidiano em partes menores usando cartões ilustrados." },
  { id: 302, ano: "3º Ano", tag: "desplugada", title: "Algoritmo da Receita", Icon: BookOpen, description: "A turma escreve a sequência de uma receita simples e descobre que a ordem altera o resultado." },
  { id: 303, ano: "3º Ano", tag: "desplugada", title: "Batalha em Grade Milimetrada", Icon: Layers, description: "Programar o trajeto de um peão no papel para capturar a base inimiga antes da outra dupla." },
  { id: 304, ano: "3º Ano", tag: "desplugada", title: "Compressão de Imagens no Papel", Icon: BookOpen, description: "Representar imagens simples contando os quadros brancos e pretos em sequência numérica." },
  { id: 305, ano: "3º Ano", tag: "desplugada", title: "Ordenação Por Pesos", Icon: Layers, description: "Usar uma balança de pratos para ordenar caixas da mais leve à mais pesada com poucas medições." },
  { id: 306, ano: "3º Ano", tag: "desplugada", title: "Fluxograma da Rotina Escolar", Icon: BookOpen, description: "Desenhar um diagrama visual com decisões (Sim/Não) sobre as tarefas diárias do aluno." },
  { id: 307, ano: "3º Ano", tag: "desplugada", title: "Circuito Condicional na Quadra", Icon: Layers, description: "Circuito físico onde a tarefa a ser cumprida muda conforme a cor da bola sorteada." },
  { id: 308, ano: "3º Ano", tag: "desplugada", title: "Criptografia de César", Icon: BookOpen, description: "Construir discos de papel com o alfabeto deslocado para codificar e ler frases secretas." },
  { id: 309, ano: "3º Ano", tag: "desplugada", title: "Redes de Barbante", Icon: Layers, description: "Simular visualmente o caminho da informação viajando entre roteadores e servidores na sala." },
  { id: 310, ano: "3º Ano", tag: "desplugada", title: "Adivinhe o Número (Busca Binária)", Icon: BookOpen, description: "Descobrir um número de 1 a 100 fazendo perguntas estratégicas de 'é maior' ou 'é menor'." },
  { id: 311, ano: "3º Ano", tag: "plugada", title: "Labirinto no Scratch", Icon: Monitor, description: "Os alunos programam um personagem para atravessar labirintos usando blocos e condicionais." },
  { id: 312, ano: "3º Ano", tag: "plugada", title: "Batalha de Sequências", Icon: Zap, description: "Jogo competitivo no computador onde duplas comparam qual algoritmo resolve o desafio em menos passos." },
  { id: 313, ano: "3º Ano", tag: "plugada", title: "Jogo de Coleta de Itens", Icon: Monitor, description: "Criar uma variável de pontos no Scratch para somar moedas conforme o jogador as coleta." },
  { id: 314, ano: "3º Ano", tag: "plugada", title: "Simulador de Geometria", Icon: Zap, description: "Criar um programa que desenha automaticamente quadrados e triângulos perfeitos na tela." },
  { id: 315, ano: "3º Ano", tag: "plugada", title: "Quiz Interativo de Ciências", Icon: Monitor, description: "Programar um quiz com validações e mensagens instantâneas de acerto e erro." },
  { id: 316, ano: "3º Ano", tag: "plugada", title: "Composição Musical em Blocos", Icon: Zap, description: "Conectar notas e tempos musicais no Scratch para compor uma melodia digital própria." },
  { id: 317, ano: "3º Ano", tag: "plugada", title: "Uso de Sensores de Teclado", Icon: Monitor, description: "Mover o personagem pela tela associando as setas direcionais a comandos no Scratch." },
  { id: 318, ano: "3º Ano", tag: "plugada", title: "Pixel Art de Frações", Icon: Zap, description: "Preencher frações de uma grade no computador usando cores diferentes para representar partes." },
  { id: 319, ano: "3º Ano", tag: "plugada", title: "Depuração de Código em Grupo", Icon: Monitor, description: "Corrigir projetos do Scratch fornecidos pela professora que possuem erros de lógica propositais." },
  { id: 320, ano: "3º Ano", tag: "plugada", title: "Cartão Virtual Interativo", Icon: Zap, description: "Criar uma mensagem festiva com som e movimento acionados ao clicar nos objetos." },

  // ─── 4º ANO ─────────────────────────────────────────────────────────────
  { id: 401, ano: "4º Ano", tag: "desplugada", title: "Jogo dos Cartões Binários", Icon: Layers, description: "Representar números decimais acendendo e apagando cartões físicos de valores em bits (1, 2, 4, 8, 16)." },
  { id: 402, ano: "4º Ano", tag: "desplugada", title: "Algoritmo de Triagem de Lixo", Icon: BookOpen, description: "Criar regras lógicas de decisão para separação rápida de materiais recicláveis na escola." },
  { id: 403, ano: "4º Ano", tag: "desplugada", title: "Cartões Perfurados de Dados", Icon: Layers, description: "Entender o funcionamento dos primeiros computadores gravando informações em furos de papel." },
  { id: 404, ano: "4º Ano", tag: "desplugada", title: "Processador Humano", Icon: BookOpen, description: "Alunos assumem funções de Memória, Entrada, Saída e CPU para resolver cálculos matemáticos." },
  { id: 405, ano: "4º Ano", tag: "desplugada", title: "Roteamento de Pacotes", Icon: Layers, description: "Dividir uma carta em pedaços (pacotes) e remontá-la na ordem correta na mesa do destinatário." },
  { id: 406, ano: "4º Ano", tag: "desplugada", title: "Árvore de Decisão de Animais", Icon: BookOpen, description: "Criar um diagrama de classificação biológica baseado em perguntas com respostas Sim ou Não." },
  { id: 407, ano: "4º Ano", tag: "desplugada", title: "Torneio Amarra de Cadarço", Icon: Layers, description: "Comparar receitas e instruções escritas para ver qual método de amarração é mais eficiente." },
  { id: 408, ano: "4º Ano", tag: "desplugada", title: "Programação em Papel Quadriculado", Icon: BookOpen, description: "Traduzir um desenho em instruções de setas para que o colega reproduza exatamente igual." },
  { id: 409, ano: "4º Ano", tag: "desplugada", title: "Detecção de Erros com Paridade", Icon: Layers, description: "Truque da carta mágica: usar uma grade de cartas para identificar instantaneamente qual foi virada." },
  { id: 410, ano: "4º Ano", tag: "desplugada", title: "Decomposição do Sistema Solar", Icon: BookOpen, description: "Dividir o estudo dos planetas em partes e subproblemas menores distribuídos pela equipe." },
  { id: 411, ano: "4º Ano", tag: "plugada", title: "Guardião Ecológico", Icon: Monitor, description: "Programar um jogo de coleta seletiva no Scratch com variáveis de pontuação e alertas ambientais." },
  { id: 412, ano: "4º Ano", tag: "plugada", title: "Animação com Temporizador", Icon: Zap, description: "Criar um cronômetro regressivo na tela utilizando variáveis para limitar o tempo de jogo." },
  { id: 413, ano: "4º Ano", tag: "plugada", title: "Scratch e Coordenadas X e Y", Icon: Monitor, description: "Mover o personagem com precisão na tela utilizando o plano cartesiano de coordenadas." },
  { id: 414, ano: "4º Ano", tag: "plugada", title: "Ciclo da Água Interativo", Icon: Zap, description: "Animar as etapas de evaporação, condensação e chuva com comandos sequenciais no Scratch." },
  { id: 415, ano: "4º Ano", tag: "plugada", title: "Detecção de Colisão", Icon: Monitor, description: "Programar o jogo para perder pontos ou vidas sempre que o personagem tocar em um obstáculo." },
  { id: 416, ano: "4º Ano", tag: "plugada", title: "Simulação com LEGO Spike / Makey", Icon: Zap, description: "Conectar sensores físicos à plataforma para disparar animações e comandos na tela." },
  { id: 417, ano: "4º Ano", tag: "plugada", title: "Tradução Automática em Blocos", Icon: Monitor, description: "Construir um mini-dicionário interativo Português/Inglês usando blocos de texto no Scratch." },
  { id: 418, ano: "4º Ano", tag: "plugada", title: "Controle de Gravidade Simples", Icon: Zap, description: "Criar o efeito físico de pulo e queda em um jogo de plataforma infantil." },
  { id: 419, ano: "4º Ano", tag: "plugada", title: "HQ Digital Interativa", Icon: Monitor, description: "Montar uma história em quadrinhos na tela com balões de fala ativados por cliques do leitor." },
  { id: 420, ano: "4º Ano", tag: "plugada", title: "Análise de Dados em Planilha", Icon: Zap, description: "Inserir dados de pesquisas da turma e gerar gráficos coloridos automatizados." },

  // ─── 5º ANO ─────────────────────────────────────────────────────────────
  { id: 501, ano: "5º Ano", tag: "desplugada", title: "Busca Binária no Dicionário", Icon: BookOpen, description: "Encontrar palavras dividindo o dicionário pela metade em vez de buscar folha por folha." },
  { id: 502, ano: "5º Ano", tag: "desplugada", title: "Torres de Transmissão e Grafos", Icon: Layers, description: "Conectar cidades desenhadas no papel usando a menor quantidade de barbante (Caminho Mínimo)." },
  { id: 503, ano: "5º Ano", tag: "desplugada", title: "Criptografia Simétrica", Icon: BookOpen, description: "Trocar mensagens secretas na turma usando chaves e caixas de papelão trancadas com cadeados." },
  { id: 504, ano: "5º Ano", tag: "desplugada", title: "Ordenação Humana QuickSort", Icon: Layers, description: "Os alunos se organizam por altura em fila rápida aplicando o método de divisão e conquista." },
  { id: 505, ano: "5º Ano", tag: "desplugada", title: "Compactação de Texto (Huffman)", Icon: BookOpen, description: "Substituir palavras frequentes por símbolos pequenos para diminuir o tamanho da mensagem." },
  { id: 506, ano: "5º Ano", tag: "desplugada", title: "Modelagem do Fluxo da Escola", Icon: Layers, description: "Desenhar o mapa de processos da entrada, merenda, aula e saída da instituição." },
  { id: 507, ano: "5º Ano", tag: "desplugada", title: "IA Humana no Jogo da Velha", Icon: BookOpen, description: "Treinar um 'modelo de papel' que aprende as melhores jogadas contra competidores humanos." },
  { id: 508, ano: "5º Ano", tag: "desplugada", title: "Análise de Custo de Algoritmos", Icon: Layers, description: "Comparar duas soluções para o mesmo problema e descobrir qual gasta menos tempo e papel." },
  { id: 509, ano: "5º Ano", tag: "desplugada", title: "Filtro Anti-Spam Humano", Icon: BookOpen, description: "Criar regras condicionais compostas para classificar cartas da sala como prioritárias ou spam." },
  { id: 510, ano: "5º Ano", tag: "desplugada", title: "Simulação de Impasse (Deadlock)", Icon: Layers, description: "Entender o bloqueio quando dois processos esperam um pelo outro e propor soluções de prevenção." },
  { id: 511, ano: "5º Ano", tag: "plugada", title: "Quiz da Tabuada Interativo", Icon: Monitor, description: "Criar um gerador automático de perguntas matemáticas aleatórias com pontuação e ranking." },
  { id: 512, ano: "5º Ano", tag: "plugada", title: "Simulador de Ecossistema", Icon: Zap, description: "Programar presas e predadores digitais que se multiplicam ou desaparecem conforme regras do ambiente." },
  { id: 513, ano: "5º Ano", tag: "plugada", title: "Criação de Clones no Scratch", Icon: Monitor, description: "Gerar múltiplos obstáculos e moedas automaticamente na tela usando o bloco de clonagem." },
  { id: 514, ano: "5º Ano", tag: "plugada", title: "Chatbot de Dúvidas Escolares", Icon: Zap, description: "Programar um robô virtual que responde a perguntas frequentes de História e Geografia." },
  { id: 515, ano: "5º Ano", tag: "plugada", title: "Cidades Inteligentes Automatizadas", Icon: Monitor, description: "Programar um sistema de iluminação pública no Scratch acionado por sensor de luminosidade." },
  { id: 516, ano: "5º Ano", tag: "plugada", title: "Controle de Ranking com Listas", Icon: Zap, description: "Usar matrizes e listas digitais no Scratch para armazenar e ordenar os recordes dos jogadores." },
  { id: 517, ano: "5º Ano", tag: "plugada", title: "Design de Interface IHC (App)", Icon: Monitor, description: "Montar e testar a usabilidade das telas de um aplicativo escolar fictício no computador." },
  { id: 518, ano: "5º Ano", tag: "plugada", title: "Simulação de Física e Aceleração", Icon: Zap, description: "Implementar velocidade gradual e atrito nos movimentos do personagem." },
  { id: 519, ano: "5º Ano", tag: "plugada", title: "Análise de Algoritmos de Busca", Icon: Monitor, description: "Comparar a velocidade do computador ao buscar um item numa lista ordenada versus desordenada." },
  { id: 520, ano: "5º Ano", tag: "plugada", title: "Jogo Guardião do Meio Ambiente", Icon: Zap, description: "Projeto integrador completo com tela inicial de menu, fases progressivas e finalização." },
];

const TAG_META: Record<
  Tag,
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    strip: string;
    iconBg: string;
    btnBg: string;
    btnHover: string;
    TagIcon: React.ComponentType<{ className?: string }>;
  }
> = {
  plugada: {
    label: "Plugada",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
    strip: "#3b82f6",
    iconBg: "#dbeafe",
    btnBg: "#2563eb",
    btnHover: "#1d4ed8",
    TagIcon: Wifi,
  },
  desplugada: {
    label: "Desplugada",
    color: "#92400e",
    bg: "#fffbeb",
    border: "#fde68a",
    strip: "#f59e0b",
    iconBg: "#fef3c7",
    btnBg: "#d97706",
    btnHover: "#b45309",
    TagIcon: WifiOff,
  },
};

// ─── Modal com o Plano de Aula Completo ────────────────────────────────────

function LessonModal({ card, onClose }: { card: CardData; onClose: () => void }) {
  const meta = TAG_META[card.tag];
  const isPlugada = card.tag === "plugada";

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative border border-slate-200 text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tags e Ano */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[12px] font-extrabold uppercase px-3 py-1 bg-slate-100 text-slate-700 rounded-md">
            {card.ano} · Ensino Fundamental I
          </span>
          <span
            className="flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-extrabold"
            style={{
              color: meta.color,
              backgroundColor: meta.bg,
              border: `1.5px solid ${meta.border}`,
            }}
          >
            {card.label}
          </span>
        </div>

        {/* Título da Aula */}
        <h2 className="text-2xl font-black text-slate-800 mb-2">{card.title}</h2>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">{card.description}</p>

        <hr className="border-slate-100 mb-6" />

        {/* Código BNCC */}
        <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-blue-600" /> Habilidade BNCC de Computação
          </h4>
          <p className="text-xs text-blue-950 font-semibold leading-relaxed">
            {isPlugada
              ? `(EF0${card.ano[0]}CO02) Algoritmos e Programação: Identificar, construir e testar sequências de instruções lógicas em ambientes digitais.`
              : `(EF0${card.ano[0]}CO01) Pensamento Computacional Desplugado: Reconhecer, decompor e resolver problemas do cotidiano por meio de etapas ordenadas.`}
          </p>
        </div>

        {/* Objetivos de Aprendizagem */}
        <div className="mb-6">
          <h3 className="text-sm font-extrabold text-slate-800 mb-2.5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Objetivos Pedagógicos
          </h3>
          <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5">
            <li>Compreender o conceito central da atividade através da vivência prática.</li>
            <li>Desenvolver o raciocínio lógico, a ordenação de passos e a reflexão crítica.</li>
            <li>Estimular a autonomia na resolução colaborativa de problemas em sala.</li>
          </ul>
        </div>

        {/* Materiais Necessários */}
        <div className="mb-6">
          <h3 className="text-sm font-extrabold text-slate-800 mb-2.5 flex items-center gap-2">
            <Package className="w-4 h-4 text-amber-600" /> Materiais Necessários
          </h3>
          <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/60">
            {isPlugada
              ? "Dispositivos com acesso à internet (computadores, tablets ou celulares) ou software instalado (Scratch/ScratchJr/Code.org)."
              : "Materiais concretos do dia a dia escolar: papéis, lápis coloridos, cartões impressos, fita crepe ou espaço amplo na sala/quadra."}
          </p>
        </div>

        {/* Roteiro Passo a Passo */}
        <div className="mb-6">
          <h3 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600" /> Roteiro de Aplicação (50 minutos)
          </h3>
          <div className="space-y-3">
            <div className="border-l-2 border-indigo-400 pl-3 py-0.5">
              <span className="text-xs font-bold text-slate-800 block">1. Sensibilização e Provocação (10 min)</span>
              <span className="text-xs text-slate-600">Apresente o desafio inicial para a turma em roda de conversa, levantando hipóteses sobre a tarefa.</span>
            </div>
            <div className="border-l-2 border-indigo-500 pl-3 py-0.5">
              <span className="text-xs font-bold text-slate-800 block">2. Mão na Massa (30 min)</span>
              <span className="text-xs text-slate-600">
                {isPlugada
                  ? "Os alunos realizam a atividade nos computadores/tablets individualmente ou em duplas, testando e corrigindo eventuais falhas (bugs)."
                  : "Divida a turma em grupos pequenos para executar o circuito/desafio desplugado no papel ou no espaço da sala."}
              </span>
            </div>
            <div className="border-l-2 border-indigo-600 pl-3 py-0.5">
              <span className="text-xs font-bold text-slate-800 block">3. Sistematização e Fechamento (10 min)</span>
              <span className="text-xs text-slate-600">Reúna a turma para discutir as estratégias que deram certo e o que aprenderam com a atividade.</span>
            </div>
          </div>
        </div>

        {/* Botão de Fechar */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
          >
            Concluir Leitura
          </button>
        </div>

      </div>
    </div>
  );
}

// ─── Componente do Card ───────────────────────────────────────────────────

function ActivityCard({ card, onSelect }: { card: CardData; onSelect: (card: CardData) => void }) {
  const meta = TAG_META[card.tag];
  const ActivityIcon = card.Icon;
  const TagIcon = meta.TagIcon;

  return (
    <article
      className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
      style={{
        border: "1.5px solid #e2e8f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="h-[4px]" style={{ backgroundColor: meta.strip }} />
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: meta.iconBg }}
          >
            <ActivityIcon className="w-6 h-6" style={{ color: meta.color }} />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
              {card.ano}
            </span>
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-extrabold"
              style={{
                color: meta.color,
                backgroundColor: meta.bg,
                border: `1.5px solid ${meta.border}`,
              }}
            >
              <TagIcon className="w-3.5 h-3.5" />
              {meta.label}
            </div>
          </div>
        </div>

        <h3 className="font-extrabold text-[18px] leading-snug mb-2 text-slate-800">
          {card.title}
        </h3>
        <p className="text-[14px] leading-relaxed flex-1 mb-6 text-slate-500">
          {card.description}
        </p>

        <button
          onClick={() => onSelect(card)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-extrabold text-white transition-all duration-150 active:scale-95 cursor-pointer"
          style={{ backgroundColor: meta.btnBg }}
        >
          Visualizar Aula
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}

// ─── Componente Principal ──────────────────────────────────────────────────

export default function App() {
  const [selectedAno, setSelectedAno] = useState<Ano>("Todos os Anos");
  const [selectedCategory, setSelectedCategory] = useState<"todas" | Tag>("todas");
  const [activeLesson, setActiveLesson] = useState<CardData | null>(null);

  const ANOS: Ano[] = ["Todos os Anos", "1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"];

  const filteredCards = ALL_CARDS.filter((card) => {
    const matchesAno = selectedAno === "Todos os Anos" || card.ano === selectedAno;
    const matchesCategory = selectedCategory === "todas" || card.tag === selectedCategory;
    return matchesAno && matchesCategory;
  });

  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-10"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Header Principal */}
      <div className="w-full max-w-[960px] mb-6 text-center flex flex-col items-center">
        {/* SELO DE AUTORIA / IDEALIZAÇÃO */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-[13px] font-bold mb-4 shadow-2xs">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Plataforma elaborada e idealizada pela <strong>Profª Ariadne Capucci</strong></span>
        </div>

        <h1 className="text-[32px] font-extrabold leading-tight mb-2 text-slate-800">
          Pensamento Computacional
        </h1>
        <p className="text-[15px] font-semibold max-w-lg mx-auto leading-relaxed text-slate-500 mb-6">
          Selecione o ano letivo e explore os planos de aula com objetivos, materiais e roteiros pedagógicos alinhados à BNCC.
        </p>

        {/* BARRA DE FILTROS: Anos */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {ANOS.map((ano) => (
            <button
              key={ano}
              onClick={() => setSelectedAno(ano)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-extrabold transition-all cursor-pointer ${
                selectedAno === ano
                  ? "bg-amber-500 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {ano === "Todos os Anos" ? (
                <Globe className="w-4 h-4" />
              ) : (
                <GraduationCap className="w-4 h-4" />
              )}
              {ano}
            </button>
          ))}
        </div>

        {/* BARRA DE FILTROS: Categorias */}
        <div className="flex items-center justify-center">
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
            <button
              onClick={() => setSelectedCategory("todas")}
              className={`px-4 py-1.5 rounded-lg text-[12px] font-extrabold transition-all cursor-pointer ${
                selectedCategory === "todas" ? "bg-slate-800 text-white" : "text-slate-600"
              }`}
            >
              Todas as Modalidades
            </button>
            <button
              onClick={() => setSelectedCategory("plugada")}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-[12px] font-extrabold transition-all cursor-pointer ${
                selectedCategory === "plugada" ? "bg-blue-600 text-white" : "text-slate-600"
              }`}
            >
              <Wifi className="w-3 h-3" /> Plugadas
            </button>
            <button
              onClick={() => setSelectedCategory("desplugada")}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-[12px] font-extrabold transition-all cursor-pointer ${
                selectedCategory === "desplugada" ? "bg-amber-600 text-white" : "text-slate-600"
              }`}
            >
              <WifiOff className="w-3 h-3" /> Desplugadas
            </button>
          </div>
        </div>
      </div>

      {/* Guia Explicativo da BNCC */}
      <GuiaBNCC />

      {/* Indicador do Ano Selecionado */}
      <div className="w-full max-w-[960px] mb-4 flex items-center justify-between text-slate-700">
        <h2 className="text-lg font-extrabold flex items-center gap-2">
          <span>{selectedAno}</span>
          <span className="text-slate-400">·</span>
          <span className="text-amber-600">Ensino Fundamental I</span>
        </h2>
        <span className="text-[12px] font-bold bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-500">
          {filteredCards.length} atividade(s) exibida(s)
        </span>
      </div>

      {/* Grade de Cards das Atividades */}
      <div className="w-full max-w-[960px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {filteredCards.map((card) => (
          <ActivityCard key={card.id} card={card} onSelect={(item) => setActiveLesson(item)} />
        ))}
      </div>

      {/* Modal de Plano de Aula */}
      {activeLesson && (
        <LessonModal card={activeLesson} onClose={() => setActiveLesson(null)} />
      )}

      {/* Rodapé */}
      <p className="mt-12 text-[12px] font-semibold text-slate-400 text-center">
        PensaComp · Repositório Educacional · Idealizado pela Profª Ariadne Capucci · Licença CC BY-SA 4.0
      </p>
    </div>
  );
}