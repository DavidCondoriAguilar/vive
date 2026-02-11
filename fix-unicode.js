
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'src', 'data', 'catalog');

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

function replaceMangled(text) {
    return text
        .replace(/cl\ufffdsico/g, 'clásico')
        .replace(/Garant\ufffda/g, 'Garantía')
        .replace(/f\ufffdbrica/g, 'fábrica')
        .replace(/Ingenier\ufffda/g, 'Ingeniería')
        .replace(/precis\ufffdn/g, 'precisión')
        .replace(/m\ufffdximo/g, 'máximo')
        .replace(/M\ufffdxima/g, 'Máxima')
        .replace(/cat\ufffdlogo/g, 'catálogo')
        .replace(/dise\ufffdo/g, 'diseño')
        .replace(/dise\ufffdado/g, 'diseñado')
        .replace(/l\ufffdnea/g, 'línea')
        .replace(/\ufffdtimo/g, 'último')
        .replace(/tecnolog\ufffda/g, 'tecnología')
        .replace(/Vis\ufffdn/g, 'Visión')
        .replace(/Colecci\ufffdn/g, 'Colección')
        .replace(/Reconciliaci\ufffdn/g, 'Reconciliación')
        .replace(/anatmico/g, 'anatómico')
        .replace(/anat\ufffdmico/g, 'anatómico')
        .replace(/Beb\ufffd/g, 'Bebé')
        .replace(/Ortop\ufffddico/g, 'Ortopédico')
        .replace(/ortop\ufffddico/g, 'ortopédico')
        .replace(/com\ufffdn/g, 'común')
        .replace(/H\ufffdroe/g, 'Héroe')
        .replace(/hipoalerg\ufffdnico/g, 'hipoalergénico')
        .replace(/sorprender\ufffdn/g, 'sorprenderán')
        .replace(/\ufffd/g, ''); // Final cleanup
}

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = replaceMangled(content);

    if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`✅ Fixed uFFFD in: ${file}`);
    }
});
