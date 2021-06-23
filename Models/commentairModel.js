const { INTEGER } = require("sequelize/types")

module.exports = (db,type) =>{
    return db.define('commentaire', {
        idCommentaire :{ 
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        content :{
            type:type.STRING,
        }
    })
}
