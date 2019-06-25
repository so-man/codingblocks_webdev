function creategreeter(name){
    let firstname=name.split(" ")[0]
    function greeter(){
        console.log(`hello ${firstname}`)
    }

    return greeter;
}
let susgreeter=creategreeter('sus prasad');//afunction get stored in variables
let darkwolf=creategreeter('dark wolf');
// susgreeter();
// darkwolf();
// susgreeter();
let a=function(){
    console.log('yo')
}
console.log(a)
// console.log(typeof a);