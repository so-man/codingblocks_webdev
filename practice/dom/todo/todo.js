window.onload=function(){
    const newtask=document.getElementById("newtask")
    const addtask =document.getElementById("addtask")
    const todolist=document.getElementById("todolist")

    addtask.onclick=function(){
        let li=document.createElement("li")
        li.innerText=newtask.value;
        let btn=document.createElement('button')
        btn.innerText='X';
        li.appendChild(btn)
        btn.onclick=function(event){
            let temp=event.target.parentElement;
            let mi=temp.innerText;
            temp.innerHTML=`<u>${mi}</u>`
    
            // console.log(event)

        }
        todolist.appendChild(li)
    }
    
}