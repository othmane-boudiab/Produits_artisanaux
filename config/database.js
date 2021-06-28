  
const {Sequelize} = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('./config')[env]

// console.log(config)

const connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

module.exports = connection;
