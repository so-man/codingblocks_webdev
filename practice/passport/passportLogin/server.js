const express = require('express')
const app = express()
app.set('view engine','hbs')
const session = require('express-session')
const passport = require('./passport')


app.use(session({ secret: "cats" }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.use('/',require('./routes/route'))

app.listen(2323,()=>{
   console.log('runnning')
})