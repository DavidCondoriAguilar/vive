
import os

files = [
    r'c:\Users\porra\OneDrive\Escritorio\WEBS\vive\src\data\catalog\resorte.data.js',
    r'c:\Users\porra\OneDrive\Escritorio\WEBS\vive\src\data\catalog\espuma.data.js',
    r'c:\Users\porra\OneDrive\Escritorio\WEBS\vive\src\data\catalog\dormitorio.data.js'
]

replacements = {
    '': '', # Usually mangled char
    'diseado': 'diseñado',
    'diseo': 'diseño',
    'Ingeniera': 'Ingeniería',
    'Mxima': 'Máxima',
    'catlogo': 'catálogo',
    'precisin': 'precisión',
    'comn': 'común',
    'lnea': 'línea',
    'mximo': 'máximo',
    'fbrica': 'fábrica',
    'Garanta': 'Garantía',
    'Garantia': 'Garantía',
    'Coleccin': 'Colección',
    'Coleccion': 'Colección',
    'Visin': 'Visión',
    'Vision': 'Visión',
    'confortable': 'confortable',
    'acolchada': 'acolchada',
    'Prensado': 'Prensado',
    'ortopdico': 'ortopédico',
    'ortopedico': 'ortopédico',
    'estabilidad': 'estabilidad',
    'estril': 'estéril',
    'ergonmico': 'ergonómico',
    'ergonomico': 'ergonómico',
    'estético': 'estético',
    'estetico': 'estético',
    'atencin': 'atención',
    'atencion': 'atención'
}

# Advanced replacement for common mangled Spanish sequences
# Often '' is followed by the character or replaces the vowel.
# If I see '', I'll try to guess based on context or just remove it if it's junk.
# But looking at the user snippet, 'línea' turned into 'lnea'. So 'í' was completely lost or replaced by something invisible.

for file_path in files:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r', encoding='latin-1', errors='ignore') as f:
        content = f.read()
    
    # Common mangled patterns in latin-1 interpreted as utf8 or vice versa
    # Actually, let's just do a clean sweep of the known words.
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    # Also fix explicit mangled markers like 
    content = content.replace('\ufffd', '')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Encoding fix completed.")
