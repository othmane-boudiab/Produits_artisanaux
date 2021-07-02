const express = require('express');
const router = express.Router()
const Product = require("../../Models/index");
// const bodyParser = require("body-parser")
const commentController = require('../../controllers/commentaireController')



router.delete('/Admin/comment/delete/:idComment', commentController.deleteComment)


 module.exports = router