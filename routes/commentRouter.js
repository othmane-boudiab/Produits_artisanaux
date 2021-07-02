const express = require('express')
const router = express.Router()

const commentModel = require('../Models/index')
const commentController = require('../controllers/commentaireController')


router.get('/comments', commentController.getComments)
router.get('/comment/:idComment', commentController.getOneComment)
router.post('/comment/newComment', commentController.InsertComment)
router.put('/comment/edit/:idComment', commentController.updateComment)


module.exports = router;