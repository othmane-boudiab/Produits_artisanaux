const express   = require('express');
const router    = express.Router();
const M_category = require('../Models/categoryModel');


// display all categories
router.get('/',(req,res)=>{
    M_category.findAll().
    then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log("this is the error".error);
        res.status(400).json({message:"there is an error"})
    });
})


//display one category
router.get('/:id',(req,res)=>{
    const idParam = req.params.id

    M_category.findOne({ where: {id_category: idParam} }).
    then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log("this is the error".error);
        res.status(400).json({message:"there is an error"})
    });
})


//add category
router.post('/',(req,res)=>{

})


// delete a category 
router.delete('/:id',(req,res)=>{
   const id = req.params.id
   M_category.destroy({where:{
    id_category:id
   }}).then(function(deleteRecord) {
       if (deleteRecord === 1) { // deleteRecord will return number of rows deleted
           res.status(200).json({message:"Delete Successfully"})
       } else {
        res.status(404).json({message:"Delete doesn't Success"})
       }
   }).catch((error)=>{
       console.log("the error is".error)
       res.json({message:"error"})
   })

})


// update a category
router.put('/:id',(req,res)=>{

})

    
    module.exports = router;
 