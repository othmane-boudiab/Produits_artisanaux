const express = require('express')
const router = express.Router()
const Product = require("../Models/productModel");

router.get('/app/product', (req,res, next)=>{
    Product.findAll()
.then(product => {
    console.log(JSON.stringify(product));
}).catch((error)=> {
    //gestion erreur
    console.log(error);
})
})
// router.delete()