#!/bin/sh
set -eu
command -v apk >/dev/null 2>&1 || { echo "Este script está pensado para ISH/Alpine Linux."; exit 1; }
apk update
apk add --no-cache nodejs npm git
printf '%s\n' 'Dependencias instaladas. Ejecuta: npm install && sh ish/run.sh'
