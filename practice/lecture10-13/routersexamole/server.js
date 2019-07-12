const express=require('express')
const serv=express()

const teacherRoute=require('./roots/teaachers')
const studentRoute=require('./roots/students')

serv.use('/students',studentRoute)
serv.use('/teachers',teacherRoute)

serv.listen(2121)