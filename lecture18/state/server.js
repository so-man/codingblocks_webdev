const express=require('express')
const session=require('express-session');
const server=express();


server.use(session({
   secret:'a very long unguessable string',
   resave:false,
   saveUninitialize:true
}))
server.get('/',(req,res)=>{
   console.log(req.session);
   
   if (!req.session.visits) {
      req.session.visits = 1
      res.send('Hello There')
    } else {
      req.session.visits++
      res.send('Welcome Back')
    }
    req.session.save()
})

server.listen(1111,()=>{
   console.log('running')
})


