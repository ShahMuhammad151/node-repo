const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page');
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We cant seem the page you are looking for</p>
    <a href="/">Back Home </a>`);
});
server.listen(5001);
