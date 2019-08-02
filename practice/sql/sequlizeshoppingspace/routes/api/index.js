const route = require('express').Router()

route.use('/users',require('./users').route)
route.use('/products',require('./products').route)

exports = module.exports = {
   route
}