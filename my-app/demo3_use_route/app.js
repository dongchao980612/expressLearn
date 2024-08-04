//导入express模块
const express = require('express');

// 创建express实例
const app = express();

// get请求
app.get('/', (req, res) => {
    // res.send('Got a GET request');
    res.send({
        name: 'zhangsan',
        age: 25
    });
});

// post请求
app.post('/', (req, res) => {
    res.send('Got a POST request');
});

// put请求
app.put('/', (req, res) => {
    res.send('Got a PUT request');

});

// delete请求
app.delete('/', (req, res) => {
    res.send('Got a DELETE request');
});

// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

