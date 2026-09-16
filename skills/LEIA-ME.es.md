# Skills: /cultivar y /revisao-semanal

Dos skills para Claude Code y Codex que ponen el método en práctica dentro del agente.

| Skill | Qué hace |
|---|---|
| `/cultivar` | Entrevista de cinco preguntas y genera los archivos del jardín (personal, jarvis o empresa) en la carpeta actual, a partir de los modelos de los kits. |
| `/revisao-semanal` | Lee `FALHAS.md` y `MEMORY.md`, propone la menor corrección para cada fallo y en qué archivo entra, señala memoria vencida y tareas que pueden subir de nivel. Solo aplica después de que confirmes. |

## Instalar

```bash
git clone https://github.com/inematds/iacultivada.git
cd iacultivada/skills
./install.sh            # Claude Code: copia a ~/.claude/skills/
./install.sh --codex    # Codex: copia a ~/.codex/skills/
```

El script no sobrescribe una skill que ya exista con el mismo nombre. Para actualizar, borra la carpeta vieja en `~/.claude/skills/` (o `~/.codex/skills/`) y vuelve a ejecutarlo.

## Usar

En la carpeta en la que va a trabajar el agente:

```
/cultivar          → responde las cinco preguntas; revisa el archivo maestro
/revisao-semanal   → todos los viernes; confirma los ítems que quieres aplicar
```

La skill `/cultivar` carga los modelos en `cultivar/modelos/` (copias de los kits), así que funciona sin internet después de instalada. Las skills y sus modelos están en portugués.
