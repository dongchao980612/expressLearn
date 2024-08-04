//导入express模块
const express = require('express');

// 创建express实例
const app = express();

// 定义中间件
const app_middleware = function (req, res, next) {
    console.log("定义中间件方法一：执行所以请求的前置函数");
    next();
}

// 错误处理中间件
const middleware_root_error = (error, res, req, next) => {
    console.log('这是一个全局错误处理中间件 middleware root error', error.message);
    res.send("ERROR: ", error.message);
}



// 注册中间件
app.use(app_middleware);


app.use((req, res, next) => {
    console.log("定义中间件方法二：执行所以请求的前置函数 one");
    next();
});
app.use((req, res, next) => {
    console.log("定义中间件方法二：执行所以请求的前置函数 two");
    next();
});

// 导入路由模块
const rootsRouter = require('./routes/roots');

// 注册路由
app.use('/root', rootsRouter);

// 注册全局错误处理中间件
app.use(middleware_root_error);

// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

