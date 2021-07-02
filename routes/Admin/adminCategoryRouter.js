const express = require('express');
const router = express.Router()
const M_category = require('../../Models/categoryModel');
const categoryController = require('../../controllers/categoryController')

//add category
router.post('/Admin/newCategory', categoryController.Add_category)


// delete a category 
router.delete('/Admin/delete/:id', categoryController.delete_category)


// update a category
router.put('/Admin/edit/:id', categoryController.updata_category)

    
    module.exports = router;