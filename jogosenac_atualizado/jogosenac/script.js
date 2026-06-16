
// ============================================
//  FINANCAMPEÃO – SCRIPT.JS
//  Lógica completa do jogo financeiro
// ============================================
 
// ---- BANCO DE PERGUNTAS ----
const PERGUNTAS = [
 
  // ======== OPERAÇÕES BÁSICAS ========
  {
    categoria: "op",
    icone: "➕",
    labelCategoria: "➕ Operações Básicas",
    badgeClass: "badge-op",
    pergunta: "Você ganhou R$ 350,00 de mesada e gastou R$ 127,50 num tênis. Quanto sobrou?",
    dica: "💡 Dica: Subtração! Quanto sobra quando você paga alguma coisa?",
    opcoes: ["R$ 222,50", "R$ 227,50", "R$ 212,50", "R$ 232,00"],
    correta: 0,
    explicacao: "R$ 350,00 – R$ 127,50 = R$ 222,50. Sempre que gastar, subtrai do saldo!"
  },
  {
    categoria: "op",
    icone: "🛒",
    labelCategoria: "➕ Operações Básicas",
    badgeClass: "badge-op",
    pergunta: "3 amigos juntaram dinheiro para um presente: R$ 45,00 + R$ 62,00 + R$ 33,00. Qual o total arrecadado?",
    dica: "💡 Dica: Some os valores de cada amigo!",
    opcoes: ["R$ 130,00", "R$ 140,00", "R$ 145,00", "R$ 135,00"],
    correta: 1,
    explicacao: "45 + 62 + 33 = R$ 140,00. Sempre confira as parcelas!"
  },
  {
    categoria: "op",
    icone: "🎮",
    labelCategoria: "➕ Operações Básicas",
    badgeClass: "badge-op",
    pergunta: "Um jogo custa R$ 240,00 e pode ser pago em 6 parcelas iguais. Qual o valor de cada parcela?",
    dica: "💡 Dica: Divisão! Divide o total pelo número de parcelas.",
    opcoes: ["R$ 45,00", "R$ 40,00", "R$ 35,00", "R$ 50,00"],
    correta: 1,
    explicacao: "R$ 240 ÷ 6 = R$ 40,00 por parcela. Parcelar sem juros é prático, mas exige controle!"
  },
 
  // ======== JUROS SIMPLES ========
  {
    categoria: "js",
    icone: "📈",
    labelCategoria: "📈 Juros Simples",
    badgeClass: "badge-js",
    pergunta: "Você emprestou R$ 1.000,00 com juros simples de 3% ao mês por 4 meses. Qual o valor dos juros?",
    dica: "💡 Fórmula: J = C × i × t  (Capital × Taxa × Tempo)",
    opcoes: ["R$ 120,00", "R$ 90,00", "R$ 100,00", "R$ 140,00"],
    correta: 0,
    explicacao: "J = 1000 × 0,03 × 4 = R$ 120,00. O montante total seria R$ 1.120,00."
  },
  {
    categoria: "js",
    icone: "💳",
    labelCategoria: "📈 Juros Simples",
    badgeClass: "badge-js",
    pergunta: "Maria fez uma dívida de R$ 500,00 com juros simples de 5% ao mês. Após 2 meses, qual o montante total?",
    dica: "💡 Montante = C + J  →  J = C × i × t",
    opcoes: ["R$ 600,00", "R$ 550,00", "R$ 525,00", "R$ 575,00"],
    correta: 0,
    explicacao: "J = 500 × 0,05 × 2 = R$ 50. Montante = 500 + 50 + 50 = R$ 600,00."
  },
  {
    categoria: "js",
    icone: "🏦",
    labelCategoria: "📈 Juros Simples",
    badgeClass: "badge-js",
    pergunta: "Um banco oferece 2% de juros simples ao mês. Se você investir R$ 800,00 por 3 meses, quanto receberá de juros?",
    dica: "💡 J = C × i × t  →  Substitua os valores!",
    opcoes: ["R$ 40,00", "R$ 48,00", "R$ 64,00", "R$ 36,00"],
    correta: 1,
    explicacao: "J = 800 × 0,02 × 3 = R$ 48,00. Investir gera dinheiro — aprenda a colocar seu dinheiro pra trabalhar!"
  },
 
  // ======== REGRA DE TRÊS ========
  {
    categoria: "r3",
    icone: "⚖️",
    labelCategoria: "⚖️ Regra de Três",
    badgeClass: "badge-r3",
    pergunta: "Se 4 canetas custam R$ 12,00, quanto custam 7 canetas do mesmo tipo?",
    dica: "💡 Regra de 3: 4 → R$12 / 7 → R$?",
    opcoes: ["R$ 21,00", "R$ 19,00", "R$ 18,00", "R$ 24,00"],
    correta: 0,
    explicacao: "4/12 = 7/x  →  x = (7×12)/4 = R$ 21,00. Comparar preços unitários ajuda a economizar!"
  },
  {
    categoria: "r3",
    icone: "🍕",
    labelCategoria: "⚖️ Regra de Três",
    badgeClass: "badge-r3",
    pergunta: "Uma pizzaria faz 3 pizzas com 900g de farinha. Para fazer 5 pizzas, quantos gramas serão necessários?",
    dica: "💡 Relação direta: mais pizzas → mais farinha",
    opcoes: ["1.200g", "1.500g", "1.350g", "1.800g"],
    correta: 1,
    explicacao: "3 → 900 / 5 → x  |  x = (5×900)/3 = 1.500g. A regra de 3 resolve proporções do dia a dia!"
  },
  {
    categoria: "r3",
    icone: "⛽",
    labelCategoria: "⚖️ Regra de Três",
    badgeClass: "badge-r3",
    pergunta: "Um carro percorre 300 km com 25 litros de gasolina. Quantos litros precisará para percorrer 180 km?",
    dica: "💡 Proporção direta: mais km → mais litros",
    opcoes: ["12 litros", "15 litros", "18 litros", "10 litros"],
    correta: 1,
    explicacao: "300/25 = 180/x  →  x = (180×25)/300 = 15 litros. Calcular combustível evita sustos na estrada!"
  },
 
  // ======== CONSUMO CONSCIENTE ========
  {
    categoria: "cc",
    icone: "🌱",
    labelCategoria: "🌱 Consumo Consciente",
    badgeClass: "badge-cc",
    pergunta: "João compra café no trabalho por R$ 5,00 todo dia útil (22 dias/mês). Quanto gasta em 1 ano nesse hábito?",
    dica: "💡 Calcule o mensal e multiplique por 12 meses!",
    opcoes: ["R$ 1.200,00", "R$ 1.100,00", "R$ 1.320,00", "R$ 1.440,00"],
    correta: 2,
    explicacao: "22 × R$5 = R$110/mês × 12 = R$ 1.320,00/ano! Pequenos gastos diários formam grandes valores — reflita antes de comprar por hábito."
  },
  {
    categoria: "cc",
    icone: "📱",
    labelCategoria: "🌱 Consumo Consciente",
    badgeClass: "badge-cc",
    pergunta: "Ana quer trocar o celular a cada ano, mas o modelo custa R$ 4.800,00. Se ela poupar R$ 400,00 por mês, em quantos meses conseguirá comprar à vista?",
    dica: "💡 Divida o preço pela parcela mensal de poupança.",
    opcoes: ["10 meses", "12 meses", "14 meses", "8 meses"],
    correta: 1,
    explicacao: "R$4.800 ÷ R$400 = 12 meses. Comprar à vista evita juros e é sempre mais barato!"
  },
  {
    categoria: "cc",
    icone: "🛍️",
    labelCategoria: "🌱 Consumo Consciente",
    badgeClass: "badge-cc",
    pergunta: "Pedro ganha R$ 1.500,00 e gasta R$ 1.800,00 por mês. Qual dessas afirmações é CORRETA?",
    dica: "💡 Compare a renda com os gastos — está equilibrado?",
    opcoes: [
      "Pedro está no azul, tudo certo!",
      "Pedro está endividado e precisa rever seu orçamento",
      "Pedro tem R$ 300 sobrando todo mês",
      "Pedro só precisa pedir emprestado uma vez"
    ],
    correta: 1,
    explicacao: "Pedro gasta mais do que ganha: déficit de R$ 300/mês. Se não mudar os hábitos, acumulará dívidas. Orçamento é fundamental!"
  },
  {
    categoria: "cc",
    icone: "💡",
    labelCategoria: "🌱 Consumo Consciente",
    badgeClass: "badge-cc",
    pergunta: "Qual hábito representa CONSUMO CONSCIENTE?",
    dica: "💡 Pense: qual dessas atitudes cuida do seu bolso E do planeta?",
    opcoes: [
      "Comprar tudo que está na promoção",
      "Parcelar sempre no máximo de vezes",
      "Pesquisar preços antes de comprar e comprar só o necessário",
      "Usar o cartão de crédito como renda extra"
    ],
    correta: 2,
    explicacao: "Pesquisar preços e comprar só o necessário é consumo consciente! Promoção só vale se você PRECISAVA do produto."
  }
];
 
