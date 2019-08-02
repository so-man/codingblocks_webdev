function download(url,done){
   console.log('downloadin from '+ url)
   if(!url.startsWith('http')){
      return done(new Error("url must start with http"))
   }
   setTimeout(()=>{
      let savedFile = url.split('/').pop();
      console.log(`downloaded and saved as ${url.split('/').pop()}`)
      done(null,savedFile)
   },3000)
}
 
function compress(file,format,done){
   console.log(`compressing ${file}`)
   if(['zip'].indexOf(format) === -1){
      return done(new Error("format must be genuine"))
   }
   setTimeout(() => {
      let fileName = file.split('.')[0] + '.'+ format;
      console.log(`compressed and saved as ${file.split('.')[0]}`+ "."+format)
      done(null,fileName)
   },2000);

}

function upload(server,file,done){
   console.log(`uploading ${file} at ${server}`)
   if(!server.startsWith("http")){
     return done(new Error("server must be correct"))
   }
  
   setTimeout(() => {
      console.log(`uplaoded to ${server}`)
      done(null)
   }, 2000);
}

download("http://somesite.com/path/image.jpg ",(err,x)=>{
   if(err) throw err
   compress(x,"zsip",(err,y)=>{
      if(err) {
         console.warn(err)
         y = x
      } 
      upload("http//:file.com",y,(err)=>{
         if(err) throw err
      })
   })
})
