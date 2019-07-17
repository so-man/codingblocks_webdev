const express=require('express')
const server=express()
const todoRoute=require('./routes/x.js')

server.use(express.json())
server.use(express.urlencoded({extended:true}) )

server.get('/hello',(req,res)=>{
   res.send('hello')
})
server.use('/public',express.static(__dirname + '/public'))

server.use('/x',todoRoute)

server.listen(1111,()=>{
   console.log('ok')
})