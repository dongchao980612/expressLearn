const express = require('express')
const router = express.Router()
const stuModel = require('../Models/stuModel')

const { body, validationResult } = require('express-validator');


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
router.post('/add',

    [
        // 验证用户名，最小长度为5
        body('name').withMessage('用户名不能为空').custom(async username => {
            const user = await stuModel.findOne({ where: { name: username } })
            if (user) {
                return Promise.reject('用户名已存在')
            }
        }),

        // 验证电子邮件格式
        body('age').notEmpty().withMessage('年龄不能为空'),

        // 验证密码与确认密码是否相同
        body('gender').notEmpty().withMessage('性别不能为空')
            .isEmail().withMessage('性别格式不正确')
            .bail()
            .custom(async email => {
                const user = await stuModel.findOne({ where: { email: email } })
                if (user) {
                    return Promise.reject('性别已存在')
                }
            })
    ],

    async (req, res, next) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                code: 1002,
                msg: errors.array()
            })
        }

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