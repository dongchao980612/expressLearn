const DB = require('../config/dbConfig.js');
const Sequelize = require('sequelize');

const Student = DB.define('Student', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        fileld: "id",
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: '匿名',
    },
    pwd: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: '123456',
    },
    sex: {
        type: Sequelize.STRING(2),
        allowNull: false,
        defaultValue: '女',
    },
    birthday: {
        type: Sequelize.DATE,
    },
    address: {
        type: Sequelize.STRING(100),
    },
    email: {
        type: Sequelize.STRING(50),
    }
}, {
    freezeTableName: true,
    timestamps: false // 如果你的表没有 createdAt 和 updatedAt 字段，设置为 false
});

module.exports = Student;