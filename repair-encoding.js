
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'src', 'data', 'catalog');

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

const patterns = [
    { bad: /clsico/g, good: 'clásico' },
    { bad: /Garanta/g, good: 'Garantía' },
    { bad: /fbrica/g, good: 'fábrica' },
    { bad: /Ingeniera/g, good: 'Ingeniería' },
    { bad: /precisin/g, good: 'precisión' },
    { bad: /mximo/g, good: 'máximo' },
    { bad: /Mxima/g, good: 'Máxima' },
    { bad: /catlogo/g, good: 'catálogo' },
    { bad: /diseo/g, good: 'diseño' },
    { bad: /diseado/g, good: 'diseñado' },
    { bad: /lnea/g, good: 'línea' },
    { bad: /ltimo/g, good: 'último' },
    { bad: /tecnologa/g, good: 'tecnología' },
    { bad: /Visin/g, good: 'Visión' },
    { bad: /Coleccin/g, good: 'Colección' },
    { bad: /Reconciliacin/g, good: 'Reconciliación' },
    { bad: /anatmico/g, good: 'anatómico' },
    { bad: /Beb/g, good: 'Bebé' },
    { bad: /Ortopdico/g, good: 'Ortopédico' },
    { bad: /ortopdico/g, good: 'ortopédico' },
    { bad: /comn/g, good: 'común' },
    { bad: /\b and \b/g, good: ' y ' }
];

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    patterns.forEach(p => {
        if (p.bad.test(content)) {
            content = content.replace(p.bad, p.good);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Repaired: ${file}`);
    }
});
