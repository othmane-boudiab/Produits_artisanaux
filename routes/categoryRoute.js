const express   = require('express');
const router    = express.Router();
const M_category = require('../Models/categoryModel');
const controller = require('../controllers/categoryController')


// display all categories
router.get('/', controller.all_category)

//display one category
router.get('/:id',controller.category)

//add category
router.post('/new', controller.Add_category)


// delete a category 
router.delete('/:id',controller.delete_category)


// update a category
router.put('/edit/:id',controller.updata_category)

    
    module.exports = router;
 