# IA Cultivada nos negócios

## De software para capacidade

Nas empresas, IA cultivada significa **parar de tratar a IA como um software que você programa** e passar a tratá-la como uma **capacidade que a organização desenvolve**. A comparação mais simples é com pessoas: você não programa um vendedor linha por linha. Você dá função, contexto, objetivos, regras, ferramentas, exemplos e feedback. Com o tempo, ele trabalha melhor.

Com agentes, a lógica é a mesma. E o resultado das empresas que tentaram nos últimos dois anos confirma o diagnóstico: quando os projetos falham, o motivo raramente é o modelo. É falta de contexto, de processo e de feedback. O relatório do MIT sobre a "divisão da IA generativa" atribuiu a causa raiz da falha dos pilotos a fatores organizacionais, não técnicos. O modelo é o mesmo para todo mundo. O jardim, não.

## Da automação rígida ao agente

**Automação:** "Se acontecer A, faça B, depois C." Quebra no primeiro caso que ninguém previu.

**Agente cultivado:** "Seu papel é qualificar leads. Aqui estão nossos critérios, nosso CRM, exemplos de bons e maus leads, seus limites de atuação e o resultado esperado. Execute, registre o que fez e aprenda com a avaliação."

A diferença: o agente não recebe instruções, recebe um **ambiente de trabalho**.

## A ficha do agente (os oito elementos como descrição de cargo)

| Elemento | Na empresa |
|---|---|
| **Função** | Um processo, um dono humano, um resultado esperado. "Qualificar leads inbound e recomendar a próxima ação." |
| **Contexto** | Base de conhecimento curada: produtos, ICP, política comercial, glossário, o que já deu errado. Não o Drive inteiro. |
| **Ferramentas** | CRM, ERP, e-mail, calendário, navegador, APIs internas, MCPs. Permissões mínimas por função. |
| **Regras e limites** | O que faz sozinho (classificar, pesquisar, rascunhar), o que exige aprovação (enviar, descontar, cancelar), o que nunca faz (prometer prazo, alterar preço). |
| **Exemplos** | Vinte casos reais anotados por quem faz bem: "este lead é bom porque...", "este e-mail está ruim porque...". |
| **Memória** | O que persiste: histórico por cliente, decisões, exceções aprovadas. Com dono e com prazo de validade. |
| **Avaliação** | Um scorecard por agente: qualidade (amostra revisada por humano), custo por tarefa, tempo, taxa de erro, resultado de negócio. |
| **Feedback** | Ritual quinzenal: os erros da amostra viram mudanças no contexto, nas regras ou nos exemplos. Versionado. |

## Exemplo: agente de qualificação comercial

Comece com **um único processo**. O agente:

1. recebe os leads;
2. pesquisa a empresa;
3. consulta o CRM;
4. classifica a oportunidade;
5. recomenda a próxima ação;
6. registra o que fez.

Depois, o gestor observa onde ele erra e ajusta: contexto, regras, exemplos, ferramentas, critérios de avaliação. O agente vai ficando melhor a cada ciclo. Não porque o modelo mudou. Porque o ambiente mudou.

## O ciclo

```
PROCESSO → AGENTE → EXECUÇÃO → RESULTADO → AVALIAÇÃO → FEEDBACK → AGENTE MELHOR
```

É gestão de pessoas. A empresa que já sabe fazer onboarding, dar feedback e medir resultado tem vantagem. A que não sabe vai descobrir que o agente expõe o processo ruim com uma velocidade cruel.

## Onde começar, por área

| Área | Primeiro agente (nível "propõe, humano executa") |
|---|---|
| **Vendas** | Qualificação e pesquisa de leads; rascunho de follow-up. |
| **Atendimento** | Triagem e resposta sugerida com base na base de conhecimento; escalonamento por regra. |
| **Financeiro** | Conciliação e classificação de lançamentos; cobrança amigável rascunhada. |
| **Marketing** | Primeira versão de conteúdo dentro do guia de voz; relatório semanal de métricas. |
| **Operações** | Leitura de documentos, extração de dados, checagem de conformidade contra checklist. |
| **RH** | Triagem de currículos contra critérios explícitos; respostas a dúvidas de política interna. |

