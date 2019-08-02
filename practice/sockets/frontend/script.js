let socket = io();

$(function(){
   let msglist = $('#msglist')
   let sendbtn = $('#sendmsg')
   let msgbox = $('#msgbox')

   sendbtn.click(()=>{
      console.log("button clicked")
      let msg = msgbox.val()
      socket.emit('send_msg',{message : msg})
   })
   socket.on('recv_msg',(data)=>{
      msglist.append(`<li> ${data.message} </li>`)
   })
})