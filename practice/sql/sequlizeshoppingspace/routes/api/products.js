const Products = require('../../db').Product
const route = require('express').Router(); 

route.get('/',(req,res)=>{
   Products.findAll()
   .then((product)=>{
      res.status(200).send(product)
   }).catch((err)=>{
      res.status(500).send({
         error:"could not retrive the products"
      })
   })
})
route.post('/',(req,res)=>{

   if(isNaN(req.body.price)){
      return res.status(403).send({
         error:"price is not valid"
      })
   }

   Products.create({
      name: req.body.name,
      manufucturer: req.body.manufucturer,
      price: parseFloat(req.body.price)
   })
   .then((product)=>{
      res.status(201).send(product)
   })
   .catch((err)=>{
      res.send({
         error:"err ading product"
      })
   })
})

exports = module.exports ={
   route
}