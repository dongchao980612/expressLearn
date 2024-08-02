const express = require('express');
const router = require('./router_demo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
//中间件
const middleware = (req, res, next) => {
    console.log('这是一个中间件 app 1');
    next();
}

//错误中间件
const middleware_error = (error, res, req, next) => {
    console.log('console 发生异常', error.message);
    res.send('send 出错了', error.messag);
}



app.use(middleware);

app.use((req, res, next) => {
    console.log('这是一个中间件 app 2');
    next();
});

//路由加载之前
app.use(express.static('resource'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", router);

app.use(middleware_error);


app.get('/api', (req, res) => {
    res.render("api", { "name": "dongchao", "age": 18 });
});

const homeList = [
    {
        "title": "首页",
        "url": "/"
    },
    {
        "title": "关于",
        "url": "/about"
    },
    {
        "title": "联系",
        "url": "/contact"
    }
]
app.get('/home', (req, res) => {
    res.render("home", { homeList: homeList });
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

