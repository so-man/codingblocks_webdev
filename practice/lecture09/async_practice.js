function download(url,download){
    console.log("downloading "+url)
    setTimeout(function(){
        let filepath="E:\\app\\webd\\practice\\xyz.txt"
        console.log("file was doenloaded to "+ filepath)
        download(filepath)
    },1000)
}
download("http:\goole",function(path){
    console.log("we got file at path" + path)
})