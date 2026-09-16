# Kit empresa

Para colocar um agente num processo da empresa. Um processo, um agente, um indicador. O agente nasce no nível 1 (propõe, humano executa).

| Arquivo | O que é | Quem mantém |
|---|---|---|
| `FICHA-DO-AGENTE.md` | A descrição de cargo: função, resultado, dono, o que faz sozinho, pede, nunca faz | O gestor de agentes |
| `CONTEXTO.md` | O que o agente precisa saber da empresa. Curado, com dono, com validade | O dono do processo |
| `EXEMPLOS.md` | Casos reais anotados por quem faz bem, incluindo os feios | Quem executa hoje |
| `SCORECARD.md` | A avaliação quinzenal: amostra revisada, custo, tempo, erros, resultado | O gestor de agentes |
| `FALHAS.md` | Uma linha por falha | Quem revisa a amostra |

## Como usar

1. Escolha um processo com volume, regra clara e baixo custo de erro.
2. Preencha a `FICHA-DO-AGENTE.md` com quem executa o processo hoje. Se não conseguir escrever "resultado esperado" em uma frase, o processo não está pronto para um agente.
3. Escreva o `CONTEXTO.md` em uma página. Não é a base de conhecimento inteira; é o que um novo funcionário bom precisaria ler no primeiro dia.
4. Colete vinte casos para o `EXEMPLOS.md`, incluindo pelo menos cinco feios (dado incompleto, exceção, cliente difícil).
5. Cole ficha, contexto e exemplos no sistema de prompts da ferramenta que a empresa usa (ou no arquivo de instruções do agente).
6. A cada quinze dias: humano revisa vinte casos, preenche o `SCORECARD.md`, e cada erro vira uma mudança na ficha, no contexto ou nos exemplos. A ficha sobe de versão.

O exemplo preenchido é de uma empresa fictícia ("Aurora Sistemas"). Apague e escreva o seu. Para um pacote completo desse processo, com prompt de sistema e fluxo n8n, veja `pacotes/qualificador-de-leads/`.
