# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Pasos para comenzar

Crear app, usando vite con vanilla js, sin inicializarlo con react.

- cd al directorio donde se creara la carpeta

1. npm create vite@latest

- project name
- select framework: Vanilla
- select a variant: JavaScript

1. cd "project name"
2. npm install @vitejs/plugin-react -E // instala el plugin de react para vite, y tenemos que configurarlo
3. code .
   // (en el package.json vemos que no tiene react, entonces instalar dependencias de react.
   // 'react' tiene los paquetes de los hooks, y 'react-dom' tiene los bindings con el navegador)

4. npm install react react-dom -E
5. En la carpeta principal -> new File -> vite.config.js
   -> configuramos el defineConfig de vite, usando el plugin de react

## Explicacion de como se conecta con react: (main.js)

- index.html -> tiene el script que carga al ppio de la pag. web
  -> ese script es el main.js (ver el index.html)
- main.js -> es el punto de entrada a la aplicacion
  => Como iniciar una aplicacion con react?
  -> main.js es el primer archivo que se va a cargar de la aplicacion.
  -> de react=dom/client: debo importar createRoot
  -> con un document.getElementById -> voy a renderizar la aplicacion
  ....--> en el index.html hay un div con id="app", es alli donde voy a renderizar mi app de react
  -> creo el componente root, y en el root renderizo la app.

  A. rename file main.js, to main.jsx (vite solo parsea a jsx, los archivos jsx. No lee el js)
  B. index.html -> modificar el script, para que lea el archivo main.jsx

## Instalar el linter

npm install standard -D
En package.json:
"eslintConfig": {
"extends":"./node_modules/standard/eslintrc.json"
}
