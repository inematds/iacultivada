# Skills: /cultivar and /revisao-semanal

Two skills for Claude Code and Codex that put the method into practice inside the agent.

| Skill | What it does |
|---|---|
| `/cultivar` | A five-question interview that generates the garden's files (personal, jarvis, or business) in the current folder, from the kit templates. |
| `/revisao-semanal` | Reads `FALHAS.md` and `MEMORY.md`, proposes the smallest fix for each failure and which file it goes in, flags expired memory and tasks that can move up a level. Only applies after you confirm. |

## Install

```bash
git clone https://github.com/inematds/iacultivada.git
cd iacultivada/skills
./install.sh            # Claude Code: copies to ~/.claude/skills/
./install.sh --codex    # Codex: copies to ~/.codex/skills/
```

The script does not overwrite a skill that already exists with the same name. To update, delete the old folder in `~/.claude/skills/` (or `~/.codex/skills/`) and run it again.

## Use

In the folder where the agent will work:

```
/cultivar          → answer the five questions; review the master file
/revisao-semanal   → every Friday; confirm the items you want to apply
```

The `/cultivar` skill loads the templates in `cultivar/modelos/` (copies of the kits), so it works offline once installed. The skills and templates are written in Portuguese.
