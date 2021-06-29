const express = require('express');
const router = express.Router()
const Product = require("../Models/productModel");

router.get('/app/product', (req,res)=>{
    Product.findAll()
.then((product) => {
    console.log(JSON.stringify(product));
    res.json(product)
}).catch((error)=> {
    console.log(error);
})
}),
router.get('/app/product/:id', (req,res)=>{
    const id = req.params.id
    Product.findOne( { where: {id:id}}).
    then((product)=>{
        res.json(product)
    }).catch((error)=>{
        console.log(error);
    })
})


 module.exports = router