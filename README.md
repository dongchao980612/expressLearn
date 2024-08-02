# Express学习笔记

视频来源：[B站：全栈小刘](https://www.bilibili.com/video/BV1yN4y1S7xU/)

## Express概述

## 初识Expreess
什么是[Express](https://express.nodejs.cn/)?
- 官方给出的概念:Express是基于Node.js平台，快速，开放，极简的Web开发框架
- 通俗的理解:Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的

使用示例：

```sh
mkdir my-app
cd my-app
npm init -y 
```

http框架代码：
```js
// http_demo.js
var http = require('http');

// 通过 http 模块创建服务
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');


}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');

```
Express框架：
```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
```
## Express路由

```js
// demo_001/app.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({"name":"小明", "age":28});   
});

app.post('/', (req, res) => {
    res.send('Post express!');   
});

app.delete('/', (req, res) => {
    res.send('Delete express!');   
});

app.put('/', (req, res) => {
    res.send('Put express!');   
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
```
> 热部署 nodemon app.js

## 路由模块化

路由文件：
```js
// router_demo.js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({"name":"小明", "age":28});   
  });
  
router.post('/', (req, res) => {
    res.send('Post express!');   
});

router.delete('/', (req, res) => {
    res.send('Delete express!');   
});

router.put('/', (req, res) => {
    res.send('Put express!');   
});

module.exports = router;
```

使用路由：
```js
// demo_001/app.js
const express = require('express');
const router = require('./router_demo');

const app = express();

app.use(router);

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

```
## 路由参数

```js
// demo_001/app.js
router.get('/', (req, res) => {
    // 请求对象
    console.log('req.params', req.query);

    
    // 响应对象
    // res.send({"name":"小明", "age":28}); 
    res.set({
        'aaaheader': 'bbbheader'
    })

    res.status(201).send({"name":"小明", "age":28});

    res.end();
  });
```
## 中间件

定义:
```js
// 定义方式1:
const middleware = (req, res, next) => {
    console.log('这是一个中间件 app 1');
    next();
}
app.use(middleware);

// 定义方式2
app.use((req, res, next) => {
    console.log('这是一个中间件 app 2');
    next();
});


// 定义方式3 路由内部中间件
const middleware_router1 = (req, res, next) => {
    console.log('这是一个中间件 middleware_router 1');
    next();
}
router.get('/', middleware_router1,middleware_router2,(req, res) => {

});
```
## 内置中间件

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const{name, age} = req.body;
    console.log(name, age);
    res.send('Post express!');   
});

```

## 数据库
> https://www.sqlpub.com/#/

```js
// demo_002/db.js
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
    database: 'information_schema'
});

connnection.connect((err) => {
    if (err) {
        console.log('数据库连接失败',err.stack);
    } else {
        console.log('数据库连接成功',connnection.threadId);
    }
});

connnection.query('SELECT * FROM TABLES', (err, results, fields) => {
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
```
