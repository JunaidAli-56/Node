const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    
    // 3rd Way Stream Pipe. all streaming in one line
    // readAbleData.pipe(destination[,options]) syntax
    const rstream = fs.createReadStream("jarviz.txt");
    rstream.pipe(res);

});

server.listen(9000, "127.0.0.1");