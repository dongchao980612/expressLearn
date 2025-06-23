//导入express模块
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// 数据库连接
const mysql = require('mysql');
const path = require('path');

// 创建express实例
const app = express();

const studentRouter = require(path.join(__dirname, 'routes', "students"));


// 中间件
//路由加载之前
app.use(express.static('resource'))
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/students', studentRouter);


// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});


