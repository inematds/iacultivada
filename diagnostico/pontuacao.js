// Diagnóstico de maturidade do cultivo: 8 perguntas (uma por elemento), 0 a 3 cada.
(function (root) {
  var ELEMENTOS = [
    { id: 'funcao', nome: 'Função', pergunta: 'A IA que você usa tem uma função definida em uma frase?', opcoes: ['Não; uso para tudo', 'Mais ou menos; sei o que quero mas não escrevi', 'Sim, escrita, mas mudo a cada semana', 'Sim, escrita, uma função por vez'] },
    { id: 'contexto', nome: 'Contexto', pergunta: 'Ela sabe quem você é (ou o que é a empresa) antes de você perguntar?', opcoes: ['Não; cada conversa começa do zero', 'Explico de novo a cada vez', 'Tenho um texto que colo às vezes', 'Tem um arquivo de contexto que ela lê sempre'] },
    { id: 'ferramentas', nome: 'Ferramentas', pergunta: 'Ela pode tocar em algo seu (arquivos, calendário, planilha, sistema)?', opcoes: ['Não; só chat', 'Colo dados na mão', 'Lê alguma coisa (arquivos ou uma ferramenta)', 'Lê e escreve, com permissões definidas'] },
    { id: 'regras', nome: 'Regras e limites', pergunta: 'Está escrito o que ela faz sozinha, o que pede confirmação e o que nunca faz?', opcoes: ['Não', 'Está na minha cabeça', 'Escrevi algumas regras', 'Escrito, com os três níveis'] },
    { id: 'exemplos', nome: 'Exemplos', pergunta: 'Ela tem exemplos seus de trabalho bom e ruim, com o porquê?', opcoes: ['Não', 'Mostro um exemplo quando lembro', 'Tenho alguns exemplos guardados', 'Tenho exemplos anotados, incluindo os feios'] },
    { id: 'memoria', nome: 'Memória', pergunta: 'O que ela aprende sobre você fica guardado entre uma conversa e outra?', opcoes: ['Não', 'Só o que a ferramenta guarda sozinha', 'Tenho um arquivo de memória que atualizo às vezes', 'Arquivo de memória atualizado e limpo toda semana'] },
    { id: 'avaliacao', nome: 'Avaliação', pergunta: 'Você anota onde ela erra?', opcoes: ['Não', 'Reclamo na conversa e sigo', 'Anoto de vez em quando', 'Diário de falhas: uma linha por erro, na hora'] },
    { id: 'feedback', nome: 'Feedback', pergunta: 'Os erros viram mudança nos arquivos (contexto, regras, exemplos)?', opcoes: ['Não', 'Corrijo na conversa e repito na semana seguinte', 'Às vezes edito o arquivo', 'Revisão semanal: toda falha vira regra ou exemplo'] }
  ];
  var KITS = {
    pessoal: { nome: 'Kit pessoal', url: '../kits/kit-pessoal.zip' },
    jarvis: { nome: 'Kit Jarvis', url: '../kits/kit-jarvis.zip' },
    empresa: { nome: 'Kit empresa', url: '../kits/kit-empresa.zip' }
  };
  var ARQUIVO = { funcao: 'REGRAS.md / FICHA-DO-AGENTE.md (seção Função)', contexto: 'SOBRE-MIM.md / CONTEXTO.md', ferramentas: 'seção Ferramentas da ficha (comece só com leitura)', regras: 'REGRAS.md / CLAUDE.md (faz sozinho, pede confirmação, nunca faz)', exemplos: 'EXEMPLOS.md (3 a 5 casos, incluindo os feios)', memoria: 'MEMORIA.md / MEMORY.md', avaliacao: 'FALHAS.md (uma linha por erro)', feedback: 'runbook revisao-semanal.md ou a skill /revisao-semanal' };

  // respostas: objeto {id: 0..3}; jardim: pessoal|jarvis|empresa
  function pontuar(respostas, jardim) {
    respostas = respostas || {};
    jardim = KITS[jardim] ? jardim : 'pessoal';
    var total = 0, max = ELEMENTOS.length * 3, porElemento = [];
    ELEMENTOS.forEach(function (e) {
      var v = Number(respostas[e.id]); if (!(v >= 0 && v <= 3)) v = 0;
      total += v; porElemento.push({ id: e.id, nome: e.nome, valor: v });
    });
    // ordem de cultivo: os 4 primeiros fazem funcionar, os 4 últimos fazem melhorar
    var fraco = porElemento.slice().sort(function (a, b) { return a.valor - b.valor || ELEMENTOS.findIndex(function (e) { return e.id === a.id; }) - ELEMENTOS.findIndex(function (e) { return e.id === b.id; }); })[0];
    var pct = Math.round(total / max * 100);
    var estagio = pct < 25 ? 'Semente' : pct < 50 ? 'Broto' : pct < 75 ? 'Muda' : pct < 100 ? 'Planta' : 'Jardim';
    var funcionar = porElemento.slice(0, 4).reduce(function (s, e) { return s + e.valor; }, 0);
    var melhorar = porElemento.slice(4).reduce(function (s, e) { return s + e.valor; }, 0);
    var leitura = funcionar >= 8 && melhorar <= 4
      ? 'Sua IA funciona, mas não melhora: os quatro elementos de cima estão de pé e os de baixo (exemplos, memória, avaliação, feedback) não. É o caso mais comum, e o mais barato de resolver.'
      : funcionar <= 4
        ? 'Ainda não há um agente, há um chat. Comece pelos quatro elementos que fazem funcionar: função, contexto, ferramentas e regras.'
        : pct === 100 ? 'Jardim completo. O trabalho agora é manter o ritual e subir tarefas de nível com critério.'
          : 'Você já cultiva. O próximo passo é o elemento mais fraco abaixo.';
    return {
      total: total, max: max, pct: pct, estagio: estagio, leitura: leitura,
      porElemento: porElemento,
      comecarPor: { id: fraco.id, nome: fraco.nome, arquivo: ARQUIVO[fraco.id] },
      kit: KITS[jardim]
    };
  }
  var api = { ELEMENTOS: ELEMENTOS, KITS: KITS, pontuar: pontuar };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Diagnostico = api;
})(typeof window !== 'undefined' ? window : this);
