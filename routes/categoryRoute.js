const express   = require('express');
const router    = express.Router();
const M_category = require('../Models/categoryModel');
const controller = require('../controllers/categoryController')


// display all categories
router.get('/categories', controller.all_category)

//display one category
router.get('/category/:id',controller.category)



    
    module.exports = router;
 