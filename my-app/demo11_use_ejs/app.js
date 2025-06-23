//导入express模块
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
// 创建express实例
const app = express();



// 中间件
//路由加载之前
app.use(express.static('resource'))
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 路由
app.get('/api', (req, res) => {
    res.locals = {
        title: 'Example',
        message: 'This is a message',
        name_local: "dongchao_local",
        age_local: 28,
        homeList_local: [
            { id: 1, name: "上海" },
            { id: 2, name: "北京" },
            { id: 3, name: "广州" }
        ]
    };

    const homeList = [
        { id: 1, name: "上海" },
        { id: 2, name: "北京" },
        { id: 3, name: "广州" }
    ]
    res.render('api',
        {
            name: "dongchao",
            age: 25,
            homeList
        },);
});


// 模板+数据
app.get('/apiTemple', (req, res) => {
    fs.readFile("views/index.html", "utf8", function (err, data) {
        res.send(data);
    })

});


// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});


