# ✅ CHECKLIST RÁPIDO - Antes de Deployment

**Fecha**: 2 de Febrero de 2026  
**Usa este checklist antes de cada deployment**

---

## 🔥 CRÍTICO (Hazlo AHORA)

- [ ] **1. Ejecutar script de limpieza de imágenes**
  ```bash
  npm run images:analyze
  ```
  Revisa el reporte y elimina imágenes no usadas

- [ ] **2. Configurar GitHub Secrets** (Solo primera vez)
  - [ ] FTP_SERVER
  - [ ] FTP_USERNAME
  - [ ] FTP_PASSWORD
  - [ ] FTP_SERVER_DIR
  - [ ] VITE_BRAND_NAME
  - [ ] VITE_BRAND_EMAIL
  - [ ] VITE_WHATSAPP_NUMBER
  - [ ] VITE_PRODUCTION_URL
  - [ ] VITE_API_URL
  - [ ] VITE_GA_MEASUREMENT_ID (opcional)
  - [ ] VITE_FB_PIXEL_ID (opcional)

- [ ] **3. Validar proyecto**
  ```bash
  npm run validate
  ```
  Debe mostrar: "✅ ¡TODO PERFECTO!"

---

## ⚡ IMPORTANTE (Antes de push)

- [ ] **4. Build local exitoso**
  ```bash
  npm run build
  ```
  Sin errores

- [ ] **5. Preview funciona**
  ```bash
  npm run preview
  ```
  Abre http://localhost:4173 y verifica

- [ ] **6. Archivos .env NO están en Git**
  ```bash
  git status
  ```
  `.env.production` NO debe aparecer

---

## 🎯 RECOMENDADO (Performance)

- [ ] **7. Convertir PNG grandes a WebP**
  - [ ] factory-pattern.png → .webp
  - [ ] mattress-workshop-peru.png → .webp
  - [ ] premium_mattress_cutaway_view_v2.png → .webp
  - [ ] wholesale_factory_production.png → .webp

- [ ] **8. Crear imágenes SEO**
  - [ ] /public/images/og-image.jpg (1200x630px)
  - [ ] /public/images/twitter-image.jpg (1200x600px)

- [ ] **9. Optimizar imágenes**
  ```bash
  npm run images:optimize
  ```

---

## 🚀 DEPLOYMENT

- [ ] **10. Hacer push**
  ```bash
  git add .
  git commit -m "feat: descripción"
  git push origin main
  ```

- [ ] **11. Monitorear GitHub Actions**
  - Ve a: GitHub → Actions
  - Espera el ✅ verde

- [ ] **12. Verificar sitio**
  - Abre: https://suenodorado.pe
  - Prueba navegación
  - Refresh en rutas internas (no debe dar 404)

---

## 📊 ESTADO ACTUAL

**Completado**:
- ✅ Auditoría CI/CD
- ✅ Workflow GitHub Actions creado
- ✅ Documentación organizada en /docs
- ✅ PNG duplicados eliminados
- ✅ Scripts de validación creados

**Pendiente (TU ACCIÓN)**:
- ⏳ Configurar GitHub Secrets
- ⏳ Convertir 4 PNG a WebP
- ⏳ Eliminar imágenes no usadas
- ⏳ Primer deployment

---

## 🎯 TIEMPO ESTIMADO

- Configurar secrets: **15 min**
- Limpiar imágenes: **10 min**
- Convertir PNG a WebP: **5 min**
- Primer deployment: **5 min**

**TOTAL: ~35 minutos** ⚡

---

## 📝 NOTAS

- Después del primer deployment, los siguientes son automáticos
- Solo haces `git push` y GitHub Actions hace todo
- Las imágenes no usadas ocupan espacio en Hostinger → Elimínalas

---

**¿Listo para empezar?** → Ejecuta `npm run images:analyze` primero
