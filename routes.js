const express = require ('express')
const routes = express.Router()

routes.get('/',(req, res)=>{
    res.send('testing api')
})

module.exports = routes