# Kits de cultivo

Três pastas, uma por jardim. Cada uma traz os arquivos que cultivam um agente, já estruturados e com um exemplo fictício preenchido para você ver o tamanho certo.

| Kit | Para quem | Onde os arquivos vão |
|---|---|---|
| `kit-pessoal/` | Quem usa IA no chat (ChatGPT, Claude, Gemini) e quer que ela trabalhe com você ao longo do tempo | Numa pasta sua. Você cola o conteúdo no início da conversa ou nas instruções personalizadas / projeto do chat. |
| `kit-jarvis/` | Quem usa um agente com ferramentas (Claude Code, Codex, OpenClaw e similares) | Na pasta em que o agente trabalha. `CLAUDE.md` (Claude Code) ou `AGENTS.md` (Codex) é lido automaticamente. |
| `kit-empresa/` | Quem vai colocar um agente num processo da empresa | Na pasta do projeto do agente, ou no sistema de prompts da ferramenta que a empresa usa. |

Regras que valem para os três:

1. **Copie a pasta, apague o exemplo fictício e escreva o seu.** Uma página boa vale mais que vinte despejadas.
2. **Toda correção vai no arquivo, não na conversa.** Se você explicou a mesma coisa duas vezes, é regra ou exemplo faltando.
3. **Revise toda semana (pessoal e Jarvis) ou a cada quinze dias (empresa).** O `FALHAS.md` é a matéria-prima; cada linha vira uma mudança no contexto, nas regras ou nos exemplos.
4. **Nada de segredo dentro dos arquivos.** Chave, senha e token ficam fora; aqui entra só o caminho ou o nome do lugar onde estão.

Zips prontos: `kit-pessoal.zip`, `kit-jarvis.zip`, `kit-empresa.zip` (gerados por `build.sh`).
