// function  download(url,done){
//    console.log("starting the download from "+ url)

//    setTimeout(() => {
//       let filePath = "c :\\windows\desktop"
//       console.log("file was downloaded")
//       done(filePath);
//    }, 3000);
// }

// function resize(filePath,done){
//    console.log("file was resized and saved at path " + filePath)

//    setTimeout(()=>{
//       let fileName = 'xyz';
//       done(fileName)
//    },3000)
// }
// function upload(serverName){
//    console.log("uploading at "+serverName)

//    setTimeout(()=>{
//       console.log("file uploaded at "+ serverName)
//    },2000)
// }

// download("https://google/images",(x)=>{
//    resize(x,(fileName)=>{
//       upload(fileName)
//    })
// })


function download(url,done){
   console.log('downloadin from '+ url)
   setTimeout(()=>{
      let savedFile = url.split('/').pop();
      console.log(`downloaded and saved as ${url.split('/').pop()}`)
      done(savedFile)
   },3000)
}
 
function compress(file,format,done){
   console.log(`compressing ${file}`)
   setTimeout(() => {
      let fileName = file.split('.')[0] + '.'+ format;
      console.log(`compressed and saved as ${file.split('.')[0]}`+ "."+format)
      done(fileName)
   },2000);

}

function upload(server,file,done){
   console.log(`uploading ${file} at ${server}`)
   setTimeout(() => {
      console.log(`uplaoded to ${server}`)
   }, 2000);
}

download("http://somesite.com/path/image.jpg ",(x)=>{
   compress(x,"zip",(y)=>{
      upload("http//:file.com",y,()=>{

      })
   })
})
// compress("myfile.png","zip")
// // upload("http//:file.com","abcd")