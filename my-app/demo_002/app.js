const express = require('express');
// const router = require('./routers/student');
const cors = require('cors');
const path = require('path');

const app = express();

//中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const stuRouter = require(path.join(__dirname, 'routers/student'));
console.log(stuRouter);
app.use('/student', stuRouter);


app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

