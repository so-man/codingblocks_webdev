const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
   res.render('about.hbs')
})
module.exports = route