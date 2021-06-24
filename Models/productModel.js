const connection = require("../config/database")
const sequelize =  require("sequelize")

const product = connection.define('product',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    image : {
        type: sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: sequelize.FLOAT,
        allowNull: false, 
    },
    description : {
        type: sequelize.TEXT,
        allowNull: false,
    },  },
    {tableName: 'product', timestamps: false, underscored: true}
)

module.exports= product;