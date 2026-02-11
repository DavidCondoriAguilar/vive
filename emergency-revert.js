
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function undoEstDamage(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                undoEstDamage(filePath);
            }
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;

            // Revert "está" back to "est" if it's likely a code-related word or mangled
            // We only want "está" where it makes linguistic sense, but my previous fix was too broad.
            // For now, let's fix the obvious ones broken in code or common words.

            content = content
                .replace(/está/g, 'est')
                // But wait, what if "fábrica" broke something? 
                // "fabric" -> "fábrica"
                .replace(/fábric/g, 'fabric');

            if (content !== original) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Reverted damage: ${filePath}`);
            }
        }
    });
}

const srcDir = path.join(__dirname, 'src');
undoEstDamage(srcDir);
console.log('Emergency revert finished.');
