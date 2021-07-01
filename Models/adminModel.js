const connection = require("../config/database")
const sequelize =  require("sequelize")

const admin = connection.define('admin', {
        id_Admin :{ 
            type: sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        fullname :{
            type:sequelize.STRING,
            validate:{
                is:["^[a-zA-Z]+$", 'i']
            }
        },
        email: {
            type:sequelize.STRING,
            allowNull: false,
            isEmail: true,
        },
        password:{
            type:sequelize.STRING,
            allowNull: false
        }
    }, {tableName: 'admin', timestamps: false, underscored: true});

module.exports = admin;

  