const Product = require("./productModel")
const Client = require("./clientModel")

const order = connection.define('order')  
const comment = connection.define('comment') 

// ####### client &product(many to many)
// to create order association:
client.belongsToMany(product, {through:order})
product.belongsToMany(client, {through:order})

// to create comment association
client.belongsToMany(product, {through:comment})
product.belongsToMany(client, {through:comment})