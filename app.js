const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`
        <h1>Welcome to Node.js Docker Project!</h1>
        <p>My first Node.js application running inside Docker.</p>
        <p>Project 3 - AWS DevOps Practice</p>
    `);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
