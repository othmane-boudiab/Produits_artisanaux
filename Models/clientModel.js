const connection = require("../config/database")
const sequelize =  require("sequelize")

const client = connection.define('client',{
        id:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey : true,
        },
        firstName:{
            type: sequelize.STRING,
            allowNull: false,
        },
        lastName : {
            type: sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.STRING,
            allowNull: false, 
            unique: true
        },
        password : {
            type: sequelize.STRING,
            allowNull: false },
        },
        {tableName: 'client', timestamps: false, underscored: true}
    )

module.exports= client;

// console.log(client === sequelize.models.client)