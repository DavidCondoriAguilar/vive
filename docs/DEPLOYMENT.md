# 🚀 Guía de Despliegue - Sueño Dorado Web

Esta guía te ayudará a configurar el despliegue automático de **Sueño Dorado Web** a **Hostinger** usando **GitHub Actions**.

---

## 📋 Requisitos Previos

- [ ] Cuenta de GitHub con acceso al repositorio
- [ ] Cuenta de Hostinger con acceso FTP
- [ ] Dominio configurado (suenodorado.pe o suenodorado.com)
- [ ] Node.js 20+ instalado localmente

---

## 🔐 PASO 1: Configurar GitHub Secrets

Los **GitHub Secrets** son variables de entorno seguras que el workflow puede usar. **NUNCA** coloques credenciales directamente en el código.

### 1.1 Ir a GitHub Secrets
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Secrets and variables** > **Actions**
4. Click en **New repository secret**

### 1.2 Agregar los siguientes Secrets

| Secret Name | Descripción | Ejemplo |
|-------------|-------------|---------|
| `FTP_SERVER` | Servidor FTP de Hostinger | `ftp.suenodorado.pe` o `XX.XX.XX.XX` |
| `FTP_USERNAME` | Usuario FTP | `u123456789` o `ventas@suenodorado.pe` |
| `FTP_PASSWORD` | Contraseña FTP | `tu_contraseña_segura` |
| `FTP_SERVER_DIR` | Directorio destino en el servidor | `/public_html/` o `/htdocs/` |
| `VITE_BRAND_NAME` | Nombre de la marca | `Sueño Dorado` |
| `VITE_BRAND_EMAIL` | Email de contacto | `ventas@suenodorado.pe` |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp | `51989223448` |
| `VITE_PRODUCTION_URL` | URL de producción | `https://suenodorado.pe` |
| `VITE_API_URL` | URL de API (si aplica) | `https://api.suenodorado.pe` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID (opcional) | `G-XXXXXXXXXX` |
| `VITE_FB_PIXEL_ID` | Facebook Pixel ID (opcional) | `XXXXXXXXXXXXXXXXX` |

#### 📌 **Cómo obtener credenciales FTP de Hostinger:**

