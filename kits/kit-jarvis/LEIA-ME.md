# Kit Jarvis

Para agentes com ferramentas: Claude Code, Codex, OpenClaw e similares. Os arquivos vão na pasta onde o agente trabalha.

| Arquivo | O que é | Quem lê |
|---|---|---|
| `CLAUDE.md` | Arquivo-mestre: quem você é, projetos, regras, o que é proibido | Claude Code lê sozinho ao abrir a pasta |
| `AGENTS.md` | O mesmo conteúdo, com o nome que o Codex lê | Codex lê sozinho ao abrir a pasta |
| `MEMORY.md` | O que o agente aprendeu com você. Índice de uma linha por item | O agente, no início de cada sessão (o `CLAUDE.md` manda ler) |
| `FALHAS.md` | Uma linha por falha | Você, na revisão semanal; a skill `/revisao-semanal` |
| `SEGURANCA.md` | As cercas do jardim: credenciais, conteúdo externo, confirmação, backup | O agente (linkado do `CLAUDE.md`) |
| `runbooks/` | Receitas de tarefas recorrentes. Cada tarefa explicada duas vezes vira um runbook | O agente, quando a tarefa aparece |

## Como instalar

1. Copie os arquivos para a raiz da pasta em que o agente vai trabalhar (a pasta do seu projeto ou uma pasta `jarvis/`).
2. Mantenha só um dos dois arquivos-mestre, ou os dois iguais: `CLAUDE.md` para Claude Code, `AGENTS.md` para Codex.
3. Abra o agente nessa pasta e peça: "leia o CLAUDE.md e me diga o que você entendeu do seu papel". Corrija o que ele entendeu errado no arquivo.
4. Comece no nível 1 (propõe, você executa). Suba para o nível 2 numa tarefa só depois de semanas sem entrada no `FALHAS.md`.

O exemplo preenchido é de uma pessoa fictícia ("Marina", loja de materiais de construção). Apague e escreva o seu.
