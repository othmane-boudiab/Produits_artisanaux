const express = require('express');
const router = express.Router()
const Product = require("../../Models/productModel");

const productController = require('../../controllers/productController')

router.post('/Admin/products', productController.creatProduct)
router.delete('/Admin/products/:id', productController.deleteProduct)
router.put('/Admin/products/edit/:id', productController.editProduct)


 module.exports = router