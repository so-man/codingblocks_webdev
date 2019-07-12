const fs=require('fs')
let arr
fs.readFile(__dirname+'/File.txt',(err,data)=>{
   if(err){
      throw err;
   } 
   arr=data.toString().split('\r\n')   

})

const fw=require('fw')
fw.appendFile(__dirname+'/newFile.txt',arr,function(err)){
   if(err){
      throw err;
   }

}
