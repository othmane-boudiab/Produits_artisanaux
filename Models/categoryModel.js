
const category = db.define('categort',{
    id_category:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Name_category:{
        type:sequelize.STRING,
        allowNull:false
    },
    status_category:{
        type:sequelize.STRING,
        allowNull:false
    }
})
 
module.exports = category