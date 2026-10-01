# BOCH-NEXO-MX

Suite web para visualizar mercados, cartera y automatizaciones. Este repositorio contiene una base **real y ejecutable**, pero nunca incluye claves privadas, frases semilla, tokens ni credenciales.

## Qué incluye

- Landing/dashboard estático en `index.html`, `styles.css` y `script.js`.
- API local en Node.js sin dependencias externas:
  - `GET /api/health`
  - `GET /api/market?ids=bitcoin,ethereum,solana`
  - `GET /api/mempool`
  - `GET /api/portfolio`
- Portfolio de ejemplo en `data/portfolio.example.json`.
- Plantilla de configuración en `.env.example`.
- Scripts de arranque para ISH/iPhone en `ish/`.
- Guía de iCloud Drive, seguridad, despliegue y límites técnicos en `docs/`.

## Arranque local

Requiere Node.js 20+.

```bash
npm start
# abrir http://localhost:3000
```

El endpoint de CoinGecko funciona sin clave para pruebas, sujeto a sus límites. Para Etherscan u otros proveedores, configura variables de entorno en un archivo `.env` local; `.env` está ignorado por Git.

## ISH en iPhone

ISH ejecuta el servidor dentro del iPhone, pero no convierte automáticamente una web en una app iOS ni concede acceso directo a iCloud Drive. Consulta `ish/README.md` y `docs/icloud.md`.

```sh
sh ish/install.sh
sh ish/run.sh
```

## iCloud Drive

Un servidor web no debe recibir el Apple ID ni una contraseña de iCloud. La integración correcta requiere una app iOS/macOS con CloudKit o un flujo explícito de selección de archivos. Consulta `docs/icloud.md`.

## Seguridad

- No subas `.env`, claves privadas, seed phrases ni archivos de wallet.
- No guardes fondos reales en el servidor.
- La cartera mostrada es contabilidad de seguimiento, no custodia.
- Cambia los valores de ejemplo antes de desplegar.
- Revisa límites y términos de cada API antes de producción.

## Estructura

```text
BOCH-NEXO-MX/
├── index.html              # interfaz
├── styles.css              # estilos
├── script.js               # cliente y precios
├── server/index.js         # API local
├── data/portfolio.example.json
├── ish/                    # ejecución en ISH
├── docs/                   # arquitectura y iCloud
├── .env.example
└── .gitignore
```
