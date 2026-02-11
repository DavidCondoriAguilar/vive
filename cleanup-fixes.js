
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function fixOverFix(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                fixOverFix(filePath);
            }
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;

            // Fix the common over-fixes
            content = content
                .replace(/tracking-widestá/g, 'tracking-widest')
                .replace(/tracking-widestá/g, 'tracking-widest')
                .replace(/whitespace-nowrapá/g, 'whitespace-nowrap') // just in case
                .replace(/duration-está/g, 'duration-300') // just in case
                .replace(/translate-está/g, 'translate-x-0'); // just in case

            if (content !== original) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Re-fixed: ${filePath}`);
            }
        }
    });
}

const srcDir = path.join(__dirname, 'src');
fixOverFix(srcDir);
console.log('Post-fix cleanup finished.');
