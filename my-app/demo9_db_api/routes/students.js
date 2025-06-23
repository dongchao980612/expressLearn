const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// 学生列表 /students/search
router.get('/search', async (req, res, next) => {
    try {
        const result = await Student.findAll({ raw: true });
        res.json({
            code: 1001,
            msg: result
        });
    } catch (error) {
        next(error);
    }
});



// 新增学生 /students/add
router.post('/add', async (req, res, next) => {
    try {
        const { id, name, pwd, sex } = req.body;

        const result = await Student.create({ id, name, pwd, sex });
        res.json({
            code: 1001,
            msg: result
        });
    } catch (error) {
        next(error);
    }
});

// 更新学生信息 /students/update
router.put('/update', async (req, res, next) => {
    try {
        const { id, name, pwd, sex, birthday, address, email } = req.body;

        const user = await Student.findOne({ where: { id } });
        if (!user) {
            return res.json({
                code: 1002,
                msg: '更新失败'
            });
        }
        await user.update({ name, pwd, sex, birthday, address, email });
        return res.json({
            code: 1001,
            msg: '更新成功'
        });
    } catch (error) {
        next(error);
    }
});

// 删除学生 /students/delete
router.post('/delete', async (req, res, next) => {
    try {
        const { id } = req.body;
        await Student.destroy({ where: { id } });
        res.json({
            code: 1001,
            msg: '删除成功'
        });
    } catch (error) {
        next(error);
    }
});



// 错误处理中间件
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        code: 1002,
        msg: '服务器内部错误'
    });
});

module.exports = router;