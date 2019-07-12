function download(url){
    return new Promise((resolve,reject)=>{
        let fileName=url.split('/').pop()
        console.log(`domnaloading ${fileName} from ${url}`)
        if(!url.startsWith('http//')){
            return reject('wrong site ')
            // return reject(new Error('wrong site'))
        }
        setTimeout(()=>{
            
            console.log(`download done`)
            return resolve(fileName)
        },4000)
    })
}

function compress(fileName){
    return new Promise((resolve,reject)=>{
        let fileType=fileName.split('.')[1];
        console.log(`compresing ${fileName}`)
        if(fileType!='jpg'){
            let what_happen='file type must be jpg';
            return reject(what_happen)
            // return reject(new Error(`file type must be jpg`))
        }
        setTimeout(()=>{
            console.log(`compresed ${fileName}`)
            return resolve(fileName)
        },1000)
    })
}
                    
download('http//www.google.com/image.jpg')
    .then(compress)
    .then((what_happen)=>{
        console.log(what_happen)
    })
    .catch((what_happen)=>{
        console.log(what_happen)
    })

// download('http//www.google.com/image.jpg')
//     .then((file)=>{
//         compress("jpg",file)
//     })

// download('http//www.google.com/image.jpg')
//     .then((filKaNam)=>{
//         console.log(filKaNam)
//     })

// function download(url,downloaded){
//     console.log(`downloading from ${url}`)
//     setTimeout(() => {
//         let file='buri buri'
//         console.log(`download over saved as ${url}`)
//         downloaded(file)
//     }, 3000);
// }
// function compress(file,compressed){
//     console.log(`compressing ${file}`)
//     setTimeout(()=>{
//         console.log(`compressed and saved as ${file} at c drive`)
//         compressed(file)
//     },2000)
// }
// function upload(server,file){
//     console.log(`uploading ${file} to ${server}`)
//     setTimeout(() => {
//         console.log(`uploaded to ${server}`)
//     },2000);

// }
// download('http:\\www.google',(file)=>{
//      compress('file',(archive)=>{
//          upload('yahoo','gang')
//      })
// })

