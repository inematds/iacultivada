// Diagnóstico de madurez del cultivo: 8 preguntas (una por elemento), de 0 a 3 cada una.
(function (root) {
  var ELEMENTOS = [
    { id: 'funcao', nome: 'Función', pergunta: '¿La IA que usas tiene una función definida en una frase?', opcoes: ['No; la uso para todo', 'Más o menos; sé lo que quiero pero no lo escribí', 'Sí, escrita, pero la cambio cada semana', 'Sí, escrita, una función a la vez'] },
    { id: 'contexto', nome: 'Contexto', pergunta: '¿Sabe quién eres (o qué es la empresa) antes de que preguntes?', opcoes: ['No; cada conversación empieza de cero', 'Lo explico de nuevo cada vez', 'Tengo un texto que pego a veces', 'Tiene un archivo de contexto que lee siempre'] },
    { id: 'ferramentas', nome: 'Herramientas', pergunta: '¿Puede tocar algo tuyo (archivos, calendario, planilla, sistema)?', opcoes: ['No; solo chat', 'Pego los datos a mano', 'Lee algo (archivos o una herramienta)', 'Lee y escribe, con permisos definidos'] },
    { id: 'regras', nome: 'Reglas y límites', pergunta: '¿Está escrito qué hace sola, qué pide confirmación y qué nunca hace?', opcoes: ['No', 'Está en mi cabeza', 'Escribí algunas reglas', 'Escrito, con los tres niveles'] },
    { id: 'exemplos', nome: 'Ejemplos', pergunta: '¿Tiene ejemplos tuyos de trabajo bueno y malo, con el porqué?', opcoes: ['No', 'Muestro un ejemplo cuando me acuerdo', 'Tengo algunos ejemplos guardados', 'Tengo ejemplos anotados, incluidos los feos'] },
    { id: 'memoria', nome: 'Memoria', pergunta: '¿Lo que aprende sobre ti queda guardado entre una conversación y otra?', opcoes: ['No', 'Solo lo que la herramienta guarda sola', 'Tengo un archivo de memoria que actualizo a veces', 'Archivo de memoria actualizado y limpio cada semana'] },
    { id: 'avaliacao', nome: 'Evaluación', pergunta: '¿Anotas dónde se equivoca?', opcoes: ['No', 'Me quejo en la conversación y sigo', 'Anoto de vez en cuando', 'Diario de fallos: una línea por error, en el momento'] },
    { id: 'feedback', nome: 'Feedback', pergunta: '¿Los errores se convierten en cambios en los archivos (contexto, reglas, ejemplos)?', opcoes: ['No', 'Corrijo en la conversación y lo repito la semana siguiente', 'A veces edito el archivo', 'Revisión semanal: todo fallo se vuelve regla o ejemplo'] }
  ];
  var KITS = {
    pessoal: { nome: 'Kit personal', url: '../../kits/kit-pessoal.zip' },
    jarvis: { nome: 'Kit Jarvis', url: '../../kits/kit-jarvis.zip' },
    empresa: { nome: 'Kit empresa', url: '../../kits/kit-empresa.zip' }
  };
  var ARQUIVO = { funcao: 'REGLAS.md / FICHA-DEL-AGENTE.md (sección Función)', contexto: 'SOBRE-MI.md / CONTEXTO.md', ferramentas: 'sección Herramientas de la ficha (empieza solo con lectura)', regras: 'REGLAS.md / CLAUDE.md (hace solo, pide confirmación, nunca hace)', exemplos: 'EJEMPLOS.md (3 a 5 casos, incluidos los feos)', memoria: 'MEMORIA.md / MEMORY.md', avaliacao: 'FALLOS.md (una línea por error)', feedback: 'runbook revisao-semanal.md o la skill /revisao-semanal' };

  // respostas: objeto {id: 0..3}; jardim: pessoal|jarvis|empresa
  function pontuar(respostas, jardim) {
    respostas = respostas || {};
    jardim = KITS[jardim] ? jardim : 'pessoal';
    var total = 0, max = ELEMENTOS.length * 3, porElemento = [];
    ELEMENTOS.forEach(function (e) {
      var v = Number(respostas[e.id]); if (!(v >= 0 && v <= 3)) v = 0;
      total += v; porElemento.push({ id: e.id, nome: e.nome, valor: v });
    });
    // orden de cultivo: los 4 primeros hacen funcionar, los 4 últimos hacen mejorar
    var fraco = porElemento.slice().sort(function (a, b) { return a.valor - b.valor || ELEMENTOS.findIndex(function (e) { return e.id === a.id; }) - ELEMENTOS.findIndex(function (e) { return e.id === b.id; }); })[0];
    var pct = Math.round(total / max * 100);
    var estagio = pct < 25 ? 'Semilla' : pct < 50 ? 'Brote' : pct < 75 ? 'Plantín' : pct < 100 ? 'Planta' : 'Jardín';
    var funcionar = porElemento.slice(0, 4).reduce(function (s, e) { return s + e.valor; }, 0);
    var melhorar = porElemento.slice(4).reduce(function (s, e) { return s + e.valor; }, 0);
    var leitura = funcionar >= 8 && melhorar <= 4
      ? 'Tu IA funciona, pero no mejora: los cuatro elementos de arriba están en pie y los de abajo (ejemplos, memoria, evaluación, feedback) no. Es el caso más común, y el más barato de resolver.'
      : funcionar <= 4
        ? 'Todavía no hay un agente, hay un chat. Empieza por los cuatro elementos que hacen funcionar: función, contexto, herramientas y reglas.'
        : pct === 100 ? 'Jardín completo. El trabajo ahora es mantener el ritual y subir tareas de nivel con criterio.'
          : 'Ya cultivas. El siguiente paso es el elemento más débil de abajo.';
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
