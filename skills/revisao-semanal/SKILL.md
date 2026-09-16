---
name: revisao-semanal
description: Revisão semanal do cultivo de um agente. Lê FALHAS.md e MEMORY.md (ou MEMORIA.md) da pasta atual, propõe a menor correção possível para cada falha (em qual arquivo entra), aponta memória desatualizada e tarefas que podem subir de nível. Só propõe; aplica nos arquivos depois de o usuário confirmar. Use quando o usuário disser "revisão semanal", "revisa as falhas", "o que aprendemos essa semana", "fecha a semana", "ritual de feedback".
---

# /revisao-semanal

É o passo de **avaliação → feedback** do ciclo. Você transforma o diário de falhas em mudanças de contexto, regras e exemplos. Você **propõe**; o usuário decide; só depois você edita.

## Passo 1: ler

Na pasta atual, leia o que existir: `FALHAS.md`, `MEMORY.md` ou `MEMORIA.md`, o arquivo-mestre (`CLAUDE.md`, `AGENTS.md`, `REGRAS.md` ou `FICHA-DO-AGENTE.md`), `SCORECARD.md`, e a pasta `runbooks/`. Se não houver `FALHAS.md`, diga isso e pergunte se houve erros na semana para registrar agora.

## Passo 2: propor (não editar ainda)

Entregue uma lista curta, nesta ordem:

1. **Falhas da semana → menor correção possível.** Para cada linha nova do `FALHAS.md`: em qual arquivo entra (regra no arquivo-mestre, passo num runbook, fato na memória, ou "infra: não é arquivo") e o texto exato da mudança. Se a mesma causa aparece duas vezes, diga que virou padrão e proponha uma proteção (limite, confirmação, checagem), não uma reescrita.
2. **Memória desatualizada.** Itens de `MEMORY.md` que parecem vencidos ou contradizem o arquivo-mestre. Pergunte se apaga.
3. **Autonomia.** Tarefas sem falha há três semanas ou mais que podem subir de nível (1→2, 2→3), e tarefas com falha grave que devem descer. Só sugira; a tabela é do usuário.
4. **Versão.** Se alguma regra mudar, o arquivo-mestre sobe de versão (ex.: v1.0 → v1.1) com a data de hoje.

Termine com uma pergunta só: "Aplico os itens 1 a N? Diga quais."

## Passo 3: aplicar (só depois da confirmação)

- Edite apenas os itens confirmados, com a menor mudança possível.
- Não apague linhas do `FALHAS.md`; ele é histórico.
- Atualize versão e data do arquivo-mestre.
- Mostre um resumo de três linhas: o que mudou, em quais arquivos, e a próxima revisão (daqui a sete dias).

## Regras

- Nunca escreva segredo nos arquivos.
- Se a falha foi de infraestrutura (rede, ferramenta, permissão), a correção é uma proteção (timeout, retry, aviso), não uma regra de comportamento.
- Se o usuário não responder à pergunta do passo 2, não aplique nada.

Referência do método: https://inematds.github.io/iacultivada/
