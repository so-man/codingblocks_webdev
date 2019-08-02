const express = require('express')
const app = express();
let path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')

app.use('/pages',require('./routes/pages').route)
app.use('/api',require('./routes/api').route)
app.use('/', express.static(path.join(__dirname , 'public')))

app.listen(1111,()=>{
   console.log('running')
})