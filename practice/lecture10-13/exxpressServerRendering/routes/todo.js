const express=require('express')
const route=express.Router()
todoslist=[
   {task:'first'},
   {task:'another'}
]

route.get('/',(req,res)=>{
   res.render('todo.hbs',{todoslist})
})
route.post('/',(req,res)=>{
   todoslist.push(
      {task:req.body.newTodo}
   )
   res.redirect('/tab')
})
module.exports=route