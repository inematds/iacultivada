#!/usr/bin/env bash
# Gera kit-pessoal.zip, kit-jarvis.zip e kit-empresa.zip a partir das pastas.
set -e
cd "$(dirname "$0")"
for k in kit-pessoal kit-jarvis kit-empresa; do
  rm -f "$k.zip"
  zip -qr "$k.zip" "$k" -x '*.DS_Store'
  echo "$k.zip: $(unzip -l "$k.zip" | tail -1)"
done
