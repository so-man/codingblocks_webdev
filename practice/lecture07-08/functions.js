// function greeter(){
//     console.log('greeter')
// }
// let hellosir=greeter;
// console.log(hellosir==greeter);
// hellosir();

// function add(x,y){
//     return x+y;
// }
// let sum=add;
// console.log(sum)

function getfirstname(fullname){
    return fullname.split(" ")[0]
}
function greeter(findname,fullname){
    let firstname=findname(fullname)
    console.log(`hello ${firstname}`)
}
greeter(getfirstname,"sus DarkWolf")