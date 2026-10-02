# BOCH-NEXO-MX

Este proyecto está pensado para funcionar como sistema digital seguro, modular, útil y responsable para iPhone 13, Android 11 y entornos Linux básicos.

## Objetivo

Crear una capa de acceso digital para:
- terminal web segura
- IA local y modular
- APIs de mercado y blockchain
- sincronización de wallets
- seguridad local
- apoyo humanitario y responsable

## Compatibilidad

- iPhone 13 + ISH / Alpine / terminal Linux
- Android 11 + APK / WebView / navegador local
- Linux ligero para pruebas y acceso terminal

## Arquitectura del sistema

```text
mobile/
├── ios/
│   ├── README.md
│   ├── ish_setup.sh
│   └── safari_launcher.html
├── android/
│   ├── README.md
│   ├── AndroidManifest.xml
│   ├── MainActivity.java
│   └── app/
│       └── src/
├── shared/
│   ├── launch.html
│   ├── startup.js
│   ├── security.js
│   └── config.json
└── docs/
    └── compatibility.md
```

## ¿Qué va en cada lado?

### iPhone 13 (ISH / Linux)
- terminal Linux minimalista
- acceso a web local
- soporte para scripts de IA y seguridad
- almacenamiento local y consciente
- control offline y sesión segura

### Android 11
- web app / WebView básico
- acceso a terminal web o launcher local
- inicio directo desde navegador o APK
- facilidad de instalación y ejecución sencilla

## Criterios de seguridad

- no guardar claves públicas en la nube
- usar cifrado básico para archivos sensibles
- separar la capa de seguridad de la capa de UI
- mantener respaldo local
- usar testnet para pruebas
- validar identidad localmente antes de operar

## Inicio recomendado

### iPhone 13
```bash
apk update
apk add python3 py3-pip git curl
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py
```

### Android 11
- instalar APK o abrir la web app
- iniciar launcher local
- abrir terminal web o interfaz de acceso

## Estructura general del proyecto

```text
BOCH-NEXO-MX/
├── mobile/
├── web/
├── ai/
├── security/
├── wallet/
├── api/
├── docs/
├── LICENSE
├── README.md
├── requirements.txt
└── .gitignore
```

## Notas importantes

- El sistema debe operar con sentido, claridad y responsabilidad.
- No se promueve violencia ni engaño.
- La seguridad se prioriza sobre la comodidad.
- Las operaciones sensibles deben ejecutarse con validación y control.

---

BOCH-NEXO-MX • Tecnología útil, segura y humana.
