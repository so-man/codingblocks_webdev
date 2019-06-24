var para=document.getElementById("sup");
let string=''
function print(n){
    for(let i=1;i<n;i++){
       string =string + i + '<br>'
    }
    para.innerHTML=string
}

print(1)