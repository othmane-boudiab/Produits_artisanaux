const express = require('express')
const router = express.Router()
const {adminModel} = require('../Models')

// Admin page route.
router
    .route('/admin')
        .get((req,res) => {
            adminModel.findAll().then(admin => {
                res.json(admin)
            })
        })


module.exports = router
