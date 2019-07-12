const express=require('express')
const route=express.Router()
let students=[
   {name:'sus', subject:'webdev'},
   {name:'deepa', subject:'android'}
]
route.get('/',(req,res)=>{
   res.send(students)
})
route.get('/:id',(req,res)=>res.send(students[req.params.id]))
module.exports=route  