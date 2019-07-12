function download(url,downloaded){
    console.log(`downloading from ${url}`)
    setTimeout(() => {
        let file='buri buri'
        console.log(`download over saved as ${url}`)
        downloaded(file)
    }, 3000);
}
function compress(file,compressed){
    console.log(`compressing ${file}`)
    setTimeout(()=>{
        console.log(`compressed and saved as ${file} at c drive`)
        compressed(file)
    },2000)
}
function upload(server,file){
    console.log(`uploading ${file} to ${server}`)
    setTimeout(() => {
        console.log(`uploaded to ${server}`)
    },2000);

}
download('http:\\www.google',(file)=>{
     compress('file',(archive)=>{
         upload('yahoo','gang')
     })
})

