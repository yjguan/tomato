var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('hello, tang yuan ...');
}).listen(2016, '127.0.0.1');

console.log("server is runing at http://127.0.0.1:2016/");