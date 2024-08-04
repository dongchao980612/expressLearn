const express = require('express');

// 创建路由
const router = express.Router();





// get请求
router.get('/:id', (req, res) => {
    // 获取请求参数
    const name_query = req.query.name;
    const age_age = req.query.age;

    // 相应对象
    res.set({
        'set_Type': 'set_json'
    });

    console.log("params=", req.params);
    console.log("query=", req.query);
    console.log("body=", req.body);

    res.status(500).send({
        'name': name_query,
        'age': age_age
    })
    res.end();
});

// post请求
router.post('/:id', (req, res) => {
    console.log("params=", req.params);
    console.log("query=", req.query);
    console.log("body=", req.body);
    res.send('Got a POST with id request');
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