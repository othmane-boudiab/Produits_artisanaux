// require important modules
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const Sequelize = require ('sequelize')
// require the connection (DB)
const db = require('./config/database')
const model= require('./Models/index')
const model1= require('./Models/adminModel')

// require route
const houda = require ("../Produits_artisanaux/routes/commentRouter")

// create our App
const app = express()
const PORT = process.env.PORT || 5000
//Database Connection

// const path = require('path')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// require routes
// const AdminRouter = require('./routes/adminRoutes')
// const categoriesRouter = require('./routes/catégories')
// const ProductRouter = require('./routes/productRouter')
// const ClientRouter = require('./routes/client')
// const commentRouter = require('./routes/commentRouter')
// const commentcontroller = require('./controllers/commentaireController')

// Home Page
app.get('/', (req,res) => {
  res.send('hello')
})

app.use('/app', houda)

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







