const Product = require("../Models/productModel");
exports.findALLProduct = (req,res)=>{
    Product.findAll()
.then((product) => {
    console.log(JSON.stringify(product));
    res.json(product)
}).catch((error)=> {
    console.log(error);
})
}
exports.findOneProduct = (req,res)=>{
    const id = req.params.id
    Product.findOne( { where: {id:id}}).
    then((product)=>{
        res.json(product)
    }).catch((error)=>{
        console.log(error);
    })
}
exports.creatProduct = (req, res) =>{
    Product.create(req.body).then((newProduct) => {
        // console.log(JSON.stringify(product));
        res.status(201).json(newProduct)
    }).catch((error)=> {
        console.log(error)
        res.json({error:error.message})
    })
}
exports.deleteProduct = (req,res)=>{
    const id = req.params.id
    Product.destroy( { where: {id:id}}).
    then(()=>{
        res.json({msg: "the product had been deleted"})
    }).catch((error)=>{
        console.log(error);
    })
}
exports.editProduct = (req,res)=>{
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
   }