---
name: cultivar
description: Cria os arquivos que cultivam um agente de IA (arquivo-mestre, memória, diário de falhas, segurança, runbooks ou ficha do agente) a partir de uma entrevista curta de cinco perguntas. Use quando o usuário disser "cultivar", "cultiva meu jarvis", "cria meu CLAUDE.md / AGENTS.md", "monta a ficha do agente", "começar a usar IA do jeito certo", ou quando abrir uma pasta sem arquivo-mestre e pedir para configurar o agente.
---

# /cultivar

Você vai transformar cinco respostas em arquivos prontos na pasta do usuário, seguindo o método da IA Cultivada (oito elementos: função, contexto, ferramentas, regras, exemplos, memória, avaliação, feedback). Os modelos estão em `modelos/` ao lado deste arquivo; leia o modelo antes de escrever cada arquivo e mantenha a estrutura.

## Passo 1: descobrir o jardim

Pergunte, em texto livre (sem menu), qual é o caso:

- **pessoal**: IA de chat, sem ferramentas → gera `SOBRE-MIM.md`, `REGRAS.md`, `EXEMPLOS.md`, `MEMORIA.md`, `FALHAS.md`.
- **jarvis**: agente com ferramentas nesta pasta (Claude Code, Codex, OpenClaw) → gera `CLAUDE.md` (e `AGENTS.md` idêntico se o usuário usa Codex), `MEMORY.md`, `FALHAS.md`, `SEGURANCA.md`, `runbooks/revisao-semanal.md`.
- **empresa**: agente num processo → gera `FICHA-DO-AGENTE.md`, `CONTEXTO.md`, `EXEMPLOS.md`, `SCORECARD.md`, `FALHAS.md`.

Se a pasta atual já tem `CLAUDE.md` ou `AGENTS.md`, diga isso e pergunte se é para complementar (não sobrescrever). Nunca sobrescreva arquivo existente sem confirmação explícita.

## Passo 2: a entrevista (cinco perguntas, uma por vez)

1. **Quem é você / o que é a empresa, em três linhas?** (vira o contexto)
2. **Qual é a única função do agente nesta fase?** Se a resposta tiver duas funções, peça para escolher uma. (vira a função e o resultado esperado; force uma frase de "bem feito" mensurável)
3. **O que ele pode fazer sozinho, o que precisa da sua confirmação, e o que nunca pode fazer?** (vira regras e limites; se o usuário não citar envio de mensagens, dinheiro ou apagar dados, proponha esses três como "pede confirmação" ou "nunca")
4. **Que ferramentas, pastas ou sistemas ele pode tocar?** (vira ferramentas; sugira começar só com leitura)
5. **Como você gosta que ele fale com você?** Idioma, tamanho, tom, o que odeia. (vira formato)

Não peça exemplos agora; o arquivo `EXEMPLOS.md` nasce com o cabeçalho e as instruções para o usuário juntar 3 a 5 casos na semana 2.

## Passo 3: escrever os arquivos

- Mantenha a estrutura dos modelos em `modelos/`, troque o conteúdo fictício pelo do usuário e apague os comentários `<!-- Exemplo fictício -->`.
- Versão `v1.0` e a data de hoje no cabeçalho do arquivo-mestre ou da ficha.
- Toda tarefa começa no **nível 1** (propõe, humano executa). Escreva a tabela de níveis com a data de hoje.
- `MEMORY.md` nasce só com o cabeçalho e uma linha: "criado em <data> pela skill cultivar".
- `FALHAS.md` nasce só com a tabela vazia.
- **Nunca** escreva chave, senha, token ou e-mail nos arquivos. Se o usuário citar, registre só o caminho ou o nome do lugar.

Mostre a lista de arquivos criados e o conteúdo do arquivo-mestre (ou da ficha) para o usuário revisar.

## Passo 4: fechar

Diga em três linhas o que fazer a seguir:
1. Usar todo dia, na função escolhida, por uma semana.
2. Anotar cada erro no `FALHAS.md` na hora, uma linha.
3. Na sexta, rodar `/revisao-semanal`.

Referência do método: https://inematds.github.io/iacultivada/
