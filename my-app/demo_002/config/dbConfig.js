const Sequelize = require('sequelize');

// 创建一个sequelize实例
const DB = new Sequelize('test_mysql_express', 'dongchao', 'p4rBB8jiWhWsZo9p', {
  host: 'mysql.sqlpub.com',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,// 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    idle: 10000 // 连接池中空闲连接的最大时间，单位是毫秒
  },
  define: {
    timestamps: false // 取消 Sequelize 自动添加时间戳字段
  }
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