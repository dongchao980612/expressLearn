const express = require('express');

// 创建路由
const router = express.Router();

// get请求
router.get('/', (req, res) => {
    // res.send('Got a GET request');
    res.send({
        name: 'zhangsan',
        age: 25
    });
});

// post请求
router.post('/', (req, res) => {
    res.send('Got a POST request');
});

// put请求
router.put('/', (req, res) => {
    res.send('Got a PUT request');

});

// delete请求
router.delete('/', (req, res) => {
    res.send('Got a DELETE request');
});

// 导出路由
module.exports = router;