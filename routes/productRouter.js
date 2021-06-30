const express = require('express');
const router = express.Router()
const Product = require("../Models/productModel");
// const bodyParser = require("body-parser")

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
router.post('/app/product', (req, res) =>{
    Product.create(req.body).then((newProduct) => {
        // console.log(JSON.stringify(product));
        res.status(201).json(newProduct)
    }).catch((error)=> {
        console.log(error)
        res.json({error:error.message})
    })

})
router.delete('/app/product/:id', (req,res)=>{
    const id = req.params.id
    Product.destroy( { where: {id:id}}).
    then(()=>{
        res.json({msg: "the product had been deleted"})
    }).catch((error)=>{
        console.log(error);
    })
})
router.put('/app/product/:id', (req,res)=>{
    Product.update(
      {title: req.body.title},
      {where: req.params.bookId}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch((error)=>{
        console.log(error);
    })
   })


 module.exports = router