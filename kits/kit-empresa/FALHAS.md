# Diário de falhas: qualificador de leads

Uma linha por falha, mais recente no topo. Tipo: `instrução` (faltou contexto, regra, exemplo) ou `infra` (integração, API, CRM).

| data | o que quebrou | menor correção possível | tipo |
|---|---|---|---|
| 2026-09-14 | escreveu "confirmei por telefone" sem ter ligado | FICHA: "nunca inventa ação"; EXEMPLOS: caso 20 | instrução |
| 2026-09-09 | rede de 45 unidades classificada A | CONTEXTO: limite de 30 unidades → C com aviso | instrução |
| 2026-09-03 | ficou sem resposta 2 h porque o CRM não respondeu | infra: timeout de 30 s + retry + aviso ao gestor | infra |
