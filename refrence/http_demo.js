const http = require('http');

// Create server object 
http.createServer((req, res) => {
    res.write('Hello Node');
    res.end()
}).listen(9000, () => console.log('Server running'))