// ---- ESTADO DO JOGO ----
let estado = {
  nomeJogador: '',
  perguntas: [],
  indiceAtual: 0,
  pontos: 0,
  acertos: 0,
  erros: 0,
  respostas: [],
  timerID: null,
  tempoRestante: 20
};
 
// ---- UTILITÁRIOS ----
function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(t => {
    t.classList.remove('ativa');
    t.style.display = 'none';
  });
  const tela = document.getElementById(id);
  tela.style.display = 'flex';
  requestAnimationFrame(() => tela.classList.add('ativa'));
}
 
function embaralhar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
 
function tocarFeedback(tipo) {
  // Vibração se disponível
  if (navigator.vibrate) {
    if (tipo === 'ok') navigator.vibrate([100]);
    else if (tipo === 'erro') navigator.vibrate([80, 50, 80]);
  }
}
 
// ---- INICIAR JOGO ----
function iniciarJogo() {
  const input = document.getElementById('nome-jogador');
  const nome = input.value.trim();
  if (!nome) {
    input.style.borderColor = '#ff4d4d';
    input.placeholder = 'Ei! Coloca seu nome primeiro! 👆';
    input.focus();
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'Digite seu nome, campeão! 🏅';
    }, 1800);
    return;
  }
 
  estado.nomeJogador = nome;
  estado.perguntas = embaralhar(PERGUNTAS).slice(0, 10);
  estado.indiceAtual = 0;
  estado.pontos = 0;
  estado.acertos = 0;
  estado.erros = 0;
  estado.respostas = [];
 
  mostrarTela('tela-jogo');
  document.getElementById('hud-nome').textContent = nome.length > 10 ? nome.slice(0, 10) + '…' : nome;
  renderizarPergunta();
}
 
