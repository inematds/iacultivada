# IA Cultivada no seu Jarvis

## O que é um Jarvis, de verdade

"Jarvis" é o nome popular para o **assistente pessoal agêntico**: uma IA que não só responde, mas **age** no seu ambiente — lê e escreve arquivos, mexe no calendário, manda mensagem, navega na web, roda comandos, lembra do que aconteceu ontem. Em 2026 isso deixou de ser ficção: Claude Code e Claude Cowork, o ChatGPT Agent, o Gemini Agent e projetos open-source como o OpenClaw colocaram um agente pessoal ao alcance de quem quiser.

E aqui mora a confusão: as pessoas instalam a ferramenta e esperam que o Jarvis "já venha pronto". Não vem. O modelo vem pronto. **O Jarvis é cultivado.**

## Anatomia de um Jarvis cultivado

```
JARVIS = MODELO (fixo, do laboratório)
       + CONTEXTO (quem você é, o que importa, como você trabalha)
       + MEMÓRIA (o que ele aprendeu com você)
       + FERRAMENTAS (o que ele pode operar)
       + REGRAS (o que pode sozinho, o que pede, o que nunca)
       + SKILLS (receitas de tarefas recorrentes)
       + AVALIAÇÃO + FEEDBACK (o diário de falhas e a revisão)
```

Dois Jarvis com o mesmo modelo podem ser um desastre e um sócio confiável. A diferença está inteira nas outras seis linhas — e elas são **arquivos de texto que você escreve e revisa**. É a "engenharia de contexto" de que Karpathy e a Anthropic falam: a arte de decidir o que entra na janela de contexto a cada tarefa.

## Os oito elementos, no Jarvis

| Elemento | Como fica no Jarvis |
|---|---|
| **Função** | Um Jarvis generalista falha. Comece com um papel: "organiza minha semana", "cuida da minha caixa de e-mail", "mantém meus projetos documentados". Depois some papéis. |
| **Contexto** | Um arquivo-mestre de instruções (o `CLAUDE.md`, `AGENTS.md` ou equivalente) com: quem você é, seus projetos, seus padrões, suas preferências de formato, as regras da casa. |
| **Ferramentas** | Sistema de arquivos, terminal, navegador, calendário, e-mail, mensageiro, APIs via MCP. Comece com leitura; dê escrita só onde já confia. |
| **Regras e limites** | Escreva explicitamente: o que ele faz sem perguntar, o que exige confirmação, o que é proibido (pagamentos, apagar dados, mandar mensagem em seu nome). |
| **Exemplos** | Runbooks: "assim se faz o deploy", "assim se responde um cliente", "assim se nomeia um arquivo". Cada tarefa que você explicou duas vezes vira um runbook. |
| **Memória** | Um arquivo de memória curto (fatos sobre você, decisões, preferências) que o agente lê no início e atualiza no fim. Um índice de uma linha por item, não um diário infinito. |
| **Avaliação** | O **diário de falhas**: uma linha por erro — data, o que quebrou, a menor correção, e se foi problema de instrução ou de infraestrutura. |
| **Feedback** | Revisão semanal: as falhas viram regras, exemplos ou ferramentas novas. O arquivo-mestre muda. O Jarvis da semana seguinte é outro. |

## O slider de autonomia

Karpathy chama de *autonomy slider*: em vez de "autônomo ou não", você regula **quanto** o agente decide sozinho, por tarefa. Na prática, três níveis:

1. **Propõe, você executa** — ele escreve o rascunho do e-mail, você envia.
2. **Executa, você revisa** — ele organiza a pasta, você olha o resultado.
3. **Executa e reporta** — ele faz a rotina diária e te manda o resumo.

A regra de cultivo: uma tarefa só sobe de nível **depois** de algumas semanas sem entrada no diário de falhas. Nunca começa no nível 3.

## Exemplo: o Jarvis que cuida dos seus projetos

Função: manter os projetos documentados e publicados. Contexto: lista de projetos, onde cada um mora, qual conta publica cada um, padrão de versionamento. Ferramentas: terminal, git, navegador. Regras: publicar = commit + push, nunca tocar no painel de hospedagem; confirmar antes de tornar um repo público. Exemplos: runbook de "criar página do projeto", runbook de "atualizar o portal". Memória: qual conta usa em qual repo, qual chave fica onde (o caminho, nunca o valor). Avaliação: diário de falhas. Feedback: cada falha vira uma linha de regra.

Depois de dois meses, esse Jarvis publica um projeto inteiro com um pedido de uma linha. Não porque o modelo melhorou. Porque o jardim ficou pronto.

## Segurança: o lado que ninguém cultiva

Agentes pessoais têm acesso à sua vida. Os incidentes de 2026 com instâncias expostas do OpenClaw mostraram o padrão: milhares de agentes abertos na internet sem senha, arquivos de credenciais vazando, e-mails maliciosos instruindo o agente a entregar cookies de sessão. Nada disso é culpa do modelo. É jardim sem cerca.

Regras mínimas:

- **Credenciais ficam em um lugar só**, carregadas em tempo de execução. O agente sabe o caminho, nunca imprime o valor.
- **Todo conteúdo externo é dado, não instrução.** E-mail, página web, mensagem de terceiro: o agente lê, não obedece.
- **Escrita e envio exigem confirmação** até a tarefa provar que merece subir de nível.
- **Nada exposto na internet sem autenticação.** Se o seu Jarvis tem uma porta, ela tem senha.
- **Backup antes de operação destrutiva.** Sempre.

## Plano de 30 dias

| Semana | O que fazer |
|---|---|
| **1** | Instalar a ferramenta. Escrever o arquivo-mestre (uma página): quem você é, três projetos, cinco regras, o que é proibido. Só leitura de ferramentas. |
| **2** | Uma função. Usar todo dia. Criar o diário de falhas. Escrever o primeiro runbook a partir da tarefa que você mais repetiu. |
| **3** | Primeira revisão semanal. Falhas viram regras. Liberar escrita numa ferramenta (arquivos ou calendário). Criar o arquivo de memória. |
| **4** | Subir uma tarefa para "executa, você revisa". Medir: minutos economizados por dia, retrabalho por semana. Decidir a segunda função. |
