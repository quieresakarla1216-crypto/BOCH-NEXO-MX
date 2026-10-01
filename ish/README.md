# Ejecutar BOCH-NEXO-MX en ISH

1. Instala ISH desde la App Store.
2. Clona el repositorio dentro de ISH:

```sh
git clone https://github.com/quieresakarla1216-crypto/BOCH-NEXO-MX.git
cd BOCH-NEXO-MX
sh ish/install.sh
npm install
sh ish/run.sh
```

3. Abre `http://127.0.0.1:3000` en Safari en el mismo iPhone.

Notas: iOS puede suspender procesos en segundo plano. ISH no tiene permisos mágicos para iCloud Drive, llavero, cámara o wallet. Para esas capacidades hace falta una app iOS con APIs de Apple y permisos explícitos.
