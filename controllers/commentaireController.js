const comment = require('../Models/commentairModel')

InsertComment = function(req,res,next){
    const comment = new Comment({
        content : req.body.content,
        date : req.body.date
    })

    comment.InsertComment((error, result)=>{
        if(error){
            console.log(error)
            res.redirect('/')
            return;
        }
        console.log(result)
        res.redirect('/getcomment')
    })
}
getComments = function(req,res,next){
    Comment.find({}, 'content date', (error, result)=>{
        if(error){
            console.log(error)
            res.redirect('/')
        }
        console.log(result)
        res.render('index', {items : result})
    })
}
updateComment = function(req,res,next){
    const ID = req.body.id
    const updateComment = {
        content : req.body.content,
        date : req.body.date
    }
    Comment.updateOne({_id : ID}, {$set : updateComment}, (error, doc)=>{
        if(error){
            console.log(error)
            res.redirect('/')
            return
        }
        console.log(doc)
        res.redirect('/getcomments')
    })
}
deleteComment = function(req,res,next){
    const ID = req.body.IDComment.deleteOne({_id:ID},(error, doc)=>{
        if(error){
            console.log(error)
            res.redirect('/')
            return
        }
        console.log(doc)
        res.redirect('./getcomments')
    })
}
module.exports = {
    InsertComment : InsertComment,
    getComments : getComments,
    updateComment : updateComment,
    deleteComment : deleteComment
}