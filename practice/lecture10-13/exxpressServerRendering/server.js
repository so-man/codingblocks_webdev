const express=require('express')
const srv=express()
const todoRoute=require('./routes/todo')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set('view engine','hbs')
srv.set('views','xyz')
srv.use('/tab',todoRoute)

srv.listen(1111,()=>{
   console.log('running')
})