# Pacote: Triagem de atendimento

Agente que lê cada ticket ou mensagem de suporte, classifica (categoria e urgência), sugere uma resposta a partir da base de conhecimento e escalona por regra. Nível 1: o atendente lê a sugestão e decide o que enviar.

> Modelo para importar e ligar; não foi executado contra uma central de atendimento real. Teste com tickets fictícios primeiro.

## O que tem aqui
- `ficha-do-agente.md`: função, regras, limites, dono humano.
- `system-prompt.md`: prompt de sistema com saída em JSON.
- `exemplos.md`: 10 tickets fictícios anotados.
- `scorecard.md`: avaliação quinzenal.

## O que você precisa acrescentar
- **Contexto:** uma página com produto, planos, SLA, política de reembolso, glossário, o que já deu errado. Use `qualificador-de-leads/contexto.md` como molde.
- **Base de conhecimento:** os 20 artigos mais usados pelo suporte, em texto. O agente só sugere respostas com base neles.
- **Diário de falhas:** copie `qualificador-de-leads/FALHAS.md`.

## Como ligar
1. Cole o prompt na ferramenta (n8n com nó de modelo, Claude Code, API direta). O molde de workflow n8n do qualificador de leads serve: troque o webhook para receber o ticket e o destino para a ferramenta de atendimento.
2. Passe contexto + base + ticket. Exija o JSON.
3. A sugestão vai como nota interna no ticket. Ninguém envia sem ler.
4. Scorecard a cada quinzena com 20 tickets revisados por um atendente sênior.

## Níveis
- **1:** classifica e sugere; atendente envia.
- **2:** envia respostas de categoria "informação simples" e humano revisa amostra.
- **3:** não recomendado para reclamações, cobranças ou cancelamentos.
