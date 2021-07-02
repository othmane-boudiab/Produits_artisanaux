const Client = require("../Models/clientModel");
exports.addingClient = (req, res) =>{
    console.log(req.body)
    Client.create(req.body).then((newClient) => {
        console.log("client adding successfully");
        res.status(201).json(newClient)
    }).catch((error)=> {
        console.log(error)
        res.json({error:error.message})
    })
}