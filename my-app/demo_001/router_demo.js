const express = require('express');

const router = express.Router();


const middleware_router1 = (req, res, next) => {
    console.log('这是一个中间件 middleware_router 1');
    next();
}
const middleware_router2 = (req, res, next) => {
    console.log('这是一个中间件 middleware_router 2');
    next();
}


router.get('/', middleware_router1,middleware_router2,(req, res) => {
    // 请求对象
    console.log('req.params', req.query);


    // 响应对象
    // res.send({"name":"小明", "age":28}); 
    res.set({
        'aaaheader': 'bbbheader'
    })

    // res.status(201).send({"name":"小明", "age":28});

    // res.end();
    //抛出异常
    res.status(500)
    res.send('HOME PAGE')
    throw new Error('get 出错了');
    
  });
  
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const{name, age} = req.body;
    console.log(name, age);
    res.send('Post express!');   
});

router.delete('/', (req, res) => {
    res.send('Delete express!');   
});

router.put('/', (req, res) => {
    res.send('Put express!');   
});

module.exports = router;
