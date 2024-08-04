const express = require('express');

// 创建路由
const router = express.Router();


// get请求
router.get('/', (req, res) => {
    // res.send('Got a GET request');
    // res.status(200).json({
    //     name: 'zhangsan',
    //     age: 20
    // });


    // 获取请求参数
    const name_query = req.query.name;
    const age_age = req.query.age;

    // 打印请求参数
    // console.log("name = ", name_query, "，age = ", age_age)

    // 相应对象
    res.set({
        'set_Type': 'set_json'
    });

    res.status(200).json({
        name: name_query,
        age: age_age
    });

    res.end();
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