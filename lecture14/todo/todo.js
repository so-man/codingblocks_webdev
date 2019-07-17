$(()=>{
    $('#add').click(() => {
      console.log('add clicked')
      $('#todolist').append(
        ` <li>${$('#task').val()s}</li>`
     )  
    })
    $('button.todo').click(() => {
      console.log('btn clicked')
    })
})