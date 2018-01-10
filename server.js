var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello Node");
}
var www = http.createServer(handleRequest);
www.listen((process.env.PORT || 8080));
