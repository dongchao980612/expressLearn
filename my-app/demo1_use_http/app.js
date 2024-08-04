var http = require('http');

// 通过 http 模块创建服务
var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');


})

// 监听端口, 启动服务
app.listen(3000, '127.0.0.1');

// 输出提示信息
console.log('Server running at http://127.0.0.1:3000/');
