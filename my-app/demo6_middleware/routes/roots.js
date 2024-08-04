const express = require('express');

// 创建路由
const router = express.Router();


const middleware_root_get = (req, res, next) => {
    console.log('这是一个局部中间件 middleware root get');
    next();
}


const middleware_root_post = (req, res, next) => {
    console.log('这是一个局部中间件 middleware root post');
    next();
}




// get请求
router.get('/', (req, res) => {
    // 获取请求参数
    const name_query = req.query.name;
    const age_age = req.query.age;

    // 打印请求参数
    // console.log("name = ", name_query, "，age = ", age_age)

    // 相应对象
    res.set({
        'set_Type': 'set_json'
    });

    res.status(500).send('服务器内部错误');

    throw new Error('GET请求发生错误');
    // res.end();
});

// post请求
router.post('/', middleware_root_post, (req, res) => {
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