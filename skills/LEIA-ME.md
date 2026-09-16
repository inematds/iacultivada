# Skills: /cultivar e /revisao-semanal

Duas skills para Claude Code e Codex que colocam o método em prática dentro do agente.

| Skill | O que faz |
|---|---|
| `/cultivar` | Entrevista de cinco perguntas e gera os arquivos do jardim (pessoal, jarvis ou empresa) na pasta atual, a partir dos modelos dos kits. |
| `/revisao-semanal` | Lê `FALHAS.md` e `MEMORY.md`, propõe a menor correção para cada falha e em qual arquivo entra, aponta memória vencida e tarefas que podem subir de nível. Só aplica depois que você confirma. |

## Instalar

```bash
git clone https://github.com/inematds/iacultivada.git
cd iacultivada/skills
./install.sh            # Claude Code: copia para ~/.claude/skills/
./install.sh --codex    # Codex: copia para ~/.codex/skills/
```

O script não sobrescreve uma skill que já exista com o mesmo nome. Para atualizar, apague a pasta antiga em `~/.claude/skills/` (ou `~/.codex/skills/`) e rode de novo.

## Usar

Na pasta em que o agente vai trabalhar:

```
/cultivar          → responda as cinco perguntas; revise o arquivo-mestre
/revisao-semanal   → toda sexta; confirme os itens que quer aplicar
```

A skill `/cultivar` carrega os modelos em `cultivar/modelos/` (cópias dos kits), então funciona sem internet depois de instalada.
