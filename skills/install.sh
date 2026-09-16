#!/usr/bin/env bash
# Instala as skills cultivar e revisao-semanal. Padrão: Claude Code (~/.claude/skills). --codex: ~/.codex/skills
set -e
cd "$(dirname "$0")"
DEST="$HOME/.claude/skills"
[ "${1:-}" = "--codex" ] && DEST="$HOME/.codex/skills"
mkdir -p "$DEST"
for s in cultivar revisao-semanal; do
  if [ -e "$DEST/$s" ]; then
    echo "[pular] $DEST/$s já existe (apague para reinstalar)"
  else
    cp -r "$s" "$DEST/$s" && echo "[ok] $DEST/$s"
  fi
done
echo "Pronto. Abra o agente e digite /cultivar."
