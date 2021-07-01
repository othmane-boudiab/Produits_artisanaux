const commentModel = require('../Models/index')

InsertComment = function (req, res) {
    const form = req.body
    // console.log(client_id, product_id, content, date)
    
    commentModel.create(form).then((data) => {
        res.status(201).json({message:"your data is added to the db"})
    }).catch((error) => {
        console.log(error)
        res.json({error:error.messaage})
    })
}
getComments = function (req, res) {
    adminModel.findAll().then((data) => {
        res.json(data)
    }).catch((error) => {
        console.log("this is the".error)
        res.json({ messaage: "there is an Error" })
    })
}
getOneComment = function (req, res) {
    const idParam = req.params.idComment

    commentModel.findAll({ where: { client_id: idParam } }).
        then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("this is the error".error);
            res.status(400).json({ message: "there is an error" })
        });
}

updateComment = function (req, res) {
    const idParam = req.params.idComment
    commentModel.update({
        content: req.body.content,
        date: req.body.date
    },
        {
            where: { client_id: idParam }
        }
    ).then(() => res.send("the modification is successful"))
        .catch((error) => {
            console.log("this is the error".error);
            res.status(400).json({ message: "there is an error" })
        });
}

deleteComment = function (req, res) {
    const idParam = req.params.idComment

    commentModel.destroy({
        where: {
            client_id: idParam
        }
    }).
        then(() => {
            res.send("the deletion is successful")
            console.log("success")
        })
        .catch((error) => {
            console.log("this is the error".error);
            res.status(400).json({ message: "there is an error" })
        });

}
module.exports = {
    InsertComment : InsertComment,
    getComments : getComments,
    getOneComment : getOneComment,
    updateComment : updateComment,
    deleteComment : deleteComment
}


// const express = require('express')
// const router = express.Router()
// const commentController = require('../controllers/commentaireController')
// const Comment = require('../Models/index')
// /*GET la page commentRouter*/
// router.get('/app/comment', function(req,res,next){
//     res.render('commentRouter')
// })
// router.route('/insert').post(commentController.InsertComment)
// router.route('/comments').get(commentController.getComments)
// router.route('/comment/:commentid/comments').get(commentController.getOneComment)
// router.put('/post',commentController.updateComment)
// router.delete('/delete',commentController.deleteComment)
// module.exports = router

// var commentaiController = {
//     addComment: addComment,
//     findComments: findComments,
//     findCommentById: findCommentById,
//     updateComment: updateComment,
//     deleteById: deleteById
// }

// function addComment (req, res) {
//     let comm = req.body;
//     Comment.create(comm).
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function findCommentById(req, res) {
//     Comment.findById(req.params.id).
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function deleteById(req, res) {
//     Comment.deleteById(req.params.id).
//         then((data) => {
//             res.status(200).json({
//                 message: "Comment deleted successfully",
//                 gig: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function updateComment(req, res) {
//     Comment.updateComment(req.body, req.params.id).
//         then((data) => {
//             res.status(200).json({
//                 message: "Comment updated successfully",
//                 comment: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function findComments(req, res) {
//     Comment.findAll().
//         then((data) => {
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// module.exports = commentaiController;