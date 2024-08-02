const express = require('express');
const mysql = require('mysql');
const cors=require('cors');
const bodyParser=require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(cors());


const connnection = mysql.createConnection({
    host: 'mysql.sqlpub.com',
    user: 'dongchao',
    password: 'p4rBB8jiWhWsZo9p',
    database: 'test_mysql_express'
});

connnection.connect((err) => {
    if (err) {
        console.log('数据库连接失败',err.stack);
    } else {
        console.log('数据库连接成功',connnection.threadId);
    }
});

connnection.query('SELECT * FROM student', (err, results, fields) => {
    if (err) throw err;

    //定义POST请求的接口
    app.post('/api', (req, res) => {
        res.send(results)
    })



    //定义GET请求的接口 
    app.get('/api', (req, res) => {
        res.send(results)
    })


    //启动服务
    app.listen(3000, () => {    
        console.log('Server running at http://127.0.0.1:3000/');
    })
});