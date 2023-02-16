// The http.createServer() method includes request and response
// parameters which is supplied by Node.js
// The request object can be used to get information about the current HTTP request.
// e.g   url,request header,and data.
// The response object can be used to send a response  from a current HTTP request

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname} / userApi / userapi.json`, 'utf-8')
    const objData = JSON.parse(data);

    // console.log(req.url);
    // Routing 
    if (req.url === '/') {
        res.writeHead(200);
        res.end("Jarviz is on a server on Home page");
    } else if (req.url === '/about') {
        res.end("Jarviz is on a server on About page");
    } else if (req.url === '/contact') {
        res.end("Jarviz is on a server on Contact page");
    }
    else if (req.url === '/userapi') {
        res.writeHead(200, { "content-type": "application/json" });
        //res.end(objData[0].name)
        res.end("Jarviz is on a server on User API page");
    }
    else {
        // res.writeHead(404);   // error 
        // res.end("404 error page");

        // content-type shows that page content is not document its type is html.
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1> 404 error page </h1>");
    }
});
server.listen("9000", "127.0.0.1", () => {
    console.log("Running port is 9000");
});