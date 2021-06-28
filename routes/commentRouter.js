const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentaireController')
/*GET la page commentRouter*/
router.get('/', function(req,res,next){
    res.render('commentRouter')
})
router.post('/insert',commentController.insertComment)
router.get('/get',commentController.getComment)
router.post('/post',commentController.updateComment)
router.delete('/delete',commentController.deleteComment)
module.exports = router