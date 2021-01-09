
var dt = require('./abcmod.js');
var http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(`date and time ${dt.myDateTime()}`);
	res.end("hello world");
}).listen(8080);
