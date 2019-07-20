const express=require('express')
const app=express();
const home = require('./routes/home')
const aboutUs = require('./routes/aboutUs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')
app.set('views','views')
app.use('/',home)
app.use('/about',aboutUs)


app.use('/assets',express.static(__dirname+'/public'))



app.listen(8787,()=>{
   console.log('Server started on http://localhost:8787')
})