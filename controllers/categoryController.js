

const M_category = require('../Models/categoryModel');

// // display all categories
exports.all_category= (req,res)=>{
    M_category.findAll().
    then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log("this is the error".error);
        res.status(400).json({message:"there is an error"})
    });
}

// // display one category by id
exports.category= (req,res)=>{
    const idParam = req.params.id

    M_category.findOne({ where: {id_category: idParam} }).
    then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log("this is the error".error);
        res.status(400).json({message:"there is an error"})
    });
}

// add a category 
exports.Add_category= (req,res)=>{
    M_category.create(req.body).then((newData)=>{
        res.status(201).json({message:"your category is add to the database"})
    }).catch((e)=>{
        console.log("this is the error",e)
        res.status(500).json({error:e.message})
    })
} 

// delete a category
exports.delete_category=(req,res)=>{
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
 
 }

 // update a category 
 exports.updata_category=(req,res)=>{
    const id = req.params.id
    M_category.update({
        Name_category:req.body.Name_category,
        status_category:req.body.status_category
    } , {where:{id_category:id}}).then(function(result) {
        res.json({message:"your category is edit now"})
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:error.message})
    })
 
 }




