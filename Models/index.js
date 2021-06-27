const connection = require("../config/database")
const sequelize =  require("sequelize")
// require models
const ModelProduct = require("./productModel");
const ModelCategory =require("./categoryModel")
const ModelClient = require("./clientModel")
const ModelAdmin = require("./adminModel")



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
ModelClient.belongsToMany(ModelProduct, {through:Order})
ModelProduct.belongsToMany(ModelClient, {through:Order})


// to create comment association
ModelClient.belongsToMany(ModelProduct, {through:Comment})
ModelProduct.belongsToMany(ModelClient, {through:Comment})


// relation between category and product (one->many)
ModelCategory.hasMany(ModelProduct)
ModelProduct.belongsTo(ModelCategory)

//


connection.sync({force:false}).then(()=>{console.log("these tables had been created")}).catch((error)=>{console.log(error)})
 
// Epicerie Sucrée Boissons Cosmétiques et bien être
ModelProduct.create({name:"oil argan", image:"https://im0-tub-com.yandex.net/i?id=d4756625248412b6a89dc4fb04440321&n=13", price:100.34 , description:"Retrouver les moyens de paiements de vos achats en ligne. ... La sécurité des paiements avec l'e-Boutique repose sur le système de paiement de Maroc Télécommerce, certifié par le Centre Comment se fait le paiement à la livraison ?"})

ModelProduct.findAll()
.then(product => {
    console.log(JSON.stringify(product));
}).catch((error)=> {
    //gestion erreur
    console.log(error);
});