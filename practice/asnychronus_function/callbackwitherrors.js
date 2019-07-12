function download(url,fileName,downloaded){
    console.log(`downloading ${url} as ${fileName}`)
    setTimeout(() => {
        // let startWith=utl.split(\)[0];
        if(!url.startsWith('http')){
            return downloaded(new Error(`url must start with http`))
        }
        console.log(`downloaded ${url} and save as ${fileName}`)
        downloaded(null)
    },1000);
}

function compress(fileName,format,compressed){
    console.log(`compress starting...............`);
    setTimeout(()=>{
        // let frmt=format.split('.')[1];
        let frmt=format.split(' ')[0];
        if(frmt!='mp4'){
            return compressed(new Error(`file must be mp4`))
        }
        console.log(`compresssed`)
        compressed(null)
    },2000)
}

function upload(fileName,server,uploaded){
    console.log(`uploading ${fileName} to the ${server}`)

    setTimeout(()=>{
        if(!server.startsWith('fttp')){
            return uploaded(new Error('should statr with fttp'))
        }
        console.log(`uploaded`)
        uploaded(null)
    },2000)
}


// function upload()
download('http:\\google','video',(err)=>{
    if(err){
        console.log('error')
    }
    compress('video','mp',(err)=>{
        if(err){
            console.log(err)
        }
        upload('video','fttp\yo',(err)=>{

        })
    })
})