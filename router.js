const { homePage, enCartelera, masVotadas, sucursales, contacto, faqs } = require('./src/index')

module.exports = {
	routes: (req, res) => {
		switch (req.url) {
			case '/':
				res.end(homePage);
				break;
			case '/en-cartelera':
				res.end(enCartelera);
				break;
			case '/mas-votadas':
				res.end(masVotadas);
				break;
			case '/sucursales':
				res.end(sucursales);
				break;
			case '/contacto':
				res.end(contacto);
				break;
			case '/preguntas-frecuentes':
				res.end(faqs);
				break;
			default:
                res.end("404 Not Found");
        }
    }
};