## Enunciado

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/
Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.
--> previousSearch -> useRef in useMovies Hook

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

## Water css style

1. https://watercss.kognise.dev/
2. section-><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"> just copy and paste on the browser -> https://cdn.jsdelivr.net/npm/water.css@2/out/water.css
3. copy the content of the site, and paste it in index.css

# Debounce

https://github.com/angus-c/just#just-debounce-it

1. $ npm install just-debounce-it -E
