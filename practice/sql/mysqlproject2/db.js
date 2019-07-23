const mysql = require('mysql2')

const connection=mysql.createConnection({
   host:'localhost',
   user:'testuser3',
   password:'testuser3',
   database:'testtable3'
})
function getallpersons(){
   return new Promise(function(resolve,reject){
      connection.query(
         `select* from persons;`,
         function(err,rows,cols){
            if(err){
               reject(err)
            }else{
               resolve(rows)
            }
         }
      )
   })
}

function addnewperson(name, age, city){
   return new Promise(function(resolve,reject){
      connection.query(
         `insert into persons (name,age,city) values (?,?,?)`,
         [name, age, city],
         function(err,results){
            if(err){
               reject(err)
            }else{
               resolve()
            }
         }
      )
   })
}
exports=module.exports ={
  getallpersons, 
  addnewperson
} 