// ---- RENDERIZAR PERGUNTA ----
function renderizarPergunta() {
  const p = estado.perguntas[estado.indiceAtual];
 
  // HUD
  document.getElementById('hud-questao').textContent = `${estado.indiceAtual + 1}/10`;
  document.getElementById('hud-pontos').textContent = estado.pontos;
 
  // Categoria
  const badge = document.getElementById('categoria-badge');
  badge.textContent = p.labelCategoria;
  badge.className = 'categoria-badge ' + p.badgeClass;
 
  // Pergunta
  document.getElementById('pergunta-icone').textContent = p.icone;
  document.getElementById('pergunta-texto').textContent = p.pergunta;
 
  // Dica
  const dicaBox = document.getElementById('dica-box');
  if (p.dica) {
    dicaBox.style.display = 'block';
    document.getElementById('dica-texto').textContent = p.dica;
  } else {
    dicaBox.style.display = 'none';
  }
 
  // Alternativas
  const altDiv = document.getElementById('alternativas');
  altDiv.innerHTML = '';
  p.opcoes.forEach((op, idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn-alt';
    btn.textContent = op;
    btn.onclick = () => responder(idx);
    altDiv.appendChild(btn);
  });
 
  // Limpa feedback e botão próxima
  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';
  document.getElementById('btn-proxima').style.display = 'none';

  // Esconde Neymar ao carregar nova pergunta
  esconderNeymar();
 
  // Inicia timer
  iniciarTimer();
}
 
// ---- TIMER ----
function iniciarTimer() {
  clearInterval(estado.timerID);
  estado.tempoRestante = 60;
  atualizarTimer();
 
  estado.timerID = setInterval(() => {
    estado.tempoRestante--;
    atualizarTimer();
 
    if (estado.tempoRestante <= 0) {
      clearInterval(estado.timerID);
      timeoutResposta();
    }
  }, 1000);
}
 
function atualizarTimer() {
  const t = estado.tempoRestante;
  const barra = document.getElementById('timer-barra');
  const texto = document.getElementById('timer-texto');
  const pct = (t / 60) * 100;
  barra.style.width = pct + '%';
  texto.textContent = `⏱️ ${t}s`;
  if (t <= 7) {
    barra.classList.add('urgente');
    texto.style.color = '#ff9966';
  } else {
    barra.classList.remove('urgente');
    texto.style.color = '';
  }
}
 
