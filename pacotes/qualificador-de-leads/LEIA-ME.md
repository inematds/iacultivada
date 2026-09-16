# Pacote: Qualificador de leads

Agente que recebe um lead inbound, pesquisa a empresa, consulta o CRM, classifica a oportunidade (A/B/C), recomenda a próxima ação e registra o que fez. É o exemplo central da página IA Cultivada, agora com todos os oito elementos preenchidos.

> Modelo para importar e ligar; não foi executado contra um CRM ou instância n8n real. Teste com leads fictícios antes de apontar para produção.

## O que tem aqui

| Arquivo | Elemento do cultivo | O que fazer com ele |
|---|---|---|
| `ficha-do-agente.md` | Função, regras e limites, dono humano | Ajustar e versionar. É o "cargo" do agente. |
| `contexto.md` | Contexto | Trocar a empresa fictícia Aurora Sistemas pela sua. |
| `exemplos.md` | Exemplos | Substituir por 20 casos reais anotados, mantendo os feios. |
| `system-prompt.md` | Função + regras em forma de prompt | Colar na ferramenta. Saída em JSON estrito. |
| `n8n-workflow.json` | Ferramentas | Importar no n8n e preencher credenciais e URLs. |
| `scorecard.md` | Avaliação | Preencher a cada quinzena com amostra revisada por humano. |
| `FALHAS.md` | Feedback | Uma linha por falha. Cada linha vira mudança no ambiente. |

## Onde colocar cada coisa

### Opção A: n8n

1. Importe `n8n-workflow.json` (menu Workflows, Import from File).
2. No nó **Modelo (Anthropic)**, crie uma credencial do tipo Header Auth com o nome `x-api-key` e a sua chave. Nunca cole a chave no workflow.
3. No nó **Monta prompt**, cole o conteúdo de `system-prompt.md` no campo `system` e o conteúdo de `contexto.md` mais `exemplos.md` no campo `contexto`.
4. No nó **CRM (registrar)**, troque a URL placeholder pela API do seu CRM e configure a credencial.
5. Ative o webhook e envie um lead fictício:

```bash
curl -X POST https://SEU-N8N/webhook/lead \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ana Teste","empresa":"Loja Exemplo","email":"ana@exemplo.com","cargo":"Gerente","mensagem":"Quero saber preço para 30 usuários","origem":"site"}'
```

6. Confira a resposta JSON e o registro no CRM. Enquanto estiver no nível 1, o nó de CRM só grava a sugestão; o vendedor executa.

### Opção B: Claude Code, Codex ou outro agente de terminal

1. Cole `ficha-do-agente.md` e `contexto.md` no arquivo de instruções do projeto (`CLAUDE.md`, `AGENTS.md` ou equivalente).
2. Deixe `exemplos.md` na pasta e mande o agente ler antes de classificar.
3. Passe os leads como arquivo ou texto. Peça a saída no formato JSON de `system-prompt.md`.
4. Mantenha `FALHAS.md` na mesma pasta e revise toda semana.

### Opção C: API direta

Use `system-prompt.md` como prompt de sistema, `contexto.md` + `exemplos.md` como primeira mensagem de contexto, e o lead como mensagem do usuário. Exija JSON na resposta e valide antes de usar.

## Níveis de autonomia deste pacote

| Nível | O que o agente faz | Quando liberar |
|---|---|---|
| 1 (padrão) | Classifica e sugere. Grava a sugestão no CRM como nota. Humano decide e envia. | Agora. |
| 2 | Classifica, grava a classificação no campo do CRM e agenda o follow-up. Humano revisa amostra quinzenal. | Depois de dois scorecards sem erro grave. |
| 3 | Classifica e envia o primeiro follow-up sozinho para leads C. | Só para leads de baixo valor, depois de um trimestre limpo. |

## O ciclo

Processo → agente → execução → resultado → avaliação (scorecard) → feedback (FALHAS.md vira mudança) → agente melhor (ficha v1.1).
