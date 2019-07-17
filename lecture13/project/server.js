// const express=require('express')
// const app=express();
// let count=0;
// app.set('view engine','hbs')
// app.set('/',(res,req)=>{
//     count++;
//     res.render('index',{
//         count
//     })
// })
// app.listen(4000,function(){
//     console.log('ok')
// })

const expres = require('express')

const app = expres()

let count = 0

app.set('view engine', 'hbs')
// if views folder is to be changed
// app.set('views', 'mytemplates')


app.get('/', (req, res) => {
  count++
  res.render('index', {
    // count
  })
})


app.listen(8765,function(){
    console.log('running')
})