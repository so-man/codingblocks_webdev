const fs=require('fs')
// fs.writeFile(__dirname+'/myFile.txt','some data',function(err){
//    if(err) throw err
//    console.log('file was written')
// })
   
fs.readFile(__dirname+'/myFile.txt',function(err,data){
   if(err) throw err
   console.log(data.toString())
})