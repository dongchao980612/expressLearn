//导入express模块
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// 数据库连接
const mysql = require('mysql');

// 创建express实例
const app = express();


// 中间件
//路由加载之前
app.use(express.static('resource'))
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'api_dev'
});

// 连接数据库
connection.connect((err) => {
    if (err) {
        console.error('error connecting: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

connection.query('SELECT * FROM users', (err, results, fields) => {
    // 定义GET请求的路由
    if (err) throw err;
    app.get('/db', (req, res) => {
        res.send(results);
    });

    // 定义POST请求的路由
    if (err) throw err;
    app.post('/db', (req, res) => {
        res.send(results);
    });

    // 监听端口
    app.listen(3000, () => {
        console.log('Server running at http://127.0.0.1:3000');
    });

});


connection.end((err) => {
    if (err) {
        console.error('error connecting: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});



