# 🛠️ GUÍA DE SCRIPTS - Sueño Dorado Web

Scripts útiles para optimizar y mantener tu proyecto.

---

## 📋 SCRIPTS DISPONIBLES

### 🔍 Análisis y Validación

#### `npm run validate`
**Qué hace**: Valida que todo esté listo para deployment
**Cuándo usarlo**: Antes de hacer `git push`
**Output**: Checklist de configuración (✅ o ❌)

```bash
npm run validate
```

---

#### `npm run images:analyze`
**Qué hace**: Analiza qué imágenes se usan y cuáles no
**Cuándo usarlo**: Antes de limpiar imágenes
**Output**: Reporte de imágenes usadas vs no usadas

```bash
npm run images:analyze
```

**Ejemplo de output**:
```
📦 /public/images/ - DUPLICADOS PNG (ELIMINAR)
❌ NO USADO detail-goldencito-mp.png
   Razón: Existe versión .webp
```

---

#### `npm run images:clean`
**Qué hace**: **ELIMINA automáticamente** imágenes no usadas
**Cuándo usarlo**: Cuando quieras liberar espacio
**⚠️ CUIDADO**: Pide confirmación antes de eliminar

```bash
npm run images:clean
```

**Proceso**:
1. Busca imágenes no usadas
2. Calcula espacio a liberar
3. Te pregunta: "¿Deseas eliminar estas X imágenes?"
4. Escribe `SI` para confirmar
5. Elimina y muestra cuánto espacio liberó

**Ejemplo**:
```
⚠️  IMÁGENES NO USADAS (14):
1. banners/delivery.png (250.45 KB)
2. carousel/flyer-hq.png (180.23 KB)
...

Espacio total a liberar: 3.45 MB

¿Deseas eliminar estas 14 imágenes?
Escribe 'SI' para confirmar: SI

✅ 14 imágenes eliminadas
💾 3.45 MB liberados
```

---

#### `npm run build:analyze`
**Qué hace**: Analiza el tamaño de tu build `/dist`
**Cuándo usarlo**: Después de `npm run build`
**Output**: Qué archivos ocupan más espacio

```bash
npm run build
npm run build:analyze
```

**Ejemplo de output**:
```
📦 Tamaño total del build: 15.34 MB

📂 POR TIPO DE ARCHIVO
.webp      45 archivos    8.23 MB  (53.6%)
.js        12 archivos    5.12 MB  (33.4%)
.css        3 archivos    1.45 MB  (9.5%)

🔝 TOP 10 ARCHIVOS MÁS GRANDES
1.  1250.45 KB  assets/jspdf.es.min-AJc9oQ5d.js
2.   890.23 KB  images/hero-main.webp
```

---

### 🚀 Desarrollo

#### `npm run dev`
**Qué hace**: Inicia servidor de desarrollo
**Puerto**: http://localhost:5173

```bash
npm run dev
```

---

#### `npm run build`
**Qué hace**: Crea build de producción en `/dist`
**Cuándo usarlo**: Para probar build localmente

```bash
npm run build
```

---

#### `npm run preview`
**Qué hace**: Preview del build de producción
**Cuándo usarlo**: Después de `npm run build`
**Puerto**: http://localhost:4173

```bash
npm run build
npm run preview
```

---

### 🎯 Deployment

#### `npm run predeploy`
**Qué hace**: Valida + Build (todo en uno)
**Cuándo usarlo**: Antes de deployment manual

```bash
npm run predeploy
```

Equivale a:
```bash
npm run validate && npm run build
```

---

## 🔥 WORKFLOW RECOMENDADO

### 1️⃣ Antes del Primer Deployment

```bash
# 1. Analizar imágenes
npm run images:analyze

# 2. Limpiar imágenes no usadas
npm run images:clean
# (Escribe SI cuando te pregunte)

# 3. Validar proyecto
npm run validate

# 4. Build y analizar tamaño
npm run build
npm run build:analyze

# 5. Preview local
npm run preview
# Abre http://localhost:4173 y verifica

# 6. Push a GitHub (deployment automático)
git add .
git commit -m "chore: Clean unused images and optimize"
git push origin main
```

---

### 2️⃣ Desarrollo Diario

```bash
# Iniciar desarrollo
npm run dev

# Hacer cambios...

# Antes de commit
npm run validate
npm run build

# Si todo OK
git add .
git commit -m "feat: tu cambio"
git push origin main
```

---

### 3️⃣ Optimización Periódica (Mensual)

```bash
# Verificar imágenes no usadas
npm run images:analyze

# Limpiar si hay imágenes sin usar
npm run images:clean

# Analizar tamaño del build
npm run build
npm run build:analyze

# Si el build es > 15MB, optimizar
```

---

## 💡 TIPS

### ✅ Buenas Prácticas

1. **Ejecuta `npm run images:clean` antes del primer deployment**
   - Elimina imágenes no usadas
   - Reduce tamaño del build
   - Ahorra espacio en Hostinger

2. **Ejecuta `npm run validate` antes de cada push**
   - Previene errores en CI/CD
   - Verifica configuración

3. **Ejecuta `npm run build:analyze` periódicamente**
   - Identifica archivos grandes
   - Oportunidades de optimización

### ⚠️ Advertencias

1. **`npm run images:clean` ELIMINA archivos**
   - Siempre revisa la lista antes de confirmar
   - Hace backup con Git (puedes recuperar)

2. **No ejecutes scripts en producción**
   - Solo en tu máquina local
   - GitHub Actions hace el build automático

---

## 🆘 Solución de Problemas

### Error: "command not found"
```bash
# Asegúrate de estar en la raíz del proyecto
cd c:\Users\porra\OneDrive\Escritorio\WEBS\sueno-dorado-web

# Verifica que node_modules esté instalado
npm install
```

### Error: "Cannot find module"
```bash
# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install
```

### Script no hace nada
```bash
# Verifica que el archivo exista
ls scripts/

# Ejecuta directamente
node scripts/analyze-images.js
```

---

## 📊 RESUMEN DE SCRIPTS

| Script | Uso | Seguro | Tiempo |
|--------|-----|--------|--------|
| `npm run validate` | Antes de push | ✅ | 5s |
| `npm run images:analyze` | Ver imágenes | ✅ | 10s |
| `npm run images:clean` | Limpiar imágenes | ⚠️ Pide confirmación | 30s |
| `npm run build:analyze` | Ver tamaño build | ✅ | 5s |
| `npm run dev` | Desarrollo | ✅ | - |
| `npm run build` | Build producción | ✅ | 10s |
| `npm run preview` | Preview build | ✅ | - |
| `npm run predeploy` | Validar + Build | ✅ | 15s |

---

**¿Dudas?** Lee `docs/README.md` para más información
