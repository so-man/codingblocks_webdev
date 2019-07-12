// // a="1000";
// // const x=parseInt(a);
// // console.log(x);
// function fun(){
//     //console.log(global==this)
//     return 10;
// }
// console.log(fun())
// console.log(new fun())

function person(name,age){
    this.firstName=name.split(" ")[0]
    this.lastName=name.split(" ")[1]
    this.isAdult=function(){
        return age>18
    }
}
let a=new person("harry potter",14);
console.log(a.isAdult());
a.lastName="sus";
console.log(a);
console.log(a.isAdult())