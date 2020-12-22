const fs = require('fs');

let moviesJsonParser = JSON.parse(fs.readFileSync('./data/movies.json'));
let onMovies = moviesJsonParser.movies;

let moviesTopTen = onMovies.filter(movie => movie.vote_average >= 7);
let votadasAverage = moviesTopTen.map(movie => movie.vote_average);

let votadasReduce = votadasAverage.reduce((totalMovies, vote) => totalMovies + vote);

let promedio = votadasReduce / moviesTopTen.length;

// listado de peliculas
let moviesList = moviesTopTen.map(movie => `${movie.title} - Rating: ${movie.vote_average}\n\nReseña: ${movie.overview}`)

let masVotadas = `***** Mas Votadas *****\n\n--- Total de Peliculas: ${moviesTopTen.length}\n\n`
masVotadas += `--- Rating Promedio: ${promedio}\n\n`
masVotadas += `--- Listado de Peliculas:\n\n ${moviesList}`

module.exports = masVotadas;