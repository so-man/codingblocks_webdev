const express=require('express')

const route=express.Router()
let teachers=[
   {name:'arnav', subject:'webdev'},
   {name:'abhi', subject:'android'}
]  
route.get('/',(req,res)=>{
   res.send(teachers)
})

route.get('/add',(req,res)=>{
   teachers.push({
      name:req.query.name,
      subject:req.query.subject
   })
   res.send(teachers)
})

route.get('/:id',(req,res)=>{
   const ied=parseInt(req.params.id)
   res.send(teachers[ied])
})

module.exports=route  