# ✅ CHECKLIST DE DEPLOYMENT - Sueño Dorado Web

Este checklist te guiará paso a paso para hacer tu primer deployment exitoso.

---

## 📋 FASE 1: PREPARACIÓN LOCAL

### ✅ Verificación del Proyecto

- [ ] **Node.js instalado** (versión 20+)
  ```bash
  node --version  # Debe mostrar v20.x.x o superior
  ```

- [ ] **Dependencias instaladas**
  ```bash
  npm install
  ```

- [ ] **Build local exitoso**
  ```bash
  npm run build
  ```
  ✅ Debe completarse sin errores

- [ ] **Validación pre-deployment**
  ```bash
  npm run validate
  ```
  ✅ Debe mostrar: "¡TODO PERFECTO! El proyecto está listo para deployment 🚀"

- [ ] **Preview local funcional**
  ```bash
  npm run preview
  ```
  Abre `http://localhost:4173` y verifica que todo funcione

---

## 📋 FASE 2: CONFIGURACIÓN DE HOSTINGER

### ✅ Credenciales FTP

- [ ] **Iniciar sesión en Hostinger**
  - URL: [https://www.hostinger.com/](https://www.hostinger.com/)
  - Usuario: `_________________`
  - Contraseña: `_________________`

- [ ] **Obtener credenciales FTP**
  - Panel: **Hosting** → **Archivos** → **FTP Accounts**
  - Anotar:
    - Servidor FTP: `_______________________`
    - Usuario FTP: `_______________________`
    - Puerto: `21` (estándar)

- [ ] **Crear/Resetear contraseña FTP**
  - Contraseña FTP: `_______________________`
  - ⚠️ Guárdala en un lugar seguro

- [ ] **Identificar directorio de destino**
  - Ruta típica para dominio principal: `/public_html/`
  - Ruta para subdirectorio: `/public_html/subdirectorio/`
  - Tu ruta: `_______________________`

---

### ✅ Verificación SSL/HTTPS

- [ ] **Verificar que el dominio tenga SSL**
  - Abre: `https://suenodorado.pe`
  - ✅ Debe mostrar candado 🔒 en la barra de direcciones
  - ❌ Si no tiene SSL, activarlo en Hostinger:
    - Panel: **Avanzado** → **SSL**
    - Activar "Let's Encrypt SSL"

- [ ] **Si tienes SSL, habilitar redirect HTTPS**
  - Editar: `public/.htaccess`
  - Descomentar líneas 9-10:
    ```apache
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
    ```

---

## 📋 FASE 3: CONFIGURACIÓN DE GITHUB

### ✅ Repositorio en GitHub

- [ ] **Repositorio creado**
  - URL: `https://github.com/____________________/sueno-dorado-web`

- [ ] **Código subido a GitHub**
  ```bash
  git remote -v  # Verificar que apunte a tu repo
  ```

- [ ] **Rama principal es `main`**
  ```bash
  git branch  # Debe mostrar * main
  ```
  ⚠️ Si usas `master`, editar `.github/workflows/deploy.yml` línea 6

---

### ✅ GitHub Secrets Configurados

Ir a: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

**Secrets de FTP** (CRÍTICOS):

- [ ] `FTP_SERVER`
  - Valor: `_______________________`
  - Ejemplo: `ftp.suenodorado.pe`

- [ ] `FTP_USERNAME`
  - Valor: `_______________________`
  - Ejemplo: `u123456789`

- [ ] `FTP_PASSWORD`
  - Valor: `_______________________`

- [ ] `FTP_SERVER_DIR`
  - Valor: `_______________________`
  - Ejemplo: `/public_html/`
  - ⚠️ DEBE terminar con `/`

**Secrets de Variables de Entorno**:

- [ ] `VITE_BRAND_NAME`
  - Valor: `Sueño Dorado`

- [ ] `VITE_BRAND_EMAIL`
  - Valor: `ventas@suenodorado.pe`

- [ ] `VITE_WHATSAPP_NUMBER`
  - Valor: `51989223448`

- [ ] `VITE_PRODUCTION_URL`
  - Valor: `https://suenodorado.pe`
  - ⚠️ NO termina con `/`

- [ ] `VITE_API_URL`
  - Valor: `https://api.suenodorado.pe`
  - (O `https://suenodorado.pe` si no hay API)

**Secrets Opcionales** (Analytics):

- [ ] `VITE_GA_MEASUREMENT_ID`
  - Valor: `G-XXXXXXXXXX`
  - (Dejar vacío si no usas Google Analytics)

- [ ] `VITE_FB_PIXEL_ID`
  - Valor: `123456789012345`
  - (Dejar vacío si no usas Facebook Pixel)

---

### ✅ Verificación de Secrets

- [ ] **11 secrets configurados** (o 9 si omitiste Analytics)
  - Ve a: **Settings** → **Secrets and variables** → **Actions**
  - Cuenta que todos estén listados

---

## 📋 FASE 4: PRIMER DEPLOYMENT

### ✅ Preparación del Código

- [ ] **Todos los cambios commiteados**
  ```bash
  git status  # No debe haber archivos sin commit
  ```

- [ ] **Verificar que .env* NO se suba**
  ```bash
  git status  # .env.production NO debe aparecer
  ```
  ✅ Correcto: Dice "nothing to commit"
  ❌ Incorrecto: Aparece `.env.production` en rojo

- [ ] **Última validación**
  ```bash
  npm run validate
  ```

---

### ✅ Push a GitHub

```bash
# 1. Ver cambios
git status

# 2. Agregar archivos
git add .

# 3. Commit
git commit -m "feat: Setup CI/CD for Hostinger deployment"

# 4. Push
git push origin main
```

- [ ] **Push exitoso sin errores**

---

### ✅ Monitorear GitHub Actions

- [ ] **Ir a GitHub Actions**
  - URL: `https://github.com/TU_USUARIO/sueno-dorado-web/actions`

- [ ] **Ver workflow ejecutándose**
  - Nombre: "🚀 Deploy to Hostinger"
  - Estado inicial: 🟡 Amarillo (Running)

- [ ] **Esperar a que termine**
  - ✅ Verde = Éxito
  - ❌ Rojo = Error

- [ ] **Si hay error, revisar logs**
  - Click en el workflow
  - Ver en qué paso falló
  - Ver sección "Troubleshooting" en DEPLOYMENT.md

---

## 📋 FASE 5: VERIFICACIÓN POST-DEPLOYMENT

### ✅ Verificar Archivos en Hostinger

- [ ] **Conectar vía FTP con FileZilla**
  - Servidor: `ftp.suenodorado.pe`
  - Usuario: `_______________________`
  - Contraseña: `_______________________`
  - Puerto: `21`

- [ ] **Verificar archivos en /public_html/**
  - ✅ `index.html` existe
  - ✅ `.htaccess` existe
  - ✅ Carpeta `assets/` existe
  - ✅ Carpeta `images/` existe

---

### ✅ Verificar Sitio Web

- [ ] **Abrir sitio en producción**
  - URL: `https://suenodorado.pe`

- [ ] **Página principal carga correctamente**
  - ✅ Logo visible
  - ✅ Menú de navegación funciona
  - ✅ Imágenes cargan

- [ ] **Navegación SPA funciona**
  - Click en un producto
  - Verifica que la página cargue

- [ ] **Refresh en ruta interna funciona**
  - Estando en `/producto/123`
  - Presiona F5 (refresh)
  - ✅ Debe cargar correctamente (no 404)
  - ❌ Si da 404, `.htaccess` no está funcionando

- [ ] **Responsive funciona**
  - Abre en móvil o redimensiona navegador
  - Verifica que se vea bien

---

### ✅ Verificar Performance

- [ ] **Lighthouse Audit**
  1. Abre Chrome DevTools (F12)
  2. Ve a pestaña "Lighthouse"
  3. Click "Analyze page load"
  4. Verifica scores:
     - Performance: `____` (Meta: 90+)
     - Accessibility: `____` (Meta: 95+)
     - Best Practices: `____` (Meta: 95+)
     - SEO: `____` (Meta: 100)

- [ ] **GTmetrix Test** (Opcional)
  - URL: [https://gtmetrix.com/](https://gtmetrix.com/)
  - Analizar: `https://suenodorado.pe`
  - Ver recomendaciones

---

### ✅ Verificar Consola del Navegador

- [ ] **Sin errores en consola**
  1. F12 → Pestaña "Console"
  2. ✅ No debe haber errores rojos
  3. ✅ No debe haber `console.log` (limpiados en build)

---

## 📋 FASE 6: CONFIGURACIÓN OPCIONAL

### ✅ Analytics (Opcional)

Si configuraste Analytics IDs:

- [ ] **Actualizar IDs en index.html**
  - Editar: `index.html`
  - Línea 138: Reemplazar `GA_MEASUREMENT_ID` con ID real
  - Línea 159: Reemplazar `YOUR_PIXEL_ID` con ID real

- [ ] **Rebuild y redeploy**
  ```bash
  git add index.html
  git commit -m "feat: Add real Analytics IDs"
  git push origin main
  ```

---

### ✅ Dominio Personalizado

- [ ] **DNS configurado**
  - Dominio `suenodorado.pe` apunta a Hostinger
  - Tipo A: `IP_DE_HOSTINGER`
  - TTL: 14400 (o 3600)

- [ ] **Propagación DNS completa**
  - Verificar en: [https://dnschecker.org/](https://dnschecker.org/)
  - Buscar: `suenodorado.pe`
  - ✅ Debe mostrar IP de Hostinger globalmente

---

## 📋 FASE 7: DEPLOYMENTS FUTUROS

### ✅ Workflow Automático

A partir de ahora, cada vez que hagas `git push origin main`:

1. 🏗️ GitHub Actions hará build automáticamente
2. 🚀 Subirá archivos a Hostinger vía FTP
3. ✅ Sitio se actualizará automáticamente

**No necesitas hacer nada manual** - ¡Todo es automático! 🎉

---

### ✅ Proceso de Desarrollo

```bash
# 1. Crear rama de feature
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios
# ... editar archivos ...

# 3. Validar localmente
npm run dev           # Probar en desarrollo
npm run validate      # Validar configuración
npm run build         # Probar build

# 4. Commit y push
git add .
git commit -m "feat: descripción"
git push origin feature/nueva-funcionalidad

# 5. Crear Pull Request en GitHub
# 6. Merge a main
# 7. ¡Deployment automático! 🚀
```

---

## 🎉 ¡FELICIDADES!

Si completaste todos los checkmarks, tu proyecto está:

- ✅ **Deployeado en producción**
- ✅ **Con CI/CD automático**
- ✅ **Optimizado para performance**
- ✅ **Seguro y profesional**

---

## 📊 RESUMEN DE TIMESTAMPS

| Fase | Duración Estimada |
|------|-------------------|
| Fase 1: Preparación Local | 5 min |
| Fase 2: Config Hostinger | 10 min |
| Fase 3: Config GitHub | 10 min |
| Fase 4: Primer Deployment | 5 min |
| Fase 5: Verificación | 10 min |
| Fase 6: Config Opcional | 5 min |
| **TOTAL** | **~45 min** |

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona:

1. ✅ Revisa los **logs de GitHub Actions**
2. ✅ Lee **DEPLOYMENT.md** → sección Troubleshooting
3. ✅ Verifica que todos los **secrets estén correctos**
4. ✅ Prueba **conectar con FileZilla** manualmente

---

## 🔄 Próximos Pasos

Después del deployment:

- [ ] Agregar más productos al catálogo
- [ ] Configurar Google Analytics correctamente
- [ ] Optimizar imágenes a WebP
- [ ] Implementar service worker para PWA
- [ ] Agregar tests automatizados

---

**¡Happy Deploying! 🚀**

*Última actualización: 2 de Febrero de 2026*
