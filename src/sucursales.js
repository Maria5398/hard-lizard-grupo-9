const fs = require('fs');

let theatersParser = JSON.parse(fs.readFileSync('./data/theaters.json', 'utf-8'));

let totalSalas = theatersParser.total_theaters; // accedimos al total de las salas

let enSalas = theatersParser.theaters;

let salasListaNombre = enSalas.map(sala => sala.name);

let salasListaDireccion = enSalas.map(sala => sala.address);
let salasListaDescripcion = enSalas.map(sala => sala.description);

let sucursales = "Nuestras Salas \n\n" + "Total de Salas: " + totalSalas + "\n\n"
sucursales += "Listado de salas: " + salasListaNombre + "\n\n" + "Direccion: " + salasListaDireccion + "\n\n"
sucursales += "Descripcion de la sala: " + salasListaDescripcion.join('\n')

module.exports = sucursales;