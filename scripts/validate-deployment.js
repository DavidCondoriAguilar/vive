#!/usr/bin/env node

/**
 * Pre-Deployment Validation Script
 * Verifica que el proyecto esté listo para deployment profesional
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors para terminal
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
};

const log = {
    success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
    error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
    warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
    info: (msg) => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
    title: (msg) => console.log(`\n${colors.bold}${colors.blue}${msg}${colors.reset}\n`)
};

let errorCount = 0;
let warningCount = 0;

// ═══════════════════════════════════════════════════════════════
// VALIDACIONES
// ═══════════════════════════════════════════════════════════════

function checkFileExists(filePath, required = true) {
    const fullPath = path.join(__dirname, '..', filePath);
    if (fs.existsSync(fullPath)) {
        log.success(`${filePath} existe`);
        return true;
    } else {
        if (required) {
            log.error(`${filePath} no encontrado (REQUERIDO)`);
            errorCount++;
        } else {
            log.warning(`${filePath} no encontrado (OPCIONAL)`);
            warningCount++;
        }
        return false;
    }
}

function checkGitignore() {
    log.title('📄 Verificando .gitignore');

    const gitignorePath = path.join(__dirname, '..', '.gitignore');
    if (!fs.existsSync(gitignorePath)) {
        log.error('.gitignore no existe');
        errorCount++;
        return;
    }

    const content = fs.readFileSync(gitignorePath, 'utf8');

    const requiredPatterns = [
        { pattern: 'node_modules', name: 'node_modules' },
        { pattern: 'dist', name: 'dist' },
        { pattern: '.env', name: '.env files' },
        { pattern: '.env.local', name: '.env.local' },
        { pattern: '.env.production', name: '.env.production' }
    ];

    requiredPatterns.forEach(({ pattern, name }) => {
        if (content.includes(pattern)) {
            log.success(`${name} está en .gitignore`);
        } else {
            log.error(`${name} NO está en .gitignore (CRÍTICO)`);
            errorCount++;
        }
    });
}

function checkViteConfig() {
    log.title('⚙️ Verificando vite.config.js');

    const viteConfigPath = path.join(__dirname, '..', 'vite.config.js');
    if (!fs.existsSync(viteConfigPath)) {
        log.error('vite.config.js no existe');
        errorCount++;
        return;
    }

    const content = fs.readFileSync(viteConfigPath, 'utf8');

    // Verificar base
    if (content.includes("base:")) {
        log.success('Propiedad "base" configurada');
    } else {
        log.warning('Propiedad "base" no encontrada (puede causar problemas de rutas)');
        warningCount++;
    }

    // Verificar terser
    if (content.includes('drop_console')) {
        log.success('Limpieza de console.log en producción activada');
    } else {
        log.warning('drop_console no configurado');
        warningCount++;
    }

    // Verificar minify
    if (content.includes("minify: 'terser'")) {
        log.success('Minificación con terser habilitada');
    } else {
        log.warning('Minificación terser no habilitada');
        warningCount++;
    }
}

function checkPublicHtaccess() {
    log.title('🌐 Verificando .htaccess');

    const htaccessPath = path.join(__dirname, '..', 'public', '.htaccess');
    if (!fs.existsSync(htaccessPath)) {
        log.error('.htaccess no existe en /public (CRÍTICO para SPA)');
        errorCount++;
        return;
    }

    const content = fs.readFileSync(htaccessPath, 'utf8');

    if (content.includes('RewriteEngine On')) {
        log.success('Redirección SPA configurada');
    } else {
        log.error('RewriteEngine no configurado');
        errorCount++;
    }

    if (content.includes('X-Frame-Options')) {
        log.success('Headers de seguridad presentes');
    } else {
        log.warning('Headers de seguridad no encontrados');
        warningCount++;
    }
}

function checkEnvExample() {
    log.title('🔐 Verificando variables de entorno');

    checkFileExists('.env.example', false);

    // Verificar que .env.production NO esté en Git
    const gitignorePath = path.join(__dirname, '..', '.gitignore');
    const gitignore = fs.readFileSync(gitignorePath, 'utf8');

    if (gitignore.includes('.env.production')) {
        log.success('.env.production está ignorado por Git');
    } else {
        log.error('.env.production NO está en .gitignore (RIESGO DE SEGURIDAD)');
        errorCount++;
    }
}

function checkPackageJson() {
    log.title('📦 Verificando package.json');

    const packagePath = path.join(__dirname, '..', 'package.json');
    if (!fs.existsSync(packagePath)) {
        log.error('package.json no existe');
        errorCount++;
        return;
    }

    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    // Verificar scripts
    const requiredScripts = ['dev', 'build', 'preview'];
    requiredScripts.forEach(script => {
        if (pkg.scripts && pkg.scripts[script]) {
            log.success(`Script "${script}" definido`);
        } else {
            log.error(`Script "${script}" no encontrado`);
            errorCount++;
        }
    });

    // Verificar dependencias importantes
    const requiredDeps = ['react', 'react-dom', 'react-router-dom'];
    requiredDeps.forEach(dep => {
        if (pkg.dependencies && pkg.dependencies[dep]) {
            log.success(`Dependencia "${dep}" instalada`);
        } else {
            log.warning(`Dependencia "${dep}" no encontrada`);
            warningCount++;
        }
    });
}

function checkGitHubActions() {
    log.title('🚀 Verificando GitHub Actions');

    checkFileExists('.github/workflows/deploy.yml', true);
}

function checkStructure() {
    log.title('📁 Verificando estructura del proyecto');

    const requiredDirs = ['src', 'public'];
    requiredDirs.forEach(dir => {
        const dirPath = path.join(__dirname, '..', dir);
        if (fs.existsSync(dirPath)) {
            log.success(`Directorio /${dir} existe`);
        } else {
            log.error(`Directorio /${dir} no existe`);
            errorCount++;
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

console.log(`
${colors.bold}${colors.blue}╔══════════════════════════════════════════════════════════╗
║         🔍 VALIDACIÓN PRE-DEPLOYMENT                    ║
║         Sueño Dorado Web - Hostinger Deploy             ║
╚══════════════════════════════════════════════════════════╝${colors.reset}
`);

// Ejecutar todas las validaciones
checkStructure();
checkGitignore();
checkViteConfig();
checkPublicHtaccess();
checkEnvExample();
checkPackageJson();
checkGitHubActions();

// ═══════════════════════════════════════════════════════════════
// RESUMEN FINAL
// ═══════════════════════════════════════════════════════════════

console.log(`
${colors.bold}${colors.blue}╔══════════════════════════════════════════════════════════╗
║                    📊 RESUMEN FINAL                     ║
╚══════════════════════════════════════════════════════════╝${colors.reset}
`);

if (errorCount === 0 && warningCount === 0) {
    log.success(`${colors.bold}¡TODO PERFECTO! El proyecto está listo para deployment 🚀${colors.reset}`);
    process.exit(0);
} else {
    if (errorCount > 0) {
        log.error(`${colors.bold}${errorCount} error(es) crítico(s) encontrado(s)${colors.reset}`);
    }
    if (warningCount > 0) {
        log.warning(`${colors.bold}${warningCount} advertencia(s) encontrada(s)${colors.reset}`);
    }

    console.log(`
${colors.yellow}⚠ Revisa los errores arriba antes de hacer deployment.${colors.reset}
${colors.cyan}ℹ Lee DEPLOYMENT.md para más información.${colors.reset}
  `);

    if (errorCount > 0) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}
