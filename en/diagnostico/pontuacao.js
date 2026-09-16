// Cultivation maturity diagnostic: 8 questions (one per element), 0 to 3 each.
(function (root) {
  var ELEMENTOS = [
    { id: 'funcao', nome: 'Role', pergunta: 'Does the AI you use have a role defined in one sentence?', opcoes: ['No; I use it for everything', 'Sort of; I know what I want but haven\'t written it down', 'Yes, written down, but I change it every week', 'Yes, written down, one role at a time'] },
    { id: 'contexto', nome: 'Context', pergunta: 'Does it know who you are (or what the company is) before you ask?', opcoes: ['No; every conversation starts from zero', 'I explain it again every time', 'I have a text I paste in sometimes', 'There is a context file it always reads'] },
    { id: 'ferramentas', nome: 'Tools', pergunta: 'Can it touch anything of yours (files, calendar, spreadsheet, system)?', opcoes: ['No; chat only', 'I paste data in by hand', 'It reads something (files or a tool)', 'It reads and writes, with defined permissions'] },
    { id: 'regras', nome: 'Rules and limits', pergunta: 'Is it written down what it does alone, what it asks confirmation for, and what it never does?', opcoes: ['No', 'It\'s in my head', 'I wrote down some rules', 'Written down, with all three levels'] },
    { id: 'exemplos', nome: 'Examples', pergunta: 'Does it have examples of your good and bad work, with the why?', opcoes: ['No', 'I show an example when I remember', 'I have a few examples saved', 'I have annotated examples, including the ugly ones'] },
    { id: 'memoria', nome: 'Memory', pergunta: 'Does what it learns about you persist from one conversation to the next?', opcoes: ['No', 'Only what the tool saves on its own', 'I have a memory file I update sometimes', 'Memory file updated and cleaned every week'] },
    { id: 'avaliacao', nome: 'Evaluation', pergunta: 'Do you write down where it fails?', opcoes: ['No', 'I complain in the conversation and move on', 'I write it down now and then', 'Failure log: one line per error, right away'] },
    { id: 'feedback', nome: 'Feedback', pergunta: 'Do the errors turn into changes in the files (context, rules, examples)?', opcoes: ['No', 'I fix it in the conversation and repeat it the next week', 'Sometimes I edit the file', 'Weekly review: every failure becomes a rule or an example'] }
  ];
  var KITS = {
    pessoal: { nome: 'Personal kit', url: '../../kits/kit-pessoal.zip' },
    jarvis: { nome: 'Jarvis kit', url: '../../kits/kit-jarvis.zip' },
    empresa: { nome: 'Business kit', url: '../../kits/kit-empresa.zip' }
  };
  var ARQUIVO = { funcao: 'REGRAS.md / FICHA-DO-AGENTE.md (Role section)', contexto: 'SOBRE-MIM.md / CONTEXTO.md', ferramentas: 'Tools section of the card (start with read access only)', regras: 'REGRAS.md / CLAUDE.md (does alone, asks for confirmation, never does)', exemplos: 'EXEMPLOS.md (3 to 5 cases, including the ugly ones)', memoria: 'MEMORIA.md / MEMORY.md', avaliacao: 'FALHAS.md (one line per error)', feedback: 'runbook revisao-semanal.md or the /revisao-semanal skill' };

  // respostas: object {id: 0..3}; jardim: pessoal|jarvis|empresa
  function pontuar(respostas, jardim) {
    respostas = respostas || {};
    jardim = KITS[jardim] ? jardim : 'pessoal';
    var total = 0, max = ELEMENTOS.length * 3, porElemento = [];
    ELEMENTOS.forEach(function (e) {
      var v = Number(respostas[e.id]); if (!(v >= 0 && v <= 3)) v = 0;
      total += v; porElemento.push({ id: e.id, nome: e.nome, valor: v });
    });
    // cultivation order: the first 4 make it work, the last 4 make it improve
    var fraco = porElemento.slice().sort(function (a, b) { return a.valor - b.valor || ELEMENTOS.findIndex(function (e) { return e.id === a.id; }) - ELEMENTOS.findIndex(function (e) { return e.id === b.id; }); })[0];
    var pct = Math.round(total / max * 100);
    var estagio = pct < 25 ? 'Seed' : pct < 50 ? 'Sprout' : pct < 75 ? 'Seedling' : pct < 100 ? 'Plant' : 'Garden';
    var funcionar = porElemento.slice(0, 4).reduce(function (s, e) { return s + e.valor; }, 0);
    var melhorar = porElemento.slice(4).reduce(function (s, e) { return s + e.valor; }, 0);
    var leitura = funcionar >= 8 && melhorar <= 4
      ? 'Your AI works, but doesn\'t improve: the top four elements are in place and the bottom four (examples, memory, evaluation, feedback) are not. It\'s the most common case, and the cheapest to fix.'
      : funcionar <= 4
        ? 'There is no agent yet, there is a chat. Start with the four elements that make it work: role, context, tools, and rules.'
        : pct === 100 ? 'Complete garden. The work now is to keep the ritual and move tasks up a level with judgment.'
          : 'You already cultivate. The next step is the weakest element below.';
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
