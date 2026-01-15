# Comandos para subir a GitHub

## 1. Configurar Git (primera vez solo)
```bash
git config --global user.name "DavidCondoriAguiar"
git config --global user.email "tu-email@example.com"
```

## 2. Inicializar repositorio y subir
```bash
# Navegar a tu carpeta del proyecto
cd "C:\Users\porra\OneDrive\Escritorio\WEBS\sueño dorado web"

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Commit descriptivo y profesional
git commit -m "feat: Initial setup of Sueño Dorado Web - React application with Vite, Tailwind CSS and React Router"

# Agregar remoto
git remote add origin https://github.com/DavidCondoriAguiar/sueno-dorado-web.git

# Cambiar a main y subir
git branch -M main
git push -u origin main
```

## Nota sobre el commit message:
- `feat:` indica una nueva característica
- Es descriptivo pero conciso
- Menciona las tecnologías principales usadas
- Profesional y claro para el historial de cambios
