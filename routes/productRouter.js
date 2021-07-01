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
router.put('/app/product/edit/:id', (req,res)=>{
    const id = req.params.id
    Product.update(
      {name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        category_id_category: req.body.category_id_category,
    },
      {where: {id:id}}
    )
    .then(()=>{
      res.json({message:"your product had been updated"})
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({error})
    })
   })


 module.exports = router