const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const app = express();
const server = http.createServer(app)
const io = socketio(server)
app.use('/',express.static(path.join(__dirname , 'frontend')))

io.on('connection',(socket)=>{
   console.log("new socket formend from id" + socket.id)
   socket.emit('connected')

   socket.on('send_msg',(data)=>{
      io.emit('recv_msg',data)
   })
})


server.listen(2323,()=>{
   console.log('running')
})

