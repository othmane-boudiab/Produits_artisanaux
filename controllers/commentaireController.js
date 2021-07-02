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
    commentModel.findAll().then((data) => {
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

