const express = require('express')
const controller = require('../controllers/commentaireController')

const router = express.Router()
const commentModel = require('../Models/index')


router.get('/comments', controller.getComments)
router.get('/comment/:idComment', controller.getOneComment)
router.post('/comment/newComment', controller.InsertComment)
router.delete('/comment/delete/:idComment', controller.deleteComment)
router.put('/comment/edit/:idComment', controller.updateComment)


module.exports = router;