<!-- @format -->

# aprendiendo-react

Pasos para iniciar:

1. npm init -y (genera el package.json)
2. mkdir projects (crea carpeta projects)
3. cd projects (dirigirse a la carpeta projects)
4. npm create vite@latest
5. asignamos nombre al projecto
6. elegimos React como framework y luego el lenguaje (Javascript + SWC)
7. cd 00-hola-mundo
8. npm install
9. npm run dev

Instalar Linter:

1- En raiz del repo (aprendiendo-react) -> npm install standard -D
2- En package.json, agregar 'eslintConfig:{'extends': './node_modules/standard/eslintrc.json'}

## Mono repo: no repetir npm dependencies en cada project, las instala una vez y reutiliza

1. en el package.json de la carpeta ppal escribir:
   "workspaces":[
   "projects/*"
   ],
2. cd a carpeta ppal, en este caso 'aprendiendo-react'
3. npm install
