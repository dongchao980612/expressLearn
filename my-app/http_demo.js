var http = require('http');

// 通过 http 模块创建服务
http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');


}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
