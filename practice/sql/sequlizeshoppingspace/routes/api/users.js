const User = require('../../db').User 
const route  = require('express').Router()

route.get('/',(req,res)=>{
   User.findAll()
      .then((user)=>{
         res.status(200).send(user)
      })
      .catch((err)=>{
         res.status(500).send({
            error:"could not retrive users"
         })
      })
})
route.post('/',(req,res)=>{
   User.create({
     name: req.body.name
   }).then((user)=>{
      res.status(201).send(user)
   })
   .catch((err)=>{
      res.status.send({
         error:"could not add new"
      })
   })
})


   
exports = module.exports = {
   route
}