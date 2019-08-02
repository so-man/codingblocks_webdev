const mysql = require('mysql2')

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'testuser3',
   password:'testuser3',
   database: 'testtable3',
   });  
   connection.query(
      `SELECT* FROM persons`,
      function(err,results,fields){
         if(err){
            console.log(err)
         }else{
            console.log(results)
            console.log(fields)
            console.log('insert successful')
         }
         connection.close();  
      }
   )