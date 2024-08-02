const express = require('express')
const router = express.Router()
const stuModel = require('../Models/stuModel')

// 学生列表 /students/search
router.get('/search', async (req, res, next) => {
    try {
        const result = await stuModel.findAll({ rwa: true })
        res.json({
            code: 1001,
            msg: result
        })
    } catch (error) {
        next(error)
    }
})

// 新增学生 /students/add
router.post('/add', async (req, res, next) => {
    try {
        const { id, name, age, gender } = req.body
        const student = new stuModel({ id, name, age, gender })
        res.json({
            code: 1001,
            msg: result
        })
    } catch (error) {
        next(error)
    }
})

// 删除学生 /students/add
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.body
        await stuModel.destroy({ where: { id: id } })
        res.json({
            code: 1001,
            msg: '删除成功'
        })
    } catch (error) {
        next(error)
    }
});

// 学生详情 
router.get('/update', async (req, res) => {
    try {
        const { id, name, age, gender } = req.body
        const user = await stuModel.findOne({ where: { id: id } })
        if (!user) {
            return res.json({
                code: 1002,
                msg: '查询失败'
            })
        }
        await user.update({ name, age, gender })
        return res.json({
            code: 1001,
            msg: '更新成功'
        })
    } catch (error) {
        next(error)
    }
})

// 错误处理中间件
router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        code: 1002,
        msg: '服务器内部错误'
    })
})

module.exports = router