function write(){
   const fs=require('fs')
   fn=(path,data)=>{
      return new Promise((resolve,reject)=>{
         fs.write(path,data,(err)=>{
            if(err){
               reject(err)
            }else{
               resolve()
            }
         })
      })
   }
}

function promisify(fn){
   if(err){
      return err
   }
}