// ---- RESPONDER ----
function responder(idx) {
  clearInterval(estado.timerID);
  const p = estado.perguntas[estado.indiceAtual];
  const botoes = document.querySelectorAll('.btn-alt');
  botoes.forEach(b => b.disabled = true);
 
  const correto = idx === p.correta;
  let pontosGanhos = 0;
 
  // Destaca opções
  botoes[p.correta].classList.add('correta');
  if (!correto) {
    botoes[idx].classList.add('errada');
    estado.erros++;
  } else {
    estado.acertos++;
    pontosGanhos = 10;
    if (estado.tempoRestante > 10) pontosGanhos += 5; // bônus velocidade
    estado.pontos += pontosGanhos;
  }
 
  // Guarda resposta para gabarito
  estado.respostas.push({
    pergunta: p.pergunta,
    acertou: correto,
    correta: p.opcoes[p.correta],
    escolhida: p.opcoes[idx],
    explicacao: p.explicacao,
    categoria: p.labelCategoria
  });
 
  // Feedback
  mostrarFeedback(correto, pontosGanhos, p.explicacao);
  tocarFeedback(correto ? 'ok' : 'erro');

  // Neymar reação
  mostrarNeymar(correto);
 
  // HUD atualiza
  document.getElementById('hud-pontos').textContent = estado.pontos;
 
  // Botão próxima
  setTimeout(() => {
    document.getElementById('btn-proxima').style.display = 'block';
  }, 600);
}
 
function timeoutResposta() {
  const p = estado.perguntas[estado.indiceAtual];
  const botoes = document.querySelectorAll('.btn-alt');
  botoes.forEach(b => b.disabled = true);
  botoes[p.correta].classList.add('correta');
 
  estado.erros++;
  estado.respostas.push({
    pergunta: p.pergunta,
    acertou: false,
    correta: p.opcoes[p.correta],
    escolhida: '(Tempo esgotado)',
    explicacao: p.explicacao,
    categoria: p.labelCategoria
  });
 
  mostrarFeedback('tempo', 0, p.explicacao);
  tocarFeedback('erro');
  mostrarNeymar(false);
  setTimeout(() => {
    document.getElementById('btn-proxima').style.display = 'block';
  }, 600);
}
 
// ---- NEYMAR REAÇÃO ----
function mostrarNeymar(acertou) {
  const feliz = document.getElementById('neymar-feliz');
  const triste = document.getElementById('neymar-triste');
  if (!feliz || !triste) return;

  // Reinicia animação removendo e re-adicionando o elemento
  if (acertou) {
    triste.style.display = 'none';
    feliz.style.display = 'none';
    void feliz.offsetWidth; // força reflow para reiniciar animação
    feliz.style.display = 'block';
  } else {
    feliz.style.display = 'none';
    triste.style.display = 'none';
    void triste.offsetWidth;
    triste.style.display = 'block';
  }
}

function esconderNeymar() {
  const feliz = document.getElementById('neymar-feliz');
  const triste = document.getElementById('neymar-triste');
  if (feliz) feliz.style.display = 'none';
  if (triste) triste.style.display = 'none';
}

function mostrarFeedback(tipo, pontos, explicacao) {
  const fb = document.getElementById('feedback-box');
  const icone = document.getElementById('feedback-icone');
  const texto = document.getElementById('feedback-texto');
 
  fb.style.display = 'flex';
 
  if (tipo === true) {
    fb.className = 'feedback-box ok';
    const bonus = pontos > 10 ? ' ⚡ +5 bônus velocidade!' : '';
    icone.textContent = '✅';
    texto.textContent = `Acertou! +${pontos} pontos!${bonus}`;
  } else if (tipo === false) {
    fb.className = 'feedback-box erro';
    icone.textContent = '❌';
    texto.textContent = `Errou! Não desanima! — ${explicacao}`;
  } else {
    fb.className = 'feedback-box tempo';
    icone.textContent = '⏰';
    texto.textContent = `Tempo esgotado! — ${explicacao}`;
  }
}
 
// ---- PRÓXIMA PERGUNTA ----
function proximaPergunta() {
  estado.indiceAtual++;
  if (estado.indiceAtual < estado.perguntas.length) {
    renderizarPergunta();
  } else {
    mostrarResultado();
  }
}
 
