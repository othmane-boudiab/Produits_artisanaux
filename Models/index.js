const db = require("../config/database")
const sequelize =  require("sequelize")
// require models
const M_Product = require("./productModel")
const M_Client = require("./clientModel")
const M_category =require("./categoryModel")



// new tables
const order = connection.define('order',{
    quantity:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    date:{
        type:Sequelize.DATE,
        allowNull: false 
    } 
}, {timestamps: false, underscored: true})  
const comment = connection.define('comment',{
    content:{
    type:sequelize.TEXT,
    allowNull: false
},
date:{
    type:Sequelize.DATE,
    allowNull: false 
}
},{ timestamps: false ,underscored: true }) 

// ####### client &product(many to many)
// to create order association:
client.belongsToMany(product, {through:order})
product.belongsToMany(client, {through:order})


// to create comment association
client.belongsToMany(product, {through:comment})
product.belongsToMany(client, {through:comment})


// relation between category and product (one->many)
category.hasMany(product)
product.belongsTo(category)

//


connection.sync({force:false}).then(()=>console.log("these tables had been created"))