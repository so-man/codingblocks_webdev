const route = require('express').Router()
const Users = require('../db').Users
const passport = require('../passport')

route.get('/login',(req,res)=>{
   res.render('login')
})
route.post('/login',passport.authenticate('local',{ 
   successRedirect: '/private',
   failureRedirect: '/public',

}))
route.get('/signup',(req,res)=>{
   res.render('signup')
})
route.post('/signup',(req,res)=>{
   Users.create({
      username:req.body.username,
      password:req.body.password,
      firstName:req.body.firstName,
      lastName:req.body.lastName
   }).then((createdUser)=>{
      res.redirect('/login')
   }).catch((err)=>{
      console.err("error")
   })
})
exports = module.exports = route