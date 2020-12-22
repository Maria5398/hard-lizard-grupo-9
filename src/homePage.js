const fs = require('fs')
const verJson = fs.readFileSync('./data/movies.json')
const moviesParseado = JSON.parse(verJson) 

const totalMovies = moviesParseado.total_movies

let onMovies = moviesParseado.movies 

let movieTitles = onMovies.map(movie => movie.title)

let titulo = "Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores películas, incluso mejor que Netflix, Cuevana y PopCorn \n \n" + 'Peliculas totales: ' + totalMovies + 'Lista de peliculas: \n' + movieTitles.sort().join('\n')
titulo += '\n Recorda que podes visitar las secciones: \n En cartelera. \n Mas votadas. \n Sucursales. \n Contacto. \n Preguntas frecuentes. '
module.exports = titulo;



