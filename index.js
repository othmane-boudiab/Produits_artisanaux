// require important modules
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// require the connection (DB)
const db = require('./config/database')
const model= require ('./Models/index')
const Sequelize = require('sequelize')
const adminModel = require('./Models/adminModel')
// require routes
const categoriesRouter = require('./routes/categoryRoute')
const commentRouter = require('./routes/commentRouter')

const ProductRouter = require('./routes/productRouter')
// const ClientRouter = require('./routes/client')

// create our App
const app = express()
const PORT = process.env.PORT || 5000

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Home Page
app.get('/', (req,res) => {
    res.send('hello')
  })
  app.use('/app',categoriesRouter)
  app.use('/app', ProductRouter)
  app.use('/app', commentRouter)

db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })

db.sync().then(() => {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));







