//导入express模块
const express = require('express');

// 创建express实例
const app = express();

// 导入路由模块
const rootsRouter = require('./routes/roots');

// 注册路由
app.use('/root', rootsRouter);

// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

