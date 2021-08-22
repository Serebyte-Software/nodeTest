//get http module 
const http = require("http");

//create server
const server = http.createServer((req, res)=>{
	//send back data 
	res.writeHead(200, {
		"Content-Type" : "text/html",
	});
	
	//end 
	res.end("<button>Hello World!</button>");
});

server.listen(5000);