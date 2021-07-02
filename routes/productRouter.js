const express = require('express');
const router = express.Router()
const Product = require("../Models/productModel");
// const bodyParser = require("body-parser")
const productController = require('../controllers/productController')

router.get('/products', productController.findALLProduct),
router.get('/products/:id', productController.findOneProduct)



 module.exports = router