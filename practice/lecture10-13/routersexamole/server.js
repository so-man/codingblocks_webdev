const express=require('express')
const serv=express()

const teacherRoute=require('./roots/teaachers')
serv.use(express.json())
const studentRoute=require('./roots/students')
serv.use(express.urlencoded({extended:true}))
serv.use('/students',studentRoute)
serv.use('/teachers',teacherRoute)

serv.listen(2121)