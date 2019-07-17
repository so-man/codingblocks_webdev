const express=require('express')
const server=express()
server.get('/',(req,res,next)=>{
   console.log('yo')
   res.send("hello world")
})

server.get('/greet/:tod',(req,res,next)=>{
   let greet='greetings  ' + req.query.name
   let  x='greetings  '+ req.params.tod;
   res.send(x+" "+greet)
})
server.get('/html',(req,res,next)=>{
   res.send(`
      <html>
         <body>
            <h1>this is html</h1>
         </body>
      </html>

   `)
})             

server.listen(7071)