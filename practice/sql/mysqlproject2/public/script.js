$(function(){
   let input_name = $("#name")
   let input_age = $("#age")
   let input_city = $("#city")
   let btn_submit = $("#submit")
   let table_persons = $("#persons")

   function refresh(persons){
      table_persons.empty()
      table_persons.append(
         `<tr>
         <th>name</th>
         <th>age</th>
         <th>city</th>
      </tr>`
      )
      for(person of persons){
         table_persons.append(
            `<tr>
               <td>${person.name}</td>
               <td>${person.age}</td>
               <td>${person.city}</td>
            </tr>`
         )
      }
   }
   $.get('/api/persons',(data) => {
      refresh(data)
   })
   btn_submit.click(()=>{
      $.post('/api/persons',
      {
         name:input_name.val(),
         age:input_age.val(),
         city:input_city.val()
      },
      (data)=>{
         refresh(data)
      })
   })
   
})