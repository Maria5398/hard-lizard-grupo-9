// starting the server

const http = require('http');
const router = require('./router');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    router.routes(req, res);
}).listen(3000, 'localhost', () => console.log("Server on port 3000"))