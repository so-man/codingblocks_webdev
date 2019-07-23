const express = require('express')
const app = express();
const db = require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')

app.get('/',(req,res)=>{
   db.getallpersons()
      .then((persons)=>{
         res.render('persons',{persons})
      
      })
      .catch((err)=>{
         res.send(err)
      })
   
})

app.get('/add',(req,res)=>{
   res.render('addPersons')
})
app.post('/add',(req,res)=>{
   db.addnewperson(req.body.x, req.body.age, req.body.city)
   .then(()=>{
      res.redirect('/')
   })
   .catch((err)=>{
      res.send(err)
   })
})
app.listen(1111,()=>{
   console.log('running')
})