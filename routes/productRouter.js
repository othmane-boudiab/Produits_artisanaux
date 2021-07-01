const express = require('express');
const router = express.Router()
const Product = require("../Models/productModel");
// const bodyParser = require("body-parser")
const productController = require('../controllers/productController')

router.get('/app/product', productController.findALLProduct),
router.get('/app/product/:id', productController.findOneProduct)
router.post('/app/product', productController.creatProduct)
router.delete('/app/product/:id', productController.deleteProduct)
router.put('/app/product/edit/:id', productController.editProduct)


 module.exports = router