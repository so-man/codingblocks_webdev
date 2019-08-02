function download(url){
   return new Promise((resolve,reject)=>{
      console.log('downloadin from '+ url)
      if(!url.startsWith('http')){
         return reject( done(new Error("url must start with http"))) 
      }
      setTimeout(()=>{
         let savedFile = url.split('/').pop();
         console.log(`downloaded and saved as ${url.split('/').pop()}`)
         resolve(savedFile)
      },3000)
   })


}
 
function compress(file,format){
   return new Promise((resolve,reject)=>{
      console.log(`compressing ${file}`)
   if(['zip'].indexOf(format) === -1){
      return reject(new Error("format must be genuine"))
   }
   setTimeout(() => {
      let fileName = file.split('.')[0] + '.'+ format;
      console.log(`compressed and saved as ${file.split('.')[0]}`+ "."+format)
      resolve(fileName)
   },2000);

   })
}

function upload(server,file){
   return new Promise((resolve,reject)=>{
      console.log(`uploading ${file} at ${server}`)
      if(!server.startsWith("http")){
      return reject(new Error("server must be correct"))
   }

   setTimeout(() => {
      console.log(`uplaoded to ${server}`)
      resolve(file)
   }, 2000);
})
}

download("http://somesite.com/path/image.jpg ")
   .then((x)=>compress(x,"zip"))
   .then((y)=>upload('http//:file.com',y))
   .catch((err)=>{
      console.warn(err)
   })