1. Inicia sesión en [Hostinger](https://www.hostinger.com/)
2. Ve a **Hosting** > **Panel de Control**
3. En el panel, busca **Archivos** > **Administrador de archivos** o **FTP Accounts**
4. Encontrarás:
   - **Servidor FTP**: `ftp.tudominio.com` o la IP
   - **Usuario FTP**: Tu usuario
   - **Puerto**: `21` (por defecto)
5. Crea una contraseña nueva si es necesario
6. El directorio suele ser `/public_html/` o `/htdocs/`

---

## 🏗️ PASO 2: Verificar Archivos Locales

Antes de hacer push, asegúrate de que estos archivos existen:

### 2.1 Verificar estructura del proyecto

```
sueno-dorado-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          ✅ Workflow de GitHub Actions
├── public/
│   └── .htaccess               ✅ Configuración Apache para SPA
├── src/
│   └── ...
├── .env.example                ✅ Ejemplo de variables de entorno
├── .env.production             ✅ Variables de producción (NO subir a Git)
├── .gitignore                  ✅ Ignora .env y dist
├── vite.config.js              ✅ Configuración de Vite (base: '/')
├── package.json                ✅ Dependencias del proyecto
└── README.md                   ✅ Este archivo
```

### 2.2 Verificar `.gitignore`

Asegúrate de que `.gitignore` incluya:

```gitignore
# Variables de entorno
.env
.env.local
.env.production
.env.development

# Build output
dist
dist-ssr
node_modules
```

### 2.3 Verificar `vite.config.js`

Debe tener la propiedad `base` configurada:

```javascript
export default defineConfig({
  base: '/',  // ✅ Para dominio principal (suenodorado.pe)
  // Si fuera un subdirectorio: base: '/subdirectorio/'
  ...
})
```

---

## 🚀 PASO 3: Desplegar

### 3.1 Hacer commit y push

```bash
# 1. Verifica cambios
git status

# 2. Agrega los archivos (NO agregues .env.production)
git add .

# 3. Commit
git commit -m "feat: Add GitHub Actions CI/CD for Hostinger deployment"

# 4. Push a la rama principal
git push origin main
```

### 3.2 Monitorear el Deployment

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **Actions**
3. Verás el workflow **"🚀 Deploy to Hostinger"** ejecutándose
4. Haz click en el workflow para ver los detalles en tiempo real

**Estados posibles:**
- 🟡 **Amarillo (Running)**: Está ejecutándose
- 🟢 **Verde (Success)**: Deployment exitoso ✅
- 🔴 **Rojo (Failed)**: Algo falló ❌

---

## 🔍 PASO 4: Verificar el Despliegue

1. **Verificar archivos en Hostinger:**
   - Conecta vía FTP o File Manager de Hostinger
   - Verifica que los archivos de `/dist` estén en `/public_html/`
   - Debe haber un `index.html`, `.htaccess`, y carpeta `assets/`

2. **Verificar el sitio web:**
   - Abre `https://suenodorado.pe` en tu navegador
   - Verifica que la página cargue correctamente
   - Navega a diferentes secciones para confirmar el routing de SPA

3. **Verificar cache del navegador:**
   - Si ves versión antigua, presiona `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)

---

## 🐛 Troubleshooting (Solución de Problemas)

### ❌ Problema 1: "Build failed"
**Síntoma**: El job de build falla en GitHub Actions

**Solución**:
1. Verifica que todas las dependencias estén en `package.json`
2. Ejecuta localmente: `npm ci && npm run build`
3. Revisa los logs del workflow en GitHub Actions

---

### ❌ Problema 2: "FTP Connection refused"
**Síntoma**: El deploy falla al conectar al servidor FTP

**Solución**:
1. Verifica las credenciales FTP en GitHub Secrets
2. Confirma que el servidor FTP esté activo
3. Prueba conectar manualmente con FileZilla
4. Verifica que el puerto sea `21` y el protocolo sea `ftps` o `ftp`

---

### ❌ Problema 3: "Página en blanco después del deploy"
**Síntoma**: El sitio carga pero muestra pantalla blanca

**Solución**:
1. Abre la consola del navegador (F12) y revisa errores
2. Verifica que `vite.config.js` tenga `base: '/'`
3. Confirma que el archivo `.htaccess` esté en la raíz de `/public_html/`
4. Verifica que las rutas de assets sean correctas

---

### ❌ Problema 4: "404 al refrescar páginas internas"
**Síntoma**: Al refrescar `/producto/123` da error 404

**Solución**:
1. Confirma que `.htaccess` esté en `/public_html/`
2. Verifica que Apache tenga `mod_rewrite` habilitado
3. Contacta a soporte de Hostinger si persiste

---

### ❌ Problema 5: "Variables de entorno no se cargan"
**Síntoma**: `import.meta.env.VITE_*` retorna `undefined`

**Solución**:
1. Verifica que los secrets en GitHub estén configurados correctamente
2. Confirma que el workflow cree el archivo `.env.production`
3. Las variables DEBEN empezar con `VITE_` para ser expuestas al cliente

---

## 🔄 PASO 5: Deployments Automáticos

Una vez configurado, **cada push a la rama `main`** activará automáticamente:

1. 🏗️ **Build**: Construcción de la app con Vite
2. 🚀 **Deploy**: Subida automática a Hostinger vía FTP
3. ✅ **Verify**: Verificación del deployment

**No necesitas hacer nada manualmente** - GitHub Actions lo hace todo por ti.

---

## 📊 Métricas de Performance

Después del deployment, verifica:

- ✅ **Lighthouse Score**: Ejecuta audit en Chrome DevTools
- ✅ **GTmetrix**: [gtmetrix.com](https://gtmetrix.com/)
- ✅ **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev/)

**Objetivos**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción local (test)
npm run build

# Preview del build local
npm run preview

# Lint del código
npm run lint

# Ver logs de GitHub Actions (CLI)
gh run list
gh run view <run-id>
```

---

## 📞 Soporte

Si tienes problemas:

1. **Revisa los logs** en GitHub Actions
2. **Verifica** las credenciales FTP
3. **Contacta** al equipo de desarrollo
4. **Soporte Hostinger**: [support.hostinger.com](https://support.hostinger.com/)

---

## 📝 Checklist Final

Antes de deploy a producción:

- [ ] Todos los GitHub Secrets configurados
- [ ] `.gitignore` ignora archivos `.env*`
- [ ] `vite.config.js` tiene `base: '/'`
- [ ] `.htaccess` está en `/public/`
- [ ] Variables de entorno usan `VITE_*` prefix
- [ ] Build local funciona: `npm run build`
- [ ] Preview local funciona: `npm run preview`
- [ ] Workflow de GitHub Actions probado
- [ ] SSL/HTTPS configurado en Hostinger
- [ ] Dominio apunta correctamente a Hostinger

---

## ✅ ¡Listo!

Ahora tienes un sistema de CI/CD profesional. Cada vez que hagas `git push`, tu sitio se actualizará automáticamente en Hostinger.

**Happy Coding! 🚀**
