
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'src', 'data', 'catalog');

const replacements = [
    { search: /clsico/g, replace: 'clásico' },
    { search: /Garanta/g, replace: 'Garantía' },
    { search: /Ingeniera/g, replace: 'Ingeniería' },
    { search: /precisin/g, replace: 'precisión' },
    { search: /mximo/g, replace: 'máximo' },
    { search: /Mxima/g, replace: 'Máxima' },
    { search: /catlogo/g, replace: 'catálogo' },
    { search: /diseado/g, replace: 'diseñado' },
    { search: /diseo/g, replace: 'diseño' },
    { search: /lnea/g, replace: 'línea' },
    { search: /ltimo/g, replace: 'último' },
    { search: /tecnologa/g, replace: 'tecnología' },
    { search: /Visin/g, replace: 'Visión' },
    { search: /Coleccin/g, replace: 'Colección' },
    { search: /Reconciliacin/g, replace: 'Reconciliación' },
    { search: /anatmico/g, replace: 'anatómico' },
    { search: /Beb/g, replace: 'Bebé' },
    { search: /fbrica/g, replace: 'fábrica' },
    { search: /est/g, replace: 'está' },
    { search: //g, replace: '' } // Remove any remaining stray markers
];

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    replacements.forEach(r => {
        content = content.replace(r.search, r.replace);
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
    }
}

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
files.forEach(f => fixFile(path.join(dataDir, f)));

console.log('Data encoding fix completed.');
