#!/usr/bin/env node

/**
 * 📊 ANÁLISIS DE TAMAÑO DE BUILD
 * Muestra qué archivos ocupan más espacio en tu build
 * para identificar oportunidades de optimización
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
};

console.log(`
${colors.bold}${colors.blue}╔══════════════════════════════════════════════════════════╗
║         📊 ANÁLISIS DE TAMAÑO DE BUILD                  ║
╚══════════════════════════════════════════════════════════╝${colors.reset}
`);

if (!fs.existsSync(distDir)) {
    console.log(`${colors.red}❌ Error: La carpeta /dist no existe${colors.reset}`);
    console.log(`${colors.cyan}💡 Ejecuta primero: npm run build${colors.reset}\n`);
    process.exit(1);
}

function getFilesRecursive(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getFilesRecursive(filePath, fileList);
        } else {
            fileList.push({
                path: filePath,
                relativePath: path.relative(distDir, filePath),
                size: stat.size,
                ext: path.extname(file)
            });
        }
    });

    return fileList;
}

const files = getFilesRecursive(distDir);

// Agrupar por tipo
const byType = {};
files.forEach(file => {
    const ext = file.ext || 'other';
    if (!byType[ext]) {
        byType[ext] = { count: 0, size: 0, files: [] };
    }
    byType[ext].count++;
    byType[ext].size += file.size;
    byType[ext].files.push(file);
});

// Ordenar archivos por tamaño
const sortedFiles = files.sort((a, b) => b.size - a.size);

// Calcular tamaño total
const totalSize = files.reduce((sum, f) => sum + f.size, 0);
const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);

console.log(`${colors.bold}📦 Tamaño total del build: ${totalSizeMB} MB${colors.reset}\n`);

// Mostrar por tipo de archivo
console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}📂 POR TIPO DE ARCHIVO${colors.reset}`);
console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}\n`);

const sortedTypes = Object.entries(byType).sort((a, b) => b[1].size - a[1].size);

sortedTypes.forEach(([ext, data]) => {
    const sizeMB = (data.size / 1024 / 1024).toFixed(2);
    const percentage = ((data.size / totalSize) * 100).toFixed(1);
    const color = data.size > 1024 * 1024 ? colors.red : data.size > 512 * 1024 ? colors.yellow : colors.green;

    console.log(`${color}${ext.padEnd(10)}${colors.reset} ${data.count.toString().padEnd(5)} archivos  ${sizeMB.padStart(8)} MB  (${percentage}%)`);
});

// Top 10 archivos más grandes
console.log(`\n${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}🔝 TOP 10 ARCHIVOS MÁS GRANDES${colors.reset}`);
console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}\n`);

sortedFiles.slice(0, 10).forEach((file, index) => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const color = file.size > 500 * 1024 ? colors.red : file.size > 200 * 1024 ? colors.yellow : colors.green;

    console.log(`${(index + 1).toString().padStart(2)}. ${color}${sizeKB.padStart(8)} KB${colors.reset}  ${file.relativePath}`);
});

// Recomendaciones
console.log(`\n${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}💡 RECOMENDACIONES${colors.reset}`);
console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}\n`);

const largeImages = files.filter(f =>
    ['.png', '.jpg', '.jpeg', '.webp'].includes(f.ext) && f.size > 200 * 1024
);

if (largeImages.length > 0) {
    console.log(`${colors.yellow}⚠️  Hay ${largeImages.length} imágenes mayores a 200KB${colors.reset}`);
    console.log(`   Considera optimizarlas con: npm run images:optimize\n`);
}

const largeJS = files.filter(f => f.ext === '.js' && f.size > 500 * 1024);
if (largeJS.length > 0) {
    console.log(`${colors.yellow}⚠️  Hay ${largeJS.length} archivos JS mayores a 500KB${colors.reset}`);
    console.log(`   Considera implementar code splitting\n`);
}

if (totalSize > 10 * 1024 * 1024) {
    console.log(`${colors.red}⚠️  El build total es mayor a 10MB${colors.reset}`);
    console.log(`   Esto puede afectar el tiempo de carga\n`);
} else {
    console.log(`${colors.green}✅ El tamaño del build está bien optimizado${colors.reset}\n`);
}

console.log(`${colors.cyan}💡 Para más detalles, usa: npm run build -- --report${colors.reset}\n`);
