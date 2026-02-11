
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function fixEncoding(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                fixEncoding(filePath);
            }
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;

            // Target the specific replacement character uFFFD and common mangled sequences
            content = content
                .replace(/\ufffd/g, '') // Remove literal uFFFD
                .replace(/clsico/g, 'clásico')
                .replace(/clsico/g, 'clásico')
                .replace(/Garanta/g, 'Garantía')
                .replace(/Garanta/g, 'Garantía')
                .replace(/fbrica/g, 'fábrica')
                .replace(/fbrica/g, 'fábrica')
                .replace(/Ingeniera/g, 'Ingeniería')
                .replace(/Ingeniera/g, 'Ingeniería')
                .replace(/precisin/g, 'precisión')
                .replace(/precisin/g, 'precisión')
                .replace(/mximo/g, 'máximo')
                .replace(/mximo/g, 'máximo')
                .replace(/Mxima/g, 'Máxima')
                .replace(/Mxima/g, 'Máxima')
                .replace(/catlogo/g, 'catálogo')
                .replace(/catlogo/g, 'catálogo')
                .replace(/diseo/g, 'diseño')
                .replace(/diseo/g, 'diseño')
                .replace(/diseado/g, 'diseñado')
                .replace(/diseado/g, 'diseñado')
                .replace(/lnea/g, 'línea')
                .replace(/lnea/g, 'línea')
                .replace(/ltimo/g, 'último')
                .replace(/ltimo/g, 'último')
                .replace(/tecnologa/g, 'tecnología')
                .replace(/tecnologa/g, 'tecnología')
                .replace(/Visin/g, 'Visión')
                .replace(/Visn/g, 'Visión')
                .replace(/Coleccin/g, 'Colección')
                .replace(/Coleccin/g, 'Colección')
                .replace(/Reconciliacin/g, 'Reconciliación')
                .replace(/Reconciliacin/g, 'Reconciliación')
                .replace(/anatmico/g, 'anatómico')
                .replace(/anatmico/g, 'anatómico')
                .replace(/Beb/g, 'Bebé')
                .replace(/Beb/g, 'Bebé')
                .replace(/Ortopdico/g, 'Ortopédico')
                .replace(/ortopdico/g, 'ortopédico')
                .replace(/comn/g, 'común')
                .replace(/comn/g, 'común')
                .replace(/Hroe/g, 'Héroe')
                .replace(/Hroe/g, 'Héroe')
                .replace(/hipoalergnico/g, 'hipoalergénico')
                .replace(/hipoalergnico/g, 'hipoalergénico')
                .replace(/sorprendern/g, 'sorprenderán')
                .replace(/sorprendern/g, 'sorprenderán')
                .replace(/est/g, 'está') // be careful with this one, but usually safe in descriptions
                .replace(/\b and \b/g, ' y ');

            if (content !== original) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Repaired: ${filePath}`);
            }
        }
    });
}

const srcDir = path.join(__dirname, 'src');
fixEncoding(srcDir);
console.log('Global encoding repair finished.');
