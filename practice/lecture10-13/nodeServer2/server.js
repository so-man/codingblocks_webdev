const express=require('express')
const server=express()

const m1=function(req,res,next){
   console.log('we are middleware1')
   next()
}
const m2=function(req,res,next){
      console.log('we are middleware 2')
   next()
}
const m3=function(req,res,next){
      console.log('we are middleware 3')
   next()
}

server.use(m1)
server.use('/a',m2)

server.get('/a',function(req,res,next){
   // console.log('hello world')
   res.send('hello world')
})
server.use(m3)
server.listen(3232) 