// ---- RESULTADO ----
function mostrarResultado() {
  mostrarTela('tela-resultado');
 
  const p = estado.pontos;
  const nome = estado.nomeJogador;
 
  document.getElementById('res-pontos').textContent = p;
  document.getElementById('res-acertos').textContent = estado.acertos;
  document.getElementById('res-erros').textContent = estado.erros;
  document.getElementById('resultado-nome').textContent = nome;
 
  const emoji = document.getElementById('resultado-emoji');
  const titulo = document.getElementById('resultado-titulo');
  const medalha = document.getElementById('medalha-box');
 
  if (p >= 130) {
    emoji.textContent = '🏆';
    titulo.textContent = 'LENDÁRIO, ' + nome.toUpperCase() + '!';
    medalha.className = 'medalha-box medalha-ouro';
    medalha.textContent = '🥇 Medalha de Ouro — FinanCampeão Absoluto!';
  } else if (p >= 100) {
    emoji.textContent = '🥇';
    titulo.textContent = 'INCRÍVEL, ' + nome + '!';
    medalha.className = 'medalha-box medalha-ouro';
    medalha.textContent = '🥇 Medalha de Ouro — Excelente desempenho!';
  } else if (p >= 70) {
    emoji.textContent = '🥈';
    titulo.textContent = 'MUITO BOM, ' + nome + '!';
    medalha.className = 'medalha-box medalha-prata';
    medalha.textContent = '🥈 Medalha de Prata — Continue evoluindo!';
  } else if (p >= 40) {
    emoji.textContent = '🥉';
    titulo.textContent = 'BOM, ' + nome + '!';
    medalha.className = 'medalha-box medalha-bronze';
    medalha.textContent = '🥉 Medalha de Bronze — Pratique mais!';
  } else {
    emoji.textContent = '💪';
    titulo.textContent = 'NÃO DESISTA, ' + nome + '!';
    medalha.className = 'medalha-box medalha-treino';
    medalha.textContent = '📚 Continue estudando — você vai chegar lá!';
  }
}
 
// ---- GABARITO ----
function verGabarito() {
  mostrarTela('tela-gabarito');
  const lista = document.getElementById('lista-gabarito');
  lista.innerHTML = '';
 
  estado.respostas.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'card-gabarito ' + (r.acertou ? 'acertou' : 'errou');
    card.innerHTML = `
      <div class="gab-header">
        <span class="gab-num">Questão ${i + 1} · ${r.categoria}</span>
        <span class="${r.acertou ? 'gab-status-ok' : 'gab-status-err'}">
          ${r.acertou ? '✅ Acertou' : '❌ Errou'}
        </span>
      </div>
      <p class="gab-pergunta">${r.pergunta}</p>
      <p class="gab-resposta">✔ Resposta correta: ${r.correta}</p>
      ${!r.acertou ? `<p style="font-size:0.8rem;color:#ffaaaa;margin-top:2px;">Sua resposta: ${r.escolhida}</p>` : ''}
      <p class="gab-explicacao">💬 ${r.explicacao}</p>
    `;
    lista.appendChild(card);
  });
}
 
// ---- REINICIAR / VOLTAR ----
function reiniciarJogo() {
  document.getElementById('nome-jogador').value = estado.nomeJogador;
  mostrarTela('tela-inicio');
}
 
function voltarInicio() {
  document.getElementById('nome-jogador').value = '';
  mostrarTela('tela-inicio');
}
 
// ---- ESTRELAS DECORATIVAS ----
(function gerarEstrelas() {
  const div = document.querySelector('.estrelas');
  if (!div) return;
  const emojis = ['⭐', '✨', '💫', '🌟'];
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span');
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.cssText = `
      position:absolute;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      font-size:${10 + Math.random() * 18}px;
      opacity:${0.1 + Math.random() * 0.25};
      animation: twinkle ${2 + Math.random() * 3}s infinite alternate;
      animation-delay:${Math.random() * 3}s;
    `;
    div.appendChild(s);
  }
 
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      from { opacity: 0.05; transform: scale(0.8); }
      to   { opacity: 0.3;  transform: scale(1.2); }
    }
  `;
  document.head.appendChild(style);
})();
 
// ---- ENTER para iniciar ----
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('nome-jogador');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') iniciarJogo();
    });
  }
});