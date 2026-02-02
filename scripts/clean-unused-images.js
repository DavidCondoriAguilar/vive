#!/usr/bin/env node

/**
 * 🗑️ LIMPIEZA AUTOMÁTICA DE IMÁGENES NO USADAS
 * Busca imágenes en /public y /src/assets que NO se usan en el código
 * y las elimina automáticamente (con confirmación)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

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
║      🗑️  LIMPIEZA DE IMÁGENES NO USADAS                ║
╚══════════════════════════════════════════════════════════╝${colors.reset}
`);

// Lista de imágenes que SIEMPRE se deben mantener (críticas)
const ALWAYS_KEEP = [
    'favicon.ico',
    'favicon.png',
    'icon-192x192.png',
    'icon-512x512.png',
    'logo-icon.png',
    'logo-main.jpg',
    'manifest.json',
    'robots.txt',
    'sitemap.xml',
    '.htaccess'
];

// Función para buscar referencias en el código
function isImageUsed(imageName) {
    try {
        // Buscar en todo el proyecto (src, index.html, public)
        const result = execSync(
            `git grep -l "${imageName}" -- src/ index.html public/ 2>nul || echo "NOT_FOUND"`,
            { cwd: rootDir, encoding: 'utf8' }
        );

        return !result.includes('NOT_FOUND') && result.trim().length > 0;
    } catch (error) {
        return false;
    }
}

// Función para obtener todas las imágenes
function getAllImages(dir, baseDir = dir) {
    let images = [];

    if (!fs.existsSync(dir)) return images;

    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            images = images.concat(getAllImages(fullPath, baseDir));
        } else if (/\.(png|jpg|jpeg|webp|svg|ico)$/i.test(item)) {
            const relativePath = path.relative(baseDir, fullPath);
            images.push({
                name: item,
                path: fullPath,
                relativePath: relativePath,
                size: stat.size
            });
        }
    }

    return images;
}

// Analizar imágenes en /public
console.log(`${colors.cyan}📂 Analizando /public/images...${colors.reset}\n`);
const publicImages = getAllImages(path.join(rootDir, 'public', 'images'));

// Analizar imágenes en /src/assets
console.log(`${colors.cyan}📂 Analizando /src/assets/images...${colors.reset}\n`);
const srcImages = getAllImages(path.join(rootDir, 'src', 'assets', 'images'));

const allImages = [...publicImages, ...srcImages];
const unusedImages = [];
const usedImages = [];

console.log(`${colors.bold}Analizando ${allImages.length} imágenes...${colors.reset}\n`);

for (const img of allImages) {
    // Verificar si está en la lista de "siempre mantener"
    if (ALWAYS_KEEP.includes(img.name)) {
        usedImages.push({ ...img, reason: 'Archivo crítico del sistema' });
        continue;
    }

    // Buscar referencias en el código
    const used = isImageUsed(img.name);

    if (used) {
        usedImages.push({ ...img, reason: 'Usado en el código' });
    } else {
        unusedImages.push(img);
    }
}

// Mostrar resultados
console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bold}${colors.green}✅ IMÁGENES USADAS: ${usedImages.length}${colors.reset}`);
console.log(`${colors.bold}${colors.red}❌ IMÁGENES NO USADAS: ${unusedImages.length}${colors.reset}`);
console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}\n`);

if (unusedImages.length === 0) {
    console.log(`${colors.green}${colors.bold}🎉 ¡Perfecto! No hay imágenes sin usar.${colors.reset}\n`);
    process.exit(0);
}

// Calcular espacio a liberar
const totalSize = unusedImages.reduce((sum, img) => sum + img.size, 0);
const sizeMB = (totalSize / 1024 / 1024).toFixed(2);

console.log(`${colors.yellow}⚠️  IMÁGENES NO USADAS (${unusedImages.length}):${colors.reset}\n`);

unusedImages.forEach((img, index) => {
    const sizeKB = (img.size / 1024).toFixed(2);
    console.log(`${index + 1}. ${img.relativePath} (${sizeKB} KB)`);
});

console.log(`\n${colors.bold}Espacio total a liberar: ${sizeMB} MB${colors.reset}\n`);

// Preguntar si eliminar
console.log(`${colors.yellow}¿Deseas eliminar estas ${unusedImages.length} imágenes?${colors.reset}`);
console.log(`${colors.cyan}Escribe 'SI' para confirmar o cualquier otra cosa para cancelar:${colors.reset} `);

// En Node.js, necesitamos readline para input
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    if (answer.trim().toUpperCase() === 'SI') {
        console.log(`\n${colors.red}🗑️  Eliminando imágenes...${colors.reset}\n`);

        let deleted = 0;
        for (const img of unusedImages) {
            try {
                fs.unlinkSync(img.path);
                console.log(`${colors.green}✓${colors.reset} Eliminado: ${img.relativePath}`);
                deleted++;
            } catch (error) {
                console.log(`${colors.red}✗${colors.reset} Error al eliminar: ${img.relativePath}`);
            }
        }

        console.log(`\n${colors.bold}${colors.green}✅ ${deleted} imágenes eliminadas${colors.reset}`);
        console.log(`${colors.bold}${colors.green}💾 ${sizeMB} MB liberados${colors.reset}\n`);

        console.log(`${colors.cyan}💡 Recuerda hacer commit de los cambios:${colors.reset}`);
        console.log(`   git add .`);
        console.log(`   git commit -m "chore: Remove unused images (${sizeMB}MB freed)"\n`);
    } else {
        console.log(`\n${colors.yellow}❌ Operación cancelada. No se eliminó ninguna imagen.${colors.reset}\n`);
    }

    rl.close();
});
