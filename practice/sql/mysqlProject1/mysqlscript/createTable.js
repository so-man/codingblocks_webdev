const mysql = require('mysql2')

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'mytestdb'
 });
 connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
       id INTEGER AUTO_INCRIMENT PRIMARY KEY,
       name VARCHAT(50) NOT NULL , 
       age INTEGER NOT NULL,
       city VARCHAR(30)
    )`,
    function(err,results){
       if(err){
          console .log(err)
       }else{
          console.log('Table created')
       }
    }
 )