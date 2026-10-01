#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
[ -f package.json ] || { echo "No se encontró package.json"; exit 1; }
exec npm start
