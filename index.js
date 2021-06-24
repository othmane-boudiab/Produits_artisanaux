// require important modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// require routes
const AdminRouter = require('./routes/adminRoutes')
// const categoriesRouter = require('./routes/catégories')
// const ProductRouter = require('./routes/products')
// const ClientRouter = require('./routes/client')
// const CommentaireRouter = require('./routes/commentaire')



// create our App
const app = express()
const port = process.env.PORT || 3000


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// require the connection (DB)
const db = require('./config/database')
const Sequelize  = require('sequelize')



// Home Page
app.get('/', (req,res) => {
    res.send('hello')
  })


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api/v1/
app.use('/api/v1/', AdminRouter)
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
app.listen(port, () => console.log(`server run on port ${port}`))
// Sequelize.models.AdminModel
