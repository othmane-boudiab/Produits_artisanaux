const express = require('express')
const router = express.Router()
const {adminModel} = require('../Models/adminModel')

// Admin page route.
router
    .route('/admin')
        .get((req,res) => {
            adminModel.findAll().then(admin => {
                res.status(200).json(admin)
            })
        })
        


module.exports = router













