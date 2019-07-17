$(function(){
   let newtodo=$('#newtodo')
   let addtodo=$('#addtodo')
   let todolist=$('#todolist')
 
   addtodo.click(()=>{
      let newtask=newtodo.val()
      $.post(
         '/x/',
         {task:newtask},
         function(data){
            todolist.empty()
            for(todos of data){
               todolist.append('<li>'+ todos.task +'</li>')
            }
         }
      )
   })
  

})