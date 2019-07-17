const express=require('express')
const serv=express()
serv.get('/a',(req,res)=>{
   res.send('AAAAAAAAAAAA')
})
serv.get('/b',(req,res)=>{
   res.send('BBBBBBBBBBB')
})
serv.use((req,res)=>{
   res.send('<h1>404 NOT FOUND</h1>')
})
serv.listen(1111)