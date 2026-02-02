# 🔐 Configuración de GitHub Secrets para Hostinger

Esta guía paso a paso te mostrará cómo configurar **GitHub Secrets** para el despliegue automático.

---

## 📋 Paso 1: Obtener Credenciales FTP de Hostinger

### Opción A: Desde el Panel de Hostinger (hPanel)

1. **Inicia sesión en Hostinger**
   - Ve a [https://www.hostinger.com/](https://www.hostinger.com/)
   - Ingresa con tu usuario y contraseña

2. **Accede al Hosting**
   - En el panel principal, click en **"Hosting"**
   - Selecciona el plan donde está tu dominio `suenodorado.pe`

3. **Ve a la sección Files (Archivos)**
   - En el menú lateral, busca **"Files"** > **"FTP Accounts"**
   - O busca **"Administrador de archivos"** > **"FTP"**

4. **Obtén tus credenciales**
   
   Verás algo como:
   ```
   FTP Host: ftp.suenodorado.pe
   Username: u123456789
   Port: 21
   ```

5. **Crear/Resetear contraseña FTP**
   - Si no tienes contraseña, haz click en **"Change Password"** o **"Create FTP Account"**
   - Guarda esta contraseña de forma segura (la necesitarás para GitHub Secrets)

6. **Identificar el directorio de destino**
   - Usualmente es `/public_html/` para dominios principales
   - O `/htdocs/` en algunos casos
   - Si usas subdirectorio: `/public_html/subdirectorio/`

---

### Opción B: Desde el File Manager de Hostinger

1. Ve a **Files** > **File Manager**
2. Observa la ruta actual - usualmente es `/public_html/`
3. Esta es la ruta que usarás en `FTP_SERVER_DIR`

---

## 📋 Paso 2: Configurar GitHub Secrets

### 2.1 Acceder a GitHub Secrets

1. Ve a tu repositorio en GitHub
2. Click en **⚙️ Settings** (Configuración) en la parte superior
3. En el menú lateral izquierdo, busca **"Secrets and variables"** > **"Actions"**
4. Click en el botón verde **"New repository secret"**

---

### 2.2 Agregar Secrets uno por uno

Para cada secret, haz lo siguiente:

1. Click en **"New repository secret"**
2. En **"Name"**, escribe el nombre del secret (EXACTAMENTE como se muestra abajo)
3. En **"Secret"**, pega el valor correspondiente
4. Click en **"Add secret"**

---

## 🔐 Secrets Requeridos

### 🌐 Credenciales FTP (CRÍTICAS)

#### `FTP_SERVER`
**Descripción**: Dirección del servidor FTP de Hostinger

**Valor de ejemplo**:
```
ftp.suenodorado.pe
```
o
```
123.456.789.012
```

**Cómo obtenerlo**: Desde hPanel > FTP Accounts

---

#### `FTP_USERNAME`
**Descripción**: Usuario FTP de Hostinger

**Valor de ejemplo**:
```
u123456789
```
o
```
ventas@suenodorado.pe
```

**Cómo obtenerlo**: Desde hPanel > FTP Accounts

---

#### `FTP_PASSWORD`
**Descripción**: Contraseña FTP

**Valor de ejemplo**:
```
TuContraseñaSuperSegura123!
```

⚠️ **IMPORTANTE**: 
- Usa una contraseña fuerte
- Nunca la compartas públicamente
- Si la olvidas, puedes resetearla desde hPanel

---

#### `FTP_SERVER_DIR`
**Descripción**: Directorio destino en el servidor donde se subirán los archivos

**Valores comunes**:
```
/public_html/
```
o
```
/htdocs/
```
o
```
/domains/suenodorado.pe/public_html/
```

⚠️ **IMPORTANTE**: 
- Debe terminar con `/`
- Debe ser la ruta absoluta desde la raíz FTP

---

### 🔧 Variables de Entorno de la Aplicación

#### `VITE_BRAND_NAME`
```
Sueño Dorado
```

#### `VITE_BRAND_EMAIL`
```
ventas@suenodorado.pe
```

#### `VITE_WHATSAPP_NUMBER`
```
51989223448
```

#### `VITE_PRODUCTION_URL`
```
https://suenodorado.pe
```

⚠️ **IMPORTANTE**: 
- Debe incluir `https://` si tienes SSL
- NO debe terminar con `/`

---

#### `VITE_API_URL`
```
https://api.suenodorado.pe
```

⚠️ Si no tienes API, puedes usar:
```
https://suenodorado.pe
```

---

### 📊 Analytics (Opcionales)

#### `VITE_GA_MEASUREMENT_ID`
**Descripción**: ID de Google Analytics

**Valor de ejemplo**:
```
G-XXXXXXXXXX
```

**Cómo obtenerlo**:
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Admin > Data Streams > Tu sitio web
3. Copia el "Measurement ID"

---

#### `VITE_FB_PIXEL_ID`
**Descripción**: ID del Facebook Pixel

**Valor de ejemplo**:
```
123456789012345
```

**Cómo obtenerlo**:
1. Ve a [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu Pixel
3. Copia el Pixel ID (son números)

---

## ✅ Verificar Secrets Configurados

Después de agregar todos los secrets, deberías ver una lista como esta:

```
FTP_SERVER                   ••••••••••••••
FTP_USERNAME                 ••••••••••••••
FTP_PASSWORD                 ••••••••••••••
FTP_SERVER_DIR               ••••••••••••••
VITE_BRAND_NAME              ••••••••••••••
VITE_BRAND_EMAIL             ••••••••••••••
VITE_WHATSAPP_NUMBER         ••••••••••••••
VITE_PRODUCTION_URL          ••••••••••••••
VITE_API_URL                 ••••••••••••••
VITE_GA_MEASUREMENT_ID       ••••••••••••••
VITE_FB_PIXEL_ID             ••••••••••••••
```

---

## 🧪 Probar Conexión FTP (Opcional pero Recomendado)

Antes de hacer deployment, prueba manualmente que las credenciales funcionen:

### Usando FileZilla (Windows/Mac/Linux)

1. **Descarga FileZilla Client**: [https://filezilla-project.org/](https://filezilla-project.org/)

2. **Configurar conexión**:
   - Servidor: `ftp.suenodorado.pe`
   - Usuario: `u123456789`
   - Contraseña: `TuContraseña`
   - Puerto: `21`
   - Protocolo: `FTP - File Transfer Protocol`

3. **Conectar**:
   - Click en "Conexión rápida"
   - Deberías ver los archivos del servidor

4. **Verificar directorio**:
   - Navega a `/public_html/` o la ruta configurada
   - Asegúrate de tener permisos de escritura

---

### Usando WinSCP (Windows)

1. **Descarga WinSCP**: [https://winscp.net/](https://winscp.net/)

2. **Nueva sesión**:
   - Protocolo: `FTP`
   - Servidor: `ftp.suenodorado.pe`
   - Puerto: `21`
   - Usuario y contraseña

3. **Conectar y verificar**

---

## 🐛 Troubleshooting Secrets

### ❌ "Secret not found"
**Solución**: Verifica que el nombre del secret sea EXACTAMENTE igual (case-sensitive)

---

### ❌ "FTP Connection refused"
**Posibles causas**:
1. Contraseña incorrecta
2. Usuario incorrecto
3. Servidor FTP inactivo
4. Firewall bloqueando conexión

**Solución**:
1. Prueba conectar con FileZilla usando las mismas credenciales
2. Verifica con soporte de Hostinger que FTP esté activo
3. Asegúrate de usar puerto `21`

---

### ❌ "Permission denied" al subir archivos
**Solución**: 
1. Verifica que `FTP_SERVER_DIR` sea correcto
2. Asegúrate de tener permisos de escritura en ese directorio
3. Contacta a soporte de Hostinger para verificar permisos

---

## 📝 Checklist Final

Antes de hacer tu primer deployment, verifica:

- [ ] Todos los 11 secrets están configurados en GitHub
- [ ] FTP_SERVER tiene el formato correcto (sin `ftp://`, sin `/`)
- [ ] FTP_SERVER_DIR termina con `/`
- [ ] VITE_PRODUCTION_URL incluye `https://` pero NO termina con `/`
- [ ] Probaste la conexión FTP con FileZilla (recomendado)
- [ ] Tienes acceso al repositorio de GitHub
- [ ] La rama principal es `main` (o ajustaste el workflow a `master`)

---

## 🚀 ¡Listo para Deployment!

Una vez configurados todos los secrets:

1. Haz commit de tus cambios locales
2. Push a la rama `main`
3. Ve a **Actions** en GitHub
4. Observa el workflow ejecutándose

---

## 📞 ¿Necesitas Ayuda?

- **Soporte Hostinger**: [https://support.hostinger.com/](https://support.hostinger.com/)
- **GitHub Secrets Docs**: [https://docs.github.com/en/actions/security-guides/encrypted-secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

## 🔒 Seguridad

⚠️ **NUNCA** compartas tus secrets públicamente:
- No los pongas en el código
- No los subas en screenshots
- No los compartas en chat público
- GitHub los oculta automáticamente en logs

---

**¡Happy Deploying! 🚀**
