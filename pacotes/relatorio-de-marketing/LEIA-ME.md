# Pacote: Relatório de marketing

Agente que recebe as métricas da semana (tráfego, redes, e-mail, leads, campanhas) e monta o relatório: o que subiu, o que caiu, por que provavelmente, e o que fazer. Nível 1: o agente escreve o rascunho; o responsável de marketing revisa e envia.

> Modelo para importar e ligar; não foi executado contra ferramentas de analytics reais. Teste com uma planilha fictícia primeiro.

## O que tem aqui
- `ficha-do-agente.md`: função, regras, limites.
- `system-prompt.md`: prompt com saída em JSON e um bloco de texto para o relatório.
- `exemplos.md`: 10 situações fictícias anotadas (como ler cada tipo de variação).
- `scorecard.md`: avaliação quinzenal.

## O que você precisa acrescentar
- **Contexto:** metas do trimestre, canais ativos, campanhas em andamento, sazonalidade conhecida, guia de voz da empresa, quem lê o relatório. Use `qualificador-de-leads/contexto.md` como molde.
- **Ferramentas:** exportação semanal das métricas em CSV (ou conexão de leitura com analytics e redes).
- **Diário de falhas:** copie `qualificador-de-leads/FALHAS.md`.

## Como ligar
1. Toda segunda, exporte as métricas da semana e da semana anterior.
2. Passe contexto + os dois CSVs ao agente com o prompt.
3. O agente devolve o JSON com os destaques e o texto do relatório.
4. O responsável revisa, corrige e envia. O que corrigiu vira linha no diário de falhas.

## Níveis
- **1:** rascunho; humano revisa e envia.
- **2:** envia o relatório interno sozinho; humano revisa amostra.
- **3:** não recomendado para relatórios a clientes ou diretoria.
