const connection = require("../config/database")
const sequelize =  require("sequelize")
// require models
const Product = require("./productModel");
const Category =require("./categoryModel")
const Client = require("./clientModel")
const Admin = require("./adminModel")



// new tables
const Order = connection.define('order',{
    quantity:{
        type:sequelize.INTEGER,
        allowNull: false
    },
    date:{
        type:sequelize.DATE,
        allowNull: false 
    } 
}, {timestamps: false, underscored: true})  
const Comment = connection.define('comment',{
    content:{
    type:sequelize.TEXT,
    allowNull: false
},
date:{
    type:sequelize.DATE,
    allowNull: false 
}
},{ timestamps: false ,underscored: true }) 

// ####### client &product(many to many)
// to create order association:
Client.belongsToMany(Product, {through:Order})
Product.belongsToMany(Client, {through:Order})


// to create comment association
Client.belongsToMany(Product, {through:Comment})
Product.belongsToMany(Client, {through:Comment})


// relation between category and product (one->many)
Category.hasMany(Product)
Product.belongsTo(Category)

//



// Epicerie Sucrée Boissons Cosmétiques et bien être
Product.create({name:"oil argan", image:"https://im0-tub-com.yandex.net/i?id=d4756625248412b6a89dc4fb04440321&n=13", price:100.34 , description:"Retrouver les moyens de paiements de vos achats en ligne. ... La sécurité des paiements avec l'e-Boutique repose sur le système de paiement de Maroc Télécommerce, certifié par le Centre Comment se fait le paiement à la livraison ?"})
connection.sync({force:false}).then(()=>{console.log("these tables had been created")}).catch((error)=>{console.log(error)})
// add data to category
// Category.create({Name_category:"slippers",status_category:"true"})
