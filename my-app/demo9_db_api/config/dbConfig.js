const Sequelize = require('sequelize');

// 创建一个sequelize实例
const DB = new Sequelize('test_mysql_express', 'dongchao', 'p4rBB8jiWhWsZo9p', {
  host: 'mysql.sqlpub.com', // 主机地址
  dialect: 'mysql', // 数据库端口名
  port: 3306, // 数据库端口号
  pool: {
    max: 5,// 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    idle: 10000 // 连接池中空闲连接的最大时间，单位是毫秒
  },
  logging: false, // 是否打印sql语句
});


DB.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })

  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// 导出sequelize实例
module.exports = DB;