const mysql = require('mysql2')
const insert={
   name:process.argv[2],
   age:parseInt(process.argv[3]),
   city:process.argv[4]
}

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'testuser3',
   password:'testuser3',
   database: 'testtable3',
});
connection.query(
   `INSERT INTO persons(name,age,city)VALUES(
      '${insert.name}',
      '${insert.age}',
      '${insert.city}'
   )`,
   function(err,results){
      if(err){
         console.log(err)
      }else{
         console.log(results)
         console.log('insert successful')
      }
      connection.close();  
   }
)