Regra de ouro: **cada agente nasce no nível 1** (propõe), sobe para o nível 2 (executa, humano revisa amostra) depois de semanas sem erro grave, e só chega ao nível 3 (executa e reporta) em processos com baixo custo de erro.

## O que os casos reais ensinam

- **Klarna** substituiu centenas de atendentes por IA em 2024, admitiu queda de qualidade em 2025 e voltou a contratar humanos para casos complexos. Lição: corte de custo sem avaliação de qualidade é cultivo sem colheita.
- **Shopify** tornou o uso de IA uma expectativa mínima: antes de pedir contratação, o time precisa mostrar por que a IA não resolve. Lição: a empresa muda a cultura antes de mudar a ferramenta.
- **Salesforce** reporta centenas de milhões em receita recorrente com agentes em atendimento. Lição: o processo mais documentado da empresa (suporte) é onde o agente floresce primeiro.
- **Duolingo** anunciou "IA em primeiro lugar", sofreu reação pública e recuou. Lição: como você comunica o cultivo importa tanto quanto o cultivo.
- **"Workslop"**: pesquisa da HBR mostra que quase metade dos trabalhadores recebe conteúdo gerado por IA que parece bom e não serve, custando horas de retrabalho. Lição: agente sem avaliação produz volume, não valor.

## O papel do gestor muda

> **O gestor do futuro não precisa ser melhor que a IA na tarefa. Precisa saber criar o ambiente em que a IA produz o resultado correto.**

Um empresário não precisa saber mais engenharia que seus engenheiros. Precisa definir objetivos, montar a equipe, criar processos, acompanhar indicadores e decidir. Com agentes é igual: o cargo que surge não é "engenheiro de prompt", é **gestor de agentes** — alguém que escreve fichas, cura contexto, mantém exemplos, lê scorecards e roda o ritual de feedback.

## A evolução

**Antes:** empresas construíam software.
**Agora:** empresas começam a construir agentes.
**Depois:** empresas vão **cultivar uma força de trabalho de agentes**.

A vantagem competitiva não estará em quem tem o melhor modelo, porque os modelos ficam disponíveis para todos. Estará em quem tem:

**melhor contexto + melhores processos + melhores ferramentas + melhor feedback + melhor gestão dos agentes.**

## Por que os projetos falham (e como não falhar)

| Sintoma | Causa de cultivo | Correção mínima |
|---|---|---|
| "O agente alucina" | Contexto ausente ou entulhado | Curar a base: menos, melhor, com dono |
| "Ninguém confia no resultado" | Sem avaliação por amostra | Scorecard quinzenal com humano revisando 20 casos |
| "Funcionou no piloto, quebrou em produção" | Exemplos só de casos fáceis | Incluir os casos feios e as exceções nos exemplos |
| "Fez algo que não devia" | Regras implícitas | Escrever a lista do proibido e exigir confirmação |
| "Parou de melhorar" | Feedback não volta ao ambiente | Ritual: toda falha vira uma linha de regra/exemplo |
| "Custa mais do que economiza" | Escopo largo demais | Um processo, um agente, um indicador |

## Plano de 90 dias

| Fase | O que fazer |
|---|---|
| **Dias 1–30** | Escolher um processo com volume, regra clara e baixo custo de erro. Escrever a ficha do agente. Curar o contexto. Vinte exemplos anotados. Agente no nível 1. |
| **Dias 31–60** | Scorecard rodando. Dois rituais de feedback. Corrigir contexto, regras e exemplos. Medir custo por tarefa e taxa de erro. |
| **Dias 61–90** | Subir para nível 2 se o scorecard permitir. Documentar o método. Escolher o segundo processo. Nomear o gestor de agentes. |
