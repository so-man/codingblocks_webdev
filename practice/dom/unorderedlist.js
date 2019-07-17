window.onload=function(){
    let num=document.getElementById("num")
    let print=document.getElementById("print")
    let list=document.getElementById("list")

    print.onclick=function(){
        // let N=parseInt (num.value)
        let start=new Date().getTime()
        let N=num.value;
        // let innerHTML='';
        for(let i=1;i<= N;i++){
            let item=document.createElement('li')
            item.innerText=i
            list.appendChild(item)
            // innerHTML+='<li>' + i + '</li>'
        }
        // list.innerHTML=innerHTML;
       console.log(new Date().getTime()-start);
    }
}

