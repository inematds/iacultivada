# Kits de cultivo

Tres carpetas, una por jardín. Cada una trae los archivos que cultivan un agente, ya estructurados y con un ejemplo ficticio completado para que veas el tamaño correcto.

| Kit | Para quién | Dónde van los archivos |
|---|---|---|
| `kit-pessoal/` | Quien usa IA en el chat (ChatGPT, Claude, Gemini) y quiere que trabaje contigo a lo largo del tiempo | En una carpeta tuya. Pegas el contenido al inicio de la conversación o en las instrucciones personalizadas / proyecto del chat. |
| `kit-jarvis/` | Quien usa un agente con herramientas (Claude Code, Codex, OpenClaw y similares) | En la carpeta en la que trabaja el agente. `CLAUDE.md` (Claude Code) o `AGENTS.md` (Codex) se lee automáticamente. |
| `kit-empresa/` | Quien va a poner un agente en un proceso de la empresa | En la carpeta del proyecto del agente, o en el sistema de prompts de la herramienta que usa la empresa. |

Reglas que valen para los tres:

1. **Copia la carpeta, borra el ejemplo ficticio y escribe el tuyo.** Una página buena vale más que veinte volcadas.
2. **Toda corrección va al archivo, no a la conversación.** Si explicaste lo mismo dos veces, falta una regla o un ejemplo.
3. **Revisa cada semana (personal y Jarvis) o cada quince días (empresa).** El `FALHAS.md` es la materia prima; cada línea se convierte en un cambio en el contexto, en las reglas o en los ejemplos.
4. **Nada de secretos dentro de los archivos.** Clave, contraseña y token quedan afuera; aquí entra solo la ruta o el nombre del lugar donde están.

Los archivos de los kits están en portugués; la estructura y el LEIA-ME explican cada archivo.

Zips listos: `kit-pessoal.zip`, `kit-jarvis.zip`, `kit-empresa.zip` (generados por `build.sh`).
