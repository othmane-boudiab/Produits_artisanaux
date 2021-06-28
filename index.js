// require important modules
require('dotenv').config()
const express = require('express')
// const bodyParser = require('body-parser')
// require the connection (DB)
const sequelize = require ('sequelize')
const db = require('./config/database')
const model= require ('./Models/index')
// const cors = require('cors')

// require routes
// const AdminRouter = require('./routes/adminRoutes')
// const categoriesRouter = require('./routes/catégories')
const ProductRouter = require('./routes/productRouter')
// const ClientRouter = require('./routes/client')
// const CommentaireRouter = require('./routes/commentaire')



// create our App
const app = express()
const port = process.env.PORT || 5000

// console.log(process.env.PORT)

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// require the connection (DB)
const db = require('./config/database.js')



// Home Page
app.get('/', (req,res) => {
    res.send('hello ')
  })


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api/v1/
// app.use('/api/v1/', AdminRouter)
// app.use('/api/v1/', categoriesRouter)
// app.use('/api/v1/', ClientRouter)
// app.use('/api/v1/', ProductRouter) // /api/v1/product
// app.use('/api/v1/', CommentaireRouter)




// Testing the connection
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })

// START THE SERVER
app.listen(port, () => console.log(`server running on port ${port}`))
// const client = require("./Models/clientModel")
// console.log(client === sequelize.models.client)