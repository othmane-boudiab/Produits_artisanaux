const express = require('express');
const router = express.Router()
const Client = require("../Models/clientModel");
// const bodyParser = require("body-parser")
const clientController = require('../controllers/clientController')

router.post('/sign-up', clientController.addingClient),
// router.get('/products/:id', clientController.findOneProduct)



 module.exports = router