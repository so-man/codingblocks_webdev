// function person(name,age){
//     this.firstname=name.split(" ")[0];
//     this.lastname=name.split(" ")[1];
//     this.age=age
//     this.adult=function(){return age > 18}
// }
// let p=new person("john smith",10)
// console.log(p);
// console.log(p.adult())



function person(name,age){
    this.firstname=name.split(" ")[0];
    this.lastname=name.split(" ")[1];
    // this.age=age
    this.adult=function(){return age > 18}
}
let p=new person("john smith",10)
console.log(p);
console.log(p.adult())
