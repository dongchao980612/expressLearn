//导入express模块
const express = require('express');

// 创建express实例
const app = express();

// get请求
app.get('/', (req, res) => {
    res.send('Hello World!');

});

// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

