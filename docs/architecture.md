# Arquitectura y manejo

```text
Navegador/Safari ──> index.html + styles.css + script.js
                       │
                       └──> /api/* (Node.js)
                              ├── CoinGecko: precios
                              ├── Mempool: tarifas BTC
                              └── portfolio.json: cantidades configuradas por ti

ISH/iPhone ──> ejecuta el mismo servidor local
App iOS futura ──> selector de iCloud Drive + CloudKit + Keychain
```

## Cómo entender el proyecto

- `index.html`: estructura y textos de la interfaz.
- `styles.css`: diseño responsive.
- `script.js`: comportamiento del navegador.
- `server/index.js`: servidor y proxy de APIs; evita exponer configuración sensible al cliente.
- `data/portfolio.example.json`: formato de cartera de demostración. Copia a `data/portfolio.json` para datos locales; ese archivo está ignorado.
- `ish/`: comandos para ejecutar en ISH.
- `docs/`: decisiones y límites de seguridad.

## Qué falta para producción

1. Autenticación y autorización con sesiones seguras.
2. Base de datos gestionada y copias cifradas.
3. Rate limiting, logs sin secretos, validación y monitorización.
4. Proveedor de precios con contrato/límites conocidos.
5. App iOS nativa para CloudKit/iCloud Drive.
6. Auditoría de wallet antes de manejar fondos reales.
7. CI, pruebas automatizadas, HTTPS y despliegue con secretos del proveedor.

Esta versión es funcional para datos de mercado públicos y seguimiento local. No es custodial y no ejecuta transacciones blockchain.
