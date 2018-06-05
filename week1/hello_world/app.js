const http = require('http');


const server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("hello World\n");
});

server.listen(8000);

console.log('Server is running on 8000');


