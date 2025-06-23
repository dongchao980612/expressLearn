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
app.set('view engine', 'pug');
const people = [
    { id: 1, name: "Hangzhou", age: 20 },
    { id: 2, name: "Beijing", age: 30 },
    { id: 3, name: "guangzhou", age: 40 }
]

// 显示表格页面
app.get('/', (req, res) => {
    res.render('index', { people });
});


// 处理表单提交，添加数据
app.post('/add', (req, res) => {
    const { name, age } = req.body;
    const id = people.length + 1;
    const newPerson = { id, name, age };
    people.push(newPerson);
    res.redirect("/")
});

//编辑数据页面
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const person = people.findIndex(item => item.id === parseInt(id));
    res.render('edit', { person });

});


app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const person = people.findIndex(item => item.id === parseInt(id));

    person.name = name;
    person.age = age;
    res.redirect("/");


});

// 删除
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const person = people.findIndex(item => item.id === parseInt(id));
    people.splice(person, 1);
    res.redirect("/");
});

// 监听端口
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});


