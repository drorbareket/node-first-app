const { on } = require('events');
const http = require('http');

const server = new http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('hello world');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify('[1,2,3]'));
        res.end();
    }

});

server.on('connection', (socket) => {
    console.log('connection established...');
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });

const portId = 3000;
server.listen(portId);
console.log(`server is up and listening on port ${portId}`);