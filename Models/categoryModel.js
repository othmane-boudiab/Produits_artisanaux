const { DataTypes } = require("sequelize"); 


const category = connection.define('categort',{
    id_category:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Name_category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status_category:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
})
 
module.exports = category