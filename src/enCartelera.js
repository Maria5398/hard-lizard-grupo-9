const fs = require ('fs')
const leerJSON = fs.readFileSync('./data/movies.json')
const moviesParseado = JSON.parse(leerJSON)

const pelisTotales = moviesParseado.total_movies

let onMovies = moviesParseado.movies 

let titulo_y_reseña_pelis = onMovies.map(movies => movies.title + ': \n \n ' + movies.overview )

let titulo = ' En cartelera \n \n'  + 'Peliculas en cartelera: ' + pelisTotales + '\n  \n  •' + titulo_y_reseña_pelis.sort().join ( '\n \n •')




module.exports = titulo
