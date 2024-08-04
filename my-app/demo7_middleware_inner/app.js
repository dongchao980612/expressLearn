//导入express模块
const express = require('express');

// 创建express实例
const app = express();

// 导入路由模块
const rootsRouter = require('./routes/roots');

// 中间件
//路由加载之前
app.use(express.static('resource'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 注册路由
app.use('/root', rootsRouter);


// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});

