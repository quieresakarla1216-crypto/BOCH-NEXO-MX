# iCloud Drive y BOCH-NEXO-MX

## Lo que sí se puede hacer

- Usar la app Archivos para copiar manualmente exportaciones JSON/CSV al proyecto o a una ubicación accesible.
- Crear una app iOS/macOS que use `UIDocumentPickerViewController` para que el usuario seleccione un archivo de iCloud Drive.
- Usar CloudKit para sincronizar datos propios de la aplicación en una base privada del usuario.

## Lo que no debe hacerse

- Pedir o guardar el Apple ID y contraseña en el HTML.
- Intentar leer todo iCloud Drive desde JavaScript sin permiso del sistema.
- Subir seed phrases, claves privadas o backups de wallet a iCloud sin cifrado de extremo a extremo y una revisión de seguridad.
- Poner credenciales de CloudKit o tokens en el frontend público.

## Integración recomendada

1. Mantén el sitio web como cliente de la API.
2. Crea una app Swift/SwiftUI separada en Xcode con capability iCloud/CloudKit.
3. Usa el selector de documentos para importar un `portfolio.json`.
4. Valida tamaño, esquema y propietario del archivo en la app.
5. Envía al backend solamente datos no sensibles y autenticados.
6. Guarda secretos únicamente en Keychain/Secure Enclave, nunca en Git.

La parte de iCloud no se puede completar de forma responsable con solo HTML ni desde ISH. Requiere Apple Developer, bundle identifier, entitlements y pruebas en un dispositivo.
