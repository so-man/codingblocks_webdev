const passport = require('passport')
const Users = require('./db').Users
const localStrategy = require('passport-local')


passport.serializeUser(function(user,done){
   console.log(user)
   done(null,user.username)
})

passport.deserializeUser(function(username,done){
   Users.findOne({
         username:username
   }).then((user)=>{
      if(!user){
         return done(new Error('no such user'))
      }
      done(null,user)
   }).catch((err)=>{
      done(err)
   })
})

passport.use(new localStrategy((username,password,done)=>{
   Users.findOne({
      where:{
          username:username 
      }
   }).then((user)=>{
      if(!user){
        return done(null,false,{message:'no such user'})
      }
      if(user.password !==password){
         return done(null,false,{message:'wrong ppassword'})
      }
      return done(null,user,{message:'its working'})
   }).catch((err)=>{
      return done(err)
   })
}))

exports = module.exports = passport