const connection = require("../config/database")
// const sequelize =  require("sequelize")

const { DataTypes } = require("sequelize"); 


const category = connection.define('category',{
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
}, {tableName: 'category', timestamps: false, underscored: true})
 
module